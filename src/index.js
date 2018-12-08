import * as PIXI from 'pixi.js';
import * as Tilemap from 'pixi-tilemap';
import * as Victor from 'victor';

import Game from './js/Game';
import Scene from './js/components/structure/Scene';
import Camera from './js/components/Camera';

const Sylvan = PIXI;

Sylvan.Vector = Victor;
Sylvan.Game = Game;
Sylvan.Scene = Scene;
Sylvan.Camera = Camera;

export default Sylvan;