/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import styles from './styles/JardinageGraphique.module.scss'

const JardinageGraphique = () => {
  const [rows, setRows] = useState(14)
  const [columns, setColumns] = useState(18)
  const imageRef = useRef<HTMLImageElement>(null)

  const [hoveredDots, setHoveredDots] = useState(Array(rows * columns).fill(null))

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

  const updateGridSize = () => {
    if (imageRef.current) {
      const { width, height } = imageRef.current.getBoundingClientRect()
      const newColumns = Math.floor(width / 70)
      const newRows = Math.floor(height / 70)
      setColumns(newColumns)
      setRows(newRows)
      setHoveredDots(Array(newRows * newColumns).fill(null))
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Jardinage Graphique</h1>
        <button
          className={styles.resetButton}
          onClick={() => setHoveredDots(Array(rows * columns).fill(null))}
        >
          <img
            className={styles.buttonImage}
            src="/resources/jardinage-graphique/rake.png"
            alt="Reset"
          />
        </button>
      </div>
      <section className={styles.gardenContainer}>
        <img
          ref={imageRef}
          src="/resources/jardinage-graphique/background.jpg"
          alt="Background"
          className={styles.backgroundImage}
          onLoad={updateGridSize}
        />
        <div
          className={styles.dotGrid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 60px)`,
            gridTemplateRows: `repeat(${rows}, 60px)`,
          }}
        >
          {Array.from({ length: rows * columns }).map((_, index) => (
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
