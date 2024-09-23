abstract class Race {
  private _name: string;
  private _dexterity: number;
  
  constructor(
    name: string, 
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string { return this._name; }
  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
//   abstract class Races {
//     public maxLifePoints: number;
//     public static createdRacesInstances: number;
    
//     constructor(
//         createdRacesInstances: number, 
//         maxLifePoints: number
//       ) {
//         this.createdRacesInstances = createdRacesInstances;
//         this.maxLifePoints = maxLifePoints;
//       }
//   }