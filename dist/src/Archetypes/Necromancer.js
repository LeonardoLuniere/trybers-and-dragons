"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Necromancer extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._type = 'mana';
        Necromancer._createdInstances += 1;
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        return Necromancer._createdInstances;
    }
}
Necromancer._createdInstances = 0;
exports.default = Necromancer;
