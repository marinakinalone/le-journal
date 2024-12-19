/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles/JardinageGraphique.module.scss'

const JardinageGraphique = () => {
  const rows = 14
  const columns = 18

  const totalDots = rows * columns

  const [hoveredDots, setHoveredDots] = useState(Array(totalDots).fill(null))

  const handleHover = (index: number) => {
    setHoveredDots((prev) => {
      const updatedDots = [...prev]
      const randomNumber = Math.floor(Math.random() * 12)
        .toString()
        .padStart(2, '0')
      updatedDots[index] = randomNumber
      return updatedDots
    })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Jardinage Graphique</h1>
        <button
          className={styles.resetButton}
          onClick={() => setHoveredDots(Array(totalDots).fill(null))}
        >
          <img
            className={styles.buttonImage}
            src="/resources/jardinage-graphique/rake.png"
            alt="Reset"
          />
        </button>
      </div>
      <section className={styles.gardenContainer}>
        <Image
          src="/resources/jardinage-graphique/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.dotGrid}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <div key={index} className={styles.dot} onMouseEnter={() => handleHover(index)}>
              {hoveredDots[index] && (
                <img
                  src={`/resources/jardinage-graphique/fleur_${hoveredDots[index]}.png`}
                  alt="Flower"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JardinageGraphique

// TODO
// - Add a right click
// - Add dots
// - Adjust margins
