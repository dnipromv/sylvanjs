"use strict";

import Delay from './Delay.js';
import Repeat from './Repeat.js';

class TimerSystem {
    constructor(ticker) {
        this._ticker = ticker;
    }

    delay(callback, delayTime) {
        return new Delay(this._ticker, callback, delayTime);
    }

    repeat(callback, intervalTime, iterations) {
        return new Repeat(this._ticker, callback, intervalTime, iterations);
    }

    cancel(artifact) {
        if (artifact.cancel) {
            artifact.cancel();
        }
    }

    finish(artifact) {
        if (artifact.finish) {
            artifact.finish();
        }
    }
}

export default TimerSystem;