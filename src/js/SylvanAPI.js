"use strict";

import * as PIXI from 'pixi.js';
import * as Tilemap from 'pixi-tilemap';

import Game from './Game';
import Scene from './components/structure/Scene';
import Vector from './components/Vector';
import Camera from './components/Camera';
import HttpService from './components/HttpService';

function SylvanAPI() {
    this.Game = Game;
    this.Scene = Scene;
    this.Vector = Vector;
    this.Camera = Camera;
    this.HttpService = HttpService;
}

SylvanAPI.prototype = PIXI;

export default SylvanAPI;