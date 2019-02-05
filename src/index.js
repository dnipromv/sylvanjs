import * as PIXI from 'pixi.js';
import * as Tilemap from 'pixi-tilemap';

import Game from './js/Game';
import Scene from './js/components/structure/Scene';
import Vector from './js/components/Vector';
import Camera from './js/components/Camera';
import HttpService from './js/components/HttpService';

const Sylvan = PIXI;

Sylvan.Game = Game;
Sylvan.Scene = Scene;
Sylvan.Vector = Vector;
Sylvan.Camera = Camera;
Sylvan.HttpService = HttpService;

export default Sylvan;