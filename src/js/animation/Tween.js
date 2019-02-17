"use strict";

import anime from 'animejs';
import EASING from './EASING';

class Tween {
    constructor(ticker, target, duration, config) {
        this._ticker = ticker;
        this._elapsedTime = 0;
        this._anime = anime({
            targets: target,
            alpha: 0,
            easing: config.easing || EASING.LINEAR,
            duration: duration * 1000,
            autoplay: false
        });

        this._ticker.add(this._tickerUpdate, this);
    }

    _tickerUpdate(deltaTime) {
        this._elapsedTime += deltaTime * 10;
        this._anime.tick(this._elapsedTime);
        
        if (this._anime.completed) {
            this._ticker.remove(this._tickerUpdate, this);
        }
    }
}

export default Tween;