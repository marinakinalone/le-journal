import cx from 'classnames'
import React from 'react'
import { getRainbowClass } from '../../lib/getRainbowClass'
import styles from '../../styles/InternetIsAlwaysRight.module.scss'

interface IQuestionCard {
  question: string
  option1: string
  option2: string
  colorIndex: number
  onVote: (answer: 1 | 2) => void
  disabled?: boolean
}

const QuestionCard = ({
  question,
  option1,
  option2,
  colorIndex,
  onVote,
  disabled,
}: IQuestionCard) => {
  return (
    <div className={cx(styles.card__container, getRainbowClass(colorIndex))}>
      <h2 className={styles.card__title}>{question}</h2>
      <div className={styles.answers__container}>
        <button
          type="button"
          className={cx(styles.button__answer, styles.answer__left)}
          onClick={() => onVote(1)}
          disabled={disabled}
        >
          {option1}
        </button>
        <button
          type="button"
          className={cx(styles.button__answer, styles.answer__right)}
          onClick={() => onVote(2)}
          disabled={disabled}
        >
          {option2}
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
