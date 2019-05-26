"use strict";

class Delay {
    constructor(ticker, callback, finishTime = 1, params = [], scope) {
        this._ticker = ticker;
        
        this._callback = callback;
        this._params = params;
        this._scope = scope;

        this._finishTime = finishTime;
        this._elapsedTime = 0;

        this._ticker.add(this._tickerUpdate, this);
    }

    get elapsedTime() {
        return this._elapsedTime;
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
        if (this._elapsedTime >= this._finishTime) {
            this._ticker.remove(this._tickerUpdate, this);
            this._igniteCallback();
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

export default Delay;