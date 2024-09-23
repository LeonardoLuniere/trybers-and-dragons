import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  private _type: EnergyType = 'mana';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }
}
export default Necromancer;