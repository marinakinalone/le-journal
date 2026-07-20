import React, { useEffect, useState } from 'react'
import styles from '../../styles/InternetIsAlwaysRight.module.scss'

interface IStatBar {
  leftPercent: number
  rightPercent: number
  leftComment: string
  rightComment: string
}

const StatBar = ({ leftPercent, rightPercent, leftComment, rightComment }: IStatBar) => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={styles.stat__container}>
      <div className={styles.stat__comments}>
        <span className={styles.stat__comment}>{leftComment}</span>
        <span className={styles.stat__comment}>{rightComment}</span>
      </div>
      <div className={styles.stat__percentages}>
        <span className={styles.stat__percent}>{leftPercent}%</span>
        <span className={styles.stat__percent}>{rightPercent}%</span>
      </div>
      <div className={styles.stat__bar} aria-hidden>
        <div
          className={styles.stat__fill_left}
          style={{ width: animated ? `${leftPercent}%` : '0%' }}
        />
        <div
          className={styles.stat__fill_right}
          style={{ width: animated ? `${rightPercent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default StatBar
