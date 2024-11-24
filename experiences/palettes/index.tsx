import React from 'react'
import { palettes } from './data/palettes'
import Palette from './components/Palette'
import styles from './styles/Palette.module.scss'

// TODO for fonts: https://fonts.google.com/specimen/Italiana?preview.text=cool%20molitor%20COFFEE%20%2323456&categoryFilters=Serif:%2FSerif%2FModern
const Palettes = () => {
  return (
    <div>
      <h1>Palettes</h1>
      <p>Here are some palettes:</p>
      <div className={styles.palettesContainer}>
        {palettes.map((palette) => (
          <Palette key={palette.name} name={palette.name} colors={palette.colors} />
        ))}
      </div>
    </div>
  )
}

export default Palettes
