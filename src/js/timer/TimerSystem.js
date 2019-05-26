"use strict";

import Delay from './Delay.js';
import Repeat from './Repeat.js';

class TimerSystem {
    constructor(ticker) {
        this._ticker = ticker;
    }

    delay(callback, delayTime, params, scope) {
        return new Delay(this._ticker, callback, delayTime, params, scope);
    }

    repeat(callback, intervalTime, iterations, params, scope) {
        return new Repeat(this._ticker, callback, intervalTime, iterations, params, scope);
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