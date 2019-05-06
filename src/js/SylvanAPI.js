"use strict";

import * as PIXI from 'pixi.js';

import Game from './Game';
import Scene from './sceneManagement/Scene';
import Vector from './components/Vector';
import Camera from './components/Camera';
import HttpService from './components/HttpService';
import ResourceRegistry from "./resourceManagement/ResourceRegistry";
import ResourceLoader from "./resourceManagement/ResourceLoader";
import InputSystem from './inputManagement/InputSystem';

import EASING from './animation/EASING';
import KEYBOARD_KEY from './inputManagement/KEYBOARD_KEY';

function SylvanAPI() {
    this.assets = new ResourceRegistry();
    this.loader = new ResourceLoader(this.assets);
    this.input = SylvanAPI.input;

    this.Game = Game;
    this.Scene = Scene;
    this.Vector = Vector;
    this.Camera = Camera;
    this.HttpService = HttpService;

    this.EASING = EASING;
    this.KEYBOARD_KEY = KEYBOARD_KEY;
}

SylvanAPI.prototype = Object.create(PIXI);

SylvanAPI.input = new InputSystem();

export default SylvanAPI;