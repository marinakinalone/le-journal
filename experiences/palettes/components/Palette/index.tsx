import React, { useState } from 'react'
import { COLOR_TYPE, IPalette } from '../../constants'
import styles from '../../styles/Palette.module.scss'
import Blob from '../Blob'
import Card from '../Card'

const { PRIMARY, SECONDARY, TERTIARY, ACCENT } = COLOR_TYPE

const Palette = ({ name, colors }: IPalette) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={styles.square}
      style={{ backgroundColor: colors.background }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Blob name={colors.primary} color={colors.primary} type={PRIMARY} />

      {colors.secondary && (
        <Blob name={colors.secondary} color={colors.secondary} type={SECONDARY} />
      )}

      {colors.tertiary && <Blob name={colors.tertiary} color={colors.tertiary} type={TERTIARY} />}

      {colors.accents?.map((accentColor, index) => (
        <Blob
          key={accentColor}
          name={accentColor}
          color={accentColor}
          type={`${ACCENT}-${index}`}
          accent
        />
      ))}
      <Card name={name} colors={colors} visible={hovered} />
    </div>
  )
}

export default Palette
