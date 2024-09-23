"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Mage extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._type = 'mana';
        Mage._createdInstances += 1;
    }
    get energyType() {
        return this._type;
    }
    static createdArchetypeInstances() {
        return Mage._createdInstances;
    }
}
Mage._createdInstances = 0;
exports.default = Mage;