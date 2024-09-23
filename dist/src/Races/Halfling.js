"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling._createdInstances += 1;
    }
    static createdRacesInstances() {
        return Halfling._createdInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Halfling._createdInstances = 0;
exports.default = Halfling;
