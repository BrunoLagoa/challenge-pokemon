import { IStat } from '../interfaces/IStats';

export const statsTranslation: Record<string, IStat> = {
  hp: { name: 'hp', translation: 'pontos de vida' },
  attack: { name: 'attack', translation: 'ataque' },
  defense: { name: 'defense', translation: 'defesa' },
  'special-attack': { name: 'special-attack', translation: 'ataque especial' },
  'special-defense': {
    name: 'special-defense',
    translation: 'defesa especial',
  },
  speed: { name: 'speed', translation: 'velocidade' },
};
