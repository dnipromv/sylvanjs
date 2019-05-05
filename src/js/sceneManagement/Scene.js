"use strict";

import { Container } from 'pixi.js';

class Scene extends Container {
    constructor() {
        super();
        
        // References inserted to scene immediately after its creation
        this.renderer = null; // PIXI renderer
        this.director = null; // SceneDirector
    }

    async load() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    init(args) {
        
    }

    destroy() {

    }

    resize(width, height) {

    }
}

export default Scene;