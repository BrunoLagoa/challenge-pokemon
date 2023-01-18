import { Type } from '../interfaces/ITypes';
import { theme } from '../../theme';

export const typesTranslation: Record<string, Type> = {
  normal: { name: 'normal', color: theme.colors.types.normal },
  bug: { name: 'inseto', color: theme.colors.types.bug },
  dark: { name: 'sombrio', color: theme.colors.types.dark },
  dragon: { name: 'dragão', color: theme.colors.types.dragon },
  electric: { name: 'elétrico', color: theme.colors.types.electric },
  fairy: { name: 'fada', color: theme.colors.types.fairy },
  fighting: { name: 'lutador', color: theme.colors.types.fighting },
  fire: { name: 'fogo', color: theme.colors.types.fire },
  flying: { name: 'voador', color: theme.colors.types.flying },
  ghost: { name: 'fantasma', color: theme.colors.types.ghost },
  grass: { name: 'grama', color: theme.colors.types.grass },
  ground: { name: 'terra', color: theme.colors.types.ground },
  ice: { name: 'gelo', color: theme.colors.types.ice },
  poison: { name: 'veneno', color: theme.colors.types.poison },
  psychic: { name: 'psíquico', color: theme.colors.types.psychic },
  rock: { name: 'pedra', color: theme.colors.types.rock },
  steel: { name: 'metal', color: theme.colors.types.steel },
  water: { name: 'água', color: theme.colors.types.water },
};
