import React from 'react'
import Palette from './components/Palette'
import { palettes } from './data/palettes'
import styles from './styles/Palette.module.scss'

// TODO for fonts: https://fonts.google.com/specimen/Italiana?preview.text=cool%20molitor%20COFFEE%20%2323456&categoryFilters=Serif:%2FSerif%2FModern
const Palettes = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Palettes</h1>
      <p className={styles.subtitle}>
        A personal color library, curated from my explorations across the web. Each card features a
        unique blend of colors, perfect for sparking creativity or simply celebrating beautiful
        hues. Welcome to your go-to place for inspiration.
      </p>

      <div className={styles.palettesContainer}>
        {palettes.map((palette) => (
          <Palette key={palette.name} name={palette.name} colors={palette.colors} />
        ))}
      </div>
    </div>
  )
}

export default Palettes