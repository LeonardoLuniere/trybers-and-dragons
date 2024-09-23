"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc._createdInstances += 1;
    }
    static createdRacesInstances() {
        return Orc._createdInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Orc._createdInstances = 0;
exports.default = Orc;
