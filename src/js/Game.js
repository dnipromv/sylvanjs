"use strict";

import ResourceRegistry from "./components/ResourceRegistry";
import ResourceLoader from "./components/ResourceLoader";
import SceneDirector from "./components/SceneDirector";
import InputHandler from "./components/InputHandler";

class Game extends PIXI.Application {
    constructor(canvas) {
        super({ width: canvas.width, height: canvas.height, view: canvas });

        this.director = new SceneDirector(this.stage);
        this.resources = this.resources || new ResourceRegistry();
        this._input = new InputHandler();
        this._loader = new ResourceLoader(this.resources);

        this._setUpSceneDecorator();
    }

    refresh() {
        this.renderer.resize(this.view.width, this.view.height);
        this.director.resize(this.renderer.width, this.renderer.height);
    }

    load(...urls) {
        this.loader.load(...urls);
    }

    _setUpSceneDecorator() {
        const game = this;
        this.director.on("sceneCreate", (scene) => {
            Object.defineProperty(scene, "renderer", {get: () => {return game.renderer}});
            Object.defineProperty(scene, "director", {get: () => {return game.director}});
            Object.defineProperty(scene, "resources", {get: () => {return game.resources}});
            //Object.defineProperty(scene, "input", {get: () => {return game._input}});
            Object.defineProperty(scene, "loader", {get: () => {return game._loader}});
        });
    }
}

export default Game;