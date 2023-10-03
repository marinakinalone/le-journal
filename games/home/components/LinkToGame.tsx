import cx from 'classnames'
import Link from 'next/link'
import React from 'react'
import useGameData from '../../../main/hooks/useGameData'
import styles from '../styles/Home.module.scss'

const LinkToGame = ({ ...game }) => {
  const { updateCurrentGameData } = useGameData()

  const handleClick = () => {
    updateCurrentGameData({
      ...game,
    })
  }

  return (
    <li>
      <Link
        href={`/game/${game.id}`}
        className={cx(styles.entry, styles.animated_arrow)}
        onClick={handleClick}
      >
        <span className={cx(styles.arrow, styles.left)}>
          <span className={styles.shaft}></span>
        </span>
        <span className={styles.wrapper}>
          <span className={styles.text}>{game.title}</span>

          <span className={cx(styles.arrow, styles.right)}>
            <span className={styles.shaft}></span>
          </span>
        </span>
      </Link>
    </li>
  )
}

export default LinkToGame
