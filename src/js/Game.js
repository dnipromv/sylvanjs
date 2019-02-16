"use strict";

import ResourceRegistry from "./resourceManagement/ResourceRegistry";
import ResourceLoader from "./resourceManagement/ResourceLoader";
import SceneDirector from "./sceneManagement/SceneDirector";
import InputHandler from "./components/InputHandler";

class Game extends PIXI.Application {
    constructor(config) {
        super({view: config.canvas, width: config.canvas.width, height: config.canvas.height});

        this.director = new SceneDirector(this.stage);

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