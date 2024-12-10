export interface IColors {
  background: string
  primary: string
  secondary?: string
  tertiary?: string
  accents?: string[]
}

export interface IPalette {
  name: string
  colors: IColors
}

export interface ICard extends IPalette {
  visible: boolean
}

export const COLOR_TYPE = {
  BACKGROUND: 'background',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  ACCENT: 'accent',
} as const
