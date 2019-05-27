"use strict";

import { LoaderResource  } from 'pixi.js';

class ResourceRegistry {
    constructor() {

    }
    
    store(alias, resource) {
        this[alias] = this._parseResource(resource);
    }

    contains(alias) {
        return !!this[alias];
    }

    _parseResource(resource) {
        switch (resource.type) {
            case LoaderResource.TYPE.IMAGE:
                if (resource.spritesheet) {
                    return resource.spritesheet;
                }
                else {
                    return resource.texture;
                }
            case LoaderResource.TYPE.AUDIO:
                return resource;
            case LoaderResource.TYPE.VIDEO:
                return resource;
            case LoaderResource.TYPE.JSON:
                return resource.data;
            case LoaderResource.TYPE.XML:
                return resource;
            case LoaderResource.TYPE.TEXT:
                return resource;
            default:
                return resource;
        }
    }
}

export default ResourceRegistry;