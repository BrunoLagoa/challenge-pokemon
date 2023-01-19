import { IPokemon } from '../interfaces/IPokemon';

const pokemon: IPokemon = {
  name: 'Pikachu',
  id: 25,
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    },
  ],
  height: 0.4,
  weight: 6.0,
  abilities: [
    {
      ability: {
        name: 'own-tempo',
        url: 'https://pokeapi.co/api/v2/ability/20/',
      },
    },
    {
      ability: {
        name: 'tangled-feet',
        url: 'https://pokeapi.co/api/v2/ability/77/',
      },
    },
    {
      ability: {
        name: 'contrary',
        url: 'https://pokeapi.co/api/v2/ability/126/',
      },
    },
  ],
  stats: [
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 60,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
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
