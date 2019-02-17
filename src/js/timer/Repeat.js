"use strict";

class Repeat {
    constructor(ticker, callback, intervalTime = 1, finalIteration = -1) {
        this._ticker = ticker;
        this._callback = callback;
        this._intervalTime = intervalTime;
        this._finalIteration = finalIteration;
        this._elapsedTime = 0;
        this._currentIteration = 0;
        
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
        if (this._elapsedTime >= this._intervalTime * (this._currentIteration + 1)) {
            this._callback(this._currentIteration);
            this._currentIteration++;
            if (this._finalIteration >= 0 && this._currentIteration > this._finalIteration) {
                this._ticker.remove(this._tickerUpdate, this);
            }
        }
    }
}

export default Repeat;