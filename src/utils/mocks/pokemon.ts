import { IPokemon } from '../interfaces/IPokemon';

const pokemon: IPokemon = {
  name: 'Pikachu',
  id: 25,
  types: ['electric'],
  height: 0.4,
  weight: 6.0,
  abilities: ['static', 'lightning-rod'],
  stats: {
    hp: 35,
    attack: 55,
    defense: 30,
    specialAttack: 50,
    specialDefense: 40,
    speed: 90,
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    },
  },
};

export { pokemon };
