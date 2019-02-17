"use strict";

class Delay {
    constructor(ticker, callback, finishTime = 1) {
        this._ticker = ticker;
        this._callback = callback;
        this._finishTime = finishTime;
        this._elapsedTime = 0;

        this._ticker.add(this._tickerUpdate, this);
    }

    finish() {
        this.cancel();
        this._callback();   
    }

    cancel() {
        this._ticker.remove(this._tickerUpdate, this);
    }

    _tickerUpdate(deltaTime) {
        this._elapsedTime += deltaTime * 0.01;
        if (this._elapsedTime >= this._finishTime) {
            this._ticker.remove(this._tickerUpdate, this);
            this._callback();
        }
    }
}

export default Delay;