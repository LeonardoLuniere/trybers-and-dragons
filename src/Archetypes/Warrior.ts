import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  private _type: EnergyType = 'stamina';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}
export default Warrior;