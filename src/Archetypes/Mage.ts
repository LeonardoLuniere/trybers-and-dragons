import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private _type: EnergyType = 'mana';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }
}
export default Mage;