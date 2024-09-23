"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Ranger extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._type = 'stamina';
        Ranger._createdInstances += 1;
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        return Ranger._createdInstances;
    }
}
Ranger._createdInstances = 0;
exports.default = Ranger;
