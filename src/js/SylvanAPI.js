"use strict";

import * as PIXI from 'pixi.js';

import Game from './Game';
import Scene from './sceneManagement/Scene';
import Vector from './components/Vector';
import Camera from './components/Camera';
import HttpService from './components/HttpService';
import ResourceRegistry from "./resourceManagement/ResourceRegistry";
import ResourceLoader from "./resourceManagement/ResourceLoader";

import EASING from './animation/EASING';

function SylvanAPI() {
    this.assets = new ResourceRegistry();
    this.loader = new ResourceLoader(this.assets);

    this.Game = Game;
    this.Scene = Scene;
    this.Vector = Vector;
    this.Camera = Camera;
    this.HttpService = HttpService;

    this.EASING = EASING;
}

SylvanAPI.prototype = Object.create(PIXI);

export default SylvanAPI;