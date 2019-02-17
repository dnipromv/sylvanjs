"use strict";

import Tween from './Tween';

class TweenSystem {
    constructor(ticker) {
        this._ticker = ticker;
    }

    to(target, duration, properties) {
        return new Tween(this._ticker, target, duration, properties);
    }
}

export default TweenSystem;