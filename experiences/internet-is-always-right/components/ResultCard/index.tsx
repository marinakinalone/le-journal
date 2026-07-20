import cx from 'classnames'
import React from 'react'
import { getRainbowClass } from '../../lib/getRainbowClass'
import styles from '../../styles/InternetIsAlwaysRight.module.scss'
import StatBar from './StatBar'

interface IResultCard {
  question: string
  leftVotes: number
  rightVotes: number
  totalVotes: number
  leftComment: string
  rightComment: string
  colorIndex: number
}

const getPercents = (left: number, right: number, total: number) => {
  if (total <= 0) return { leftPercent: 50, rightPercent: 50 }
  const leftPercent = Math.round((100 * left) / total)
  return { leftPercent, rightPercent: 100 - leftPercent }
}

const ResultCard = ({
  question,
  leftVotes,
  rightVotes,
  totalVotes,
  leftComment,
  rightComment,
  colorIndex,
}: IResultCard) => {
  const { leftPercent, rightPercent } = getPercents(leftVotes, rightVotes, totalVotes)

  return (
    <div className={cx(styles.card__container, styles.card__result, getRainbowClass(colorIndex))}>
      <h2 className={styles.card__title}>{question}</h2>
      <StatBar
        leftPercent={leftPercent}
        rightPercent={rightPercent}
        leftComment={leftComment}
        rightComment={rightComment}
      />
    </div>
  )
}

export default ResultCard
