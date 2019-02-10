import * as PIXI from 'pixi.js';
import * as Tilemap from 'pixi-tilemap';

import Game from './js/Game';
import Scene from './js/components/structure/Scene';
import Vector from './js/components/Vector';
import Camera from './js/components/Camera';
import HttpService from './js/components/HttpService';
import ResourceRegistry from './js/components/ResourceRegistry';

function SylvanAPI() {
    this.Game = Game;
    this.Scene = Scene;
    this.Vector = Vector;
    this.Camera = Camera;
    this.HttpService = HttpService;
    this.Sprite = PIXI.Sprite;
}

function Sylvan() {
    SylvanAPI.call(this);
}

Sylvan.__apiIDs = [];
Sylvan.__apiAliasMap = new Map();
Sylvan.__resourcesMap = new Map();

Sylvan.prototype.API = function(alias = "") {
    if (Sylvan.__apiAliasMap.has(alias)) {
        console.error(alias + " already exists");
    }
    else {
        const apiID = Sylvan.__apiIDs.length;
        const resourceRegistry = new ResourceRegistry();

        Sylvan.__apiIDs.push(apiID);
        Sylvan.__apiAliasMap.set(apiID, alias);
        Sylvan.__resourcesMap.set(apiID, resourceRegistry);

        SylvanAPI.call(this);
        this.Game.prototype.resources = resourceRegistry;
    }
};

export default new Sylvan();