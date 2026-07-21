import styles from '../styles/InternetIsAlwaysRight.module.scss'

const RAINBOW_CLASSES = [
  styles.card__rainbow_1,
  styles.card__rainbow_2,
  styles.card__rainbow_3,
  styles.card__rainbow_4,
  styles.card__rainbow_5,
  styles.card__rainbow_6,
] as const

export const getRainbowClass = (index: number) => RAINBOW_CLASSES[index % RAINBOW_CLASSES.length]
