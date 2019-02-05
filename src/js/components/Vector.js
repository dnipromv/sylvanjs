"use strict";

import * as Victor from 'victor';

class Vector extends Victor {
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default Vector;