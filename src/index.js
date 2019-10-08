"use strict";

import SylvanAPI from './js/SylvanAPI.js';
import DevoteAPI from './js/DevoteAPI.js';

function Sylvan() {
    SylvanAPI.call(this);
    this.DevoteAPI = DevoteAPI;
}

Sylvan.prototype = Object.create(SylvanAPI.prototype);

module.exports.Sylvan = new Sylvan();