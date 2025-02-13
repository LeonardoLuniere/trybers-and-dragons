"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        this._race = new Races_1.Elf(this._name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(this._name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return (Object.assign({}, this._energy));
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0)
            this._lifePoints -= damage;
        else
            this._lifePoints -= 1;
        if (this._lifePoints <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
    }
    special(enemy) {
        if (this._energy.amount > 5) {
            enemy.receiveDamage(this._strength + enemy.defense);
            this._energy.amount -= 5;
        }
        else {
            throw new Error('Insufficient energy');
        }
    }
}
exports.default = Character;
