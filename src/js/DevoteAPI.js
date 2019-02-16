"use strict";

import SylvanAPI from './SylvanAPI.js';

import ResourceRegistry from "./resourceManagement/ResourceRegistry";
import ResourceLoader from "./resourceManagement/ResourceLoader";
import Game from "./Game";

function DevoteAPI() {
    SylvanAPI.call(this);
    var devoteAPI = this;

    this.resources = new ResourceRegistry();
    this.loader = new ResourceLoader(this.resources);

    class DevoteGame extends Game {
        constructor(config) {
            super(config);
            devoteAPI.director = this.director;
            devoteAPI.renderer = this.renderer;
        }
    };

    this.Game = DevoteGame;
}

DevoteAPI.prototype = Object.create(SylvanAPI.prototype);

export default DevoteAPI;