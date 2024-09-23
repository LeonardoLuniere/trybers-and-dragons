import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Ranger extends Archetype {
  private _type: EnergyType = 'stamina';
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}
export default Ranger;