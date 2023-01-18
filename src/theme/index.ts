import { DefaultTheme } from 'styled-components';

interface NeutralColor {
  1100: string;
  1000: string;
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

interface PrimaryColor {
  default: string;
  dark: string;
  transparent: string;
  gradient: string;
}

interface ActionColor {
  default: string;
  dark: string;
}

interface TypeColors {
  normal: string;
  bug: string;
  dark: string;
  dragon: string;
  electric: string;
  fairy: string;
  fighting: string;
  fire: string;
  flying: string;
  ghost: string;
  grass: string;
  ground: string;
  ice: string;
  poison: string;
  psychic: string;
  rock: string;
  steel: string;
  water: string;
}

interface FontSizes {
  sm: number;
  md: number;
  lg: number;
}

type ITheme = DefaultTheme & {
  colors: {
    neutral: NeutralColor;
    primary: PrimaryColor;
    action: ActionColor;
    types: TypeColors;
  };
  fontSizes: FontSizes;
};

export const theme: ITheme = {
  colors: {
    neutral: {
      1100: '#101426',
      1000: '#151A30',
      900: '#192038',
      800: '#222B45',
      700: '#2E3A59',
      600: '#8F9BB3',
      500: '#C5CEE0',
      400: '#E4E9F2',
      300: '#EDF1F7',
      200: '#F7F9FC',
      100: '#FFFFFF',
    },
    primary: {
      default: '#00D68F',
      dark: '#004A45',
      transparent: 'rgba(0, 214, 143, 0.48)',
      gradient: 'linear-gradient(90deg, #43E97B 0%, #38F9D7 100%)',
    },
    action: {
      default: '#DB2C66',
      dark: '#FF3D71',
    },
    types: {
      normal: '#C4C0B4',
      bug: '#87950C',
      dark: '#413831',
      dragon: '#7361D1',
      electric: '#E08D00',
      fairy: '#E29FE6',
      fighting: '#852816',
      fire: '#CF2C03',
      flying: '#8FA4FF',
      ghost: '#6969AF',
      grass: '#67AF32',
      ground: '#C5A455',
      ice: '#B4EDF8',
      poison: '#924990',
      psychic: '#E25484',
      rock: '#5E491C',
      steel: '#7F8488',
      water: '#3B9BF1',
    },
  },
  fontSizes: {
    sm: 12,
    md: 15,
    lg: 18,
  },
};
