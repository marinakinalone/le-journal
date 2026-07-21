import React from 'react'
import { COLOR_TYPE, ICard } from '../../constants'
import styles from '../../styles/Palette.module.scss'
import ColorBox from './ColorBox'

const { BACKGROUND, PRIMARY, SECONDARY, TERTIARY, ACCENT } = COLOR_TYPE

const Card = ({ name, colors, visible }: ICard) => {
  const hasThreeColors = !!colors.tertiary
  const hasTwoColors = !!colors.secondary && !colors.tertiary

  const colorSwatchWidth = {
    background: 350,
    primary: hasThreeColors ? 150 : hasTwoColors ? 190 : 350,
    secondary: hasThreeColors ? 120 : 160,
    tertiary: 80,
    accent: 90,
  }

  return (
    <div
      className={`${styles.card} ${visible && styles.cardVisible}`}
      style={{
        backgroundColor: colors.background,
        border: `1px solid ${colors.primary}`,
      }}
    >
      <h3 className={styles.cardTitle} style={{ color: colors.primary }}>
        {name}
      </h3>

      <div className={styles.colorRow}>
        <ColorBox
          color={colors.background}
          width={colorSwatchWidth.background}
          colorType={BACKGROUND}
          boxBorderColor={colors.primary}
        />
      </div>

      <div className={styles.colorRow}>
        <ColorBox color={colors.primary} width={colorSwatchWidth.primary} colorType={PRIMARY} />

        {colors.secondary && (
          <ColorBox
            color={colors.secondary}
            width={colorSwatchWidth.secondary}
            colorType={SECONDARY}
          />
        )}

        {colors.tertiary && (
          <ColorBox
            color={colors.tertiary}
            width={colorSwatchWidth.tertiary}
            colorType={TERTIARY}
          />
        )}
      </div>

      <div className={styles.colorRow}>
        {colors.accents?.map((accentColor) => (
          <ColorBox
            key={accentColor}
            color={accentColor}
            width={colorSwatchWidth.accent}
            colorType={ACCENT}
          />
        ))}
      </div>
    </div>
  )
}

export default Card
