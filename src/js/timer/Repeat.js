"use strict";

import Delay from "./Delay";

class Repeat {
    constructor(ticker, callback, intervalTime = 1, finalIteration = -1, params = [], scope) {
        this._ticker = ticker;
        
        this._callback = callback;
        this._params = params;
        this._scope = scope;
        
        this._elapsedTime = 0;
        this._intervalTime = intervalTime;
        this._lastStepTime = 0;

        this._iteration = 0;
        this._finalIteration = finalIteration;
        
        this._ticker.add(this._tickerUpdate, this);
    }

    get iteration() {
        return this._iteration;
    }

    get finalIteration() {
        return this._finalIteration;
    }

    get elapsedTime() {
        return this._elapsedTime;
    }

    get intervalTime() {
        return this._intervalTime;
    }

    set intervalTime(value) {
        this._intervalTime = value;
    }

    finish() {
        this.cancel();
        this._igniteCallback();   
    }

    cancel() {
        this._ticker.remove(this._tickerUpdate, this);
    }

    _tickerUpdate(deltaTime) {
        this._elapsedTime += deltaTime * 0.01;
        if (this._elapsedTime >= this._lastStepTime + this._intervalTime) {
            this._igniteCallback(this._iteration);
            this._iteration++;
            this._lastStepTime = this._elapsedTime;
            if (this._finalIteration >= 0 && this._iteration > this._finalIteration) {
                this._ticker.remove(this._tickerUpdate, this);
            }
        }
    }

    _igniteCallback() {
        if (this._scope) {
            this._callback.call(this._scope, ...this._params);
        }
        else {
            this._callback(...this._params);
        }
    }
}

export default Repeat;