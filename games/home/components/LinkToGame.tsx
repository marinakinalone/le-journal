import cx from 'classnames'
import Link from 'next/link'
import React from 'react'
import useGameData from '../../../main/hooks/useGameData'
import styles from '../styles/Home.module.scss'

const NewGameLabel = () => {
  return <span>*NEW GAME* </span>
}

interface ILinkToGame {
  title: string
  id: string
  new?: boolean
  index: number
}

const LinkToGame = ({ index, ...game }: ILinkToGame) => {
  const { updateCurrentGameData } = useGameData()

  const handleClick = () => {
    updateCurrentGameData({
      ...game,
    })
  }
  const GameTitle = () => <span className={styles.text}>{game.title}</span>

  return (
    <li className={styles[`game_${index}`]}>
      <Link
        href={`/game/${game.id}`}
        className={cx(styles.entry, styles.animated_arrow)}
        onClick={handleClick}
      >
        <span className={cx(styles.arrow, styles.left)}>
          <span className={styles.shaft}></span>
        </span>
        <span className={styles.wrapper}>
          <span className={styles.text}>
            {game.new ? <NewGameLabel /> : <></>}
            <GameTitle />
          </span>

          <span className={cx(styles.arrow, styles.right)}>
            <span className={styles.shaft}></span>
          </span>
        </span>
      </Link>
    </li>
  )
}

export default LinkToGame
