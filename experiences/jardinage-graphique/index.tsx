/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles/JardinageGraphique.module.scss'

interface Flower {
  x: number
  y: number
  id: number
  type: string
}

const JardinageGraphique = () => {
  const [flowers, setFlowers] = useState<Flower[]>([])
  const lastPlacedFlowerRef = useRef<{ x: number; y: number;} | null>(null)
  const gardenRef = useRef<HTMLDivElement>(null)
  const flowerId = useRef(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!gardenRef.current) return

    const rect = gardenRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const last = lastPlacedFlowerRef.current
    const dist =
      last &&
      Math.sqrt(Math.pow(x - last.x, 2) + Math.pow(y - last.y, 2))

    // The flower is 50px wide
    if (!last || (dist && dist > 50)) {
      const type = Math.floor(Math.random() * 12).toString().padStart(2, '0')
      setFlowers((prev) => [
        ...prev,
        { x, y, id: flowerId.current++, type }
      ])
      lastPlacedFlowerRef.current = { x, y }
    }
  }

  useEffect(() => {
    const container = gardenRef.current
    if (!container) return
    
    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const resetGarden = () => {
    setFlowers([])
    lastPlacedFlowerRef.current = null
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <button className={styles.resetButton} onClick={resetGarden}>
          <img
            className={styles.buttonImage}
            src="/resources/jardinage-graphique/rake.png"
            alt="Reset"
          />
        </button>
      </div>
      <section className={styles.gardenContainer} ref={gardenRef}>
        <img
          src="/resources/jardinage-graphique/background.jpg"
          alt="Background"
          className={styles.backgroundImage}
        />
        {flowers.map((flower) => (
          <img
            key={flower.id}
            src={`/resources/jardinage-graphique/fleur_${flower.type}.png`}
            alt="Flower"
            className={styles.flower}
            style={{
              left: `${flower.x}px`,
              top: `${flower.y}px`,
            }}
          />
        ))}
      </section>
    </div>
  )
}

export default JardinageGraphique
