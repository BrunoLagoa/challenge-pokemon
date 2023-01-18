import { IStat } from '../interfaces/IStats';

import shieldImg from '../../assets/images/shield.png';
import speedImg from '../../assets/images/speed.png';
import swordImg from '../../assets/images/sword.png';

export const statsTranslation: Record<string, IStat> = {
  hp: { name: 'hp', translation: 'pontos de vida', image: shieldImg },
  attack: { name: 'attack', translation: 'ataque', image: swordImg },
  defense: { name: 'defense', translation: 'defesa', image: shieldImg },
  'special-attack': {
    name: 'special-attack',
    translation: 'ataque especial',
    image: swordImg,
  },
  'special-defense': {
    name: 'special-defense',
    translation: 'defesa especial',
    image: shieldImg,
  },
  speed: { name: 'speed', translation: 'velocidade', image: speedImg },
};
