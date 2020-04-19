"use strict";

import SylvanAPI from './src/js/SylvanAPI.js';
import DevoteAPI from './src/js/DevoteAPI.js';

function Sylvan() {
    SylvanAPI.call(this);
    this.DevoteAPI = DevoteAPI;
}

Sylvan.prototype = Object.create(SylvanAPI.prototype);

export default new Sylvan();