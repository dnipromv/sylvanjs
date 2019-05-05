"use strict";

import { Application } from 'pixi.js';

import TimerSystem from "./timer/TimerSystem";
import TweenSystem from "./animation/TweenSystem";
import SceneDirector from "./sceneManagement/SceneDirector";
import InputHandler from "./components/InputHandler";

class Game extends Application {
    constructor(config) {
        super({view: config.canvas, width: config.canvas.width, height: config.canvas.height});
        
        this.director = new SceneDirector(this.stage);
        this.timer = new TimerSystem(this._ticker);
        this.tween = new TweenSystem(this._ticker);

        this._setUpSceneDecorator();
    }

    refresh() {
        this.renderer.resize(this.view.width, this.view.height);
        this.director.resize(this.renderer.width, this.renderer.height);
    }

    _setUpSceneDecorator() {
        const game = this;
        this.director.on("sceneCreate", (scene) => {
            Object.defineProperty(scene, "renderer", {get: () => {return game.renderer}});
            Object.defineProperty(scene, "director", {get: () => {return game.director}});
        });
    }
}

export default Game;