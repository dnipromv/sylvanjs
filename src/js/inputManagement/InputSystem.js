"use strict";

class InputSystem {
    constructor() {
        this._handlers = [];
        
        window.addEventListener("keydown", (event) => {
            if (event.repeat) {
                this._emit(event.key.toLowerCase() + "/press");
            }
            else {
                this._emit(event.key.toLowerCase() + "/down");
            }
        });
    }

    keyDown(key, callback, params, scope) {
        if (Array.isArray(key)) {
            key.forEach((key) => {
                this._registerEvent(key.toLowerCase() + "/down", callback, params, scope);
            }, this);
        }
        else {
            this._registerEvent(key.toLowerCase() + "/down", callback, params, scope);
        }
    }
    
    _emit(eventKey) {
        const eventHandlers = this._handlers[eventKey];
        if (eventHandlers) {
            for (let i = eventHandlers.length - 1; i >= 0; i--) {
                const handler = eventHandlers[i];
                
                if (handler.scope) {
                    handler.callback.apply(handler.scope, handler.params);
                }
                else {
                    handler.callback(...handler.params);
                }
            }
        }
    }

    _registerEvent(eventKey, callback, params = [], scope) {
        this._handlers[eventKey] = this._handlers[eventKey] || [];
        this._handlers[eventKey].push({callback, params, scope});
    }
}

export default InputSystem;