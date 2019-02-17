"use strict";

import SylvanAPI from './SylvanAPI.js';

import Game from "./Game";

function DevoteAPI() {
    SylvanAPI.call(this);
    var devoteAPI = this;

    class DevoteGame extends Game {
        constructor(config) {
            super(config);
            devoteAPI.director = this.director;
            devoteAPI.timer = this.timer;
            devoteAPI.renderer = this.renderer;
        }
    };

    this.Game = DevoteGame;
}

DevoteAPI.prototype = Object.create(SylvanAPI.prototype);

export default DevoteAPI;