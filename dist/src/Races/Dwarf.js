"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf._createdInstances += 1;
    }
    static createdRacesInstances() {
        return Dwarf._createdInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Dwarf._createdInstances = 0;
exports.default = Dwarf;
