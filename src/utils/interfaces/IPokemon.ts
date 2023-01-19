export interface IStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}

export interface IStat {
  name: string;
  url: string;
}

export interface IAbility {
  name: string;
  url: string;
}
export interface IAbilities {
  ability: IAbility;
}

export interface IType {
  name: string;
  url: string;
}
export interface ITypes {
  slot: number;
  type: IType;
}

export interface IPokemon {
  name: string;
  id: number;
  types: ITypes[];
  height: number;
  weight: number;
  abilities: IAbilities[];
  stats: IStats[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
