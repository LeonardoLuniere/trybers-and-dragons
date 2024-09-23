"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Warrior extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._type = 'stamina';
        Warrior._createdInstances += 1;
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        return Warrior._createdInstances;
    }
}
Warrior._createdInstances = 0;
exports.default = Warrior;
