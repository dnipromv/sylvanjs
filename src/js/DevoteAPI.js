"use strict";

import SylvanAPI from './SylvanAPI.js';

import ResourceRegistry from "./components/ResourceRegistry";
import ResourceLoader from "./components/ResourceLoader";

function DevoteAPI() {
    SylvanAPI.call(this);
    
    this.resources = new ResourceRegistry();
    this.loader = new ResourceLoader(this.resources);
}

DevoteAPI.prototype = Object.create(SylvanAPI.prototype);

export default DevoteAPI;