import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/InternetIsAlwaysRight.module.scss'
import { UserAnswer } from '../../types'

interface IStatBar {
  leftPercent: number
  rightPercent: number
  leftVotes: number
  rightVotes: number
  leftComment: string
  rightComment: string
  userAnswer?: UserAnswer
}

const voteLabel = (count: number) => (count === 1 ? '1 vote' : `${count} votes`)

const StatBar = ({
  leftPercent,
  rightPercent,
  leftVotes,
  rightVotes,
  leftComment,
  rightComment,
  userAnswer,
}: IStatBar) => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimated(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={styles.stat__container}>
      <div className={styles.stat__comments}>
        <span className={cx(styles.stat__side, userAnswer === 1 && styles.stat__picked)}>
          <span className={styles.stat__comment}>{leftComment}</span>
          <span className={styles.stat__meta}>
            {voteLabel(leftVotes)}
            {userAnswer === 1 && <span className={styles.stat__picked_label}> · Votre choix</span>}
          </span>
        </span>
        <span className={cx(styles.stat__side, userAnswer === 2 && styles.stat__picked)}>
          <span className={styles.stat__comment}>{rightComment}</span>
          <span className={styles.stat__meta}>
            {voteLabel(rightVotes)}
            {userAnswer === 2 && <span className={styles.stat__picked_label}> · Votre choix</span>}
          </span>
        </span>
      </div>
      <div className={styles.stat__bar} aria-hidden>
        <div
          className={cx(styles.stat__fill_left, userAnswer === 1 && styles.stat__fill_picked)}
          style={{ width: animated ? `${leftPercent}%` : '0%' }}
        />
        <div
          className={cx(styles.stat__fill_right, userAnswer === 2 && styles.stat__fill_picked)}
          style={{ width: animated ? `${rightPercent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default StatBar
