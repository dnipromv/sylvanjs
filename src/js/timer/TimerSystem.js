"use strict";

import Delay from './Delay.js';
import Repeat from './Repeat.js';

class TimerSystem {
    constructor(ticker) {
        this._ticker = ticker;
    }

    delay(callback, delayTime = 1) {
        return new Delay(this._ticker, callback, delayTime);
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