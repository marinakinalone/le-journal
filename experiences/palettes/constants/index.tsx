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
