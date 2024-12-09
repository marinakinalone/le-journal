import React from 'react'
import { ICard } from '../../constants'
import styles from '../../styles/Palette.module.scss'

const Card = ({ name, colors, visible }: ICard) => {
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
    alert(`Copied ${value} to clipboard`)
  }

  const hasThreeColors = !!colors.tertiary
  const hasTwoColors = !!colors.secondary && !colors.tertiary

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
        <div
          className={styles.backgroundBox}
          style={{
            backgroundColor: colors.background,
            border: `1px solid ${colors.primary}`,
          }}
          onClick={() => copyToClipboard(colors.background)}
        />
      </div>

      <div className={styles.colorRow}>
        <div className={styles.colorBox}>
          <div
            className={styles.primaryBox}
            style={{
              backgroundColor: colors.primary,
              width: hasThreeColors ? '150px' : hasTwoColors ? '190px' : '350px',
            }}
            onClick={() => copyToClipboard(colors.background)}
          />
        </div>

        {colors.secondary && (
          <div className={styles.colorBox}>
            <div
              className={styles.secondaryBox}
              style={{
                backgroundColor: colors.secondary,
                width: hasThreeColors ? '120px' : '160px',
              }}
              onClick={() => copyToClipboard(colors.background)}
            />
          </div>
        )}

        {colors.tertiary && (
          <div className={styles.colorBox}>
            <div
              className={styles.tertiaryBox}
              style={{ backgroundColor: colors.tertiary }}
              onClick={() => copyToClipboard(colors.background)}
            />
          </div>
        )}
      </div>

      <div className={styles.colorRow}>
        {colors.accents?.map((accentColor) => (
          <div key={accentColor} className={styles.colorBox}>
            <div
              className={styles.accentBox}
              style={{ backgroundColor: accentColor }}
              onClick={() => copyToClipboard(colors.background)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
