"use strict";

class InputSystem {
    constructor() {
        this._handlers = [];
        this._pressState = new Map();
        
        window.addEventListener("keydown", (event) => {
            if (event.repeat) {
                this._emit(event.key.toLowerCase() + "/press");
            }
            else {
                this._pressState.set(event.key.toLowerCase(), true);
                this._emit(event.key.toLowerCase() + "/down");
            }
        });

        window.addEventListener("keyup", (event) => {
            this._pressState.set(event.key.toLowerCase(), false);
            this._emit(event.key.toLowerCase() + "/up");
        });
    }

    keyDown(key, callback, params, scope) {
        this._registerEvent(key, "down", callback, params, scope);
    }

    keyUp(key, callback, params, scope) {
        this._registerEvent(key, "up", callback, params, scope);
    }

    keyPress(key, callback, intervalTime, params, scope) {
        this._registerEvent(key, "press", this._onPressStep, [{intervalTime, stepTime: Date.now()}, callback, params, scope], this);
    }

    isKeyDown(key) {
        if (Array.isArray(key)) {
            return key.reduce((state, key) => { return state || this._pressState.get(key.toLowerCase()); }, false);
        }
        else {
            return this._pressState(key.toLowerCase());
        }
    }

    _registerEvent(buttonKey, buttonState, callback, params = [], scope) {
        if (Array.isArray(buttonKey)) {
            buttonKey.forEach((buttonKey) => {
                this._registerHandler(buttonKey.toLowerCase() + "/" + buttonState, callback, params, scope);
            }, this);
        }
        else {
            this._registerHandler(buttonKey.toLowerCase() + "/" + buttonState, callback, params, scope);
        }
    }

    _registerHandler(eventKey, callback, params = [], scope) {
        this._handlers[eventKey] = this._handlers[eventKey] || [];
        this._handlers[eventKey].push({callback, params, scope});
    }

    _onPressStep(handlerData, callback, params, scope) {
        const timeSinceLastStep = (Date.now() - handlerData.stepTime) * 0.01;
        if (timeSinceLastStep >= handlerData.intervalTime) {
            handlerData.stepTime = Date.now();
            this._igniteCallback(callback, params, scope);
        }
    }

    _emit(eventKey) {
        const eventHandlers = this._handlers[eventKey];
        if (eventHandlers) {
            for (let i = eventHandlers.length - 1; i >= 0; i--) {
                const handler = eventHandlers[i];
                this._igniteCallback(handler.callback, handler.params, handler.scope);
            }
        }
    }

    _igniteCallback(callback, params, scope) {
        if (scope) {
            callback.call(scope, ...params);
        }
        else {
            callback(...params);
        }
    }
}

export default InputSystem;