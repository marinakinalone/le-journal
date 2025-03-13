import cx from 'classnames'
import React from 'react'
import styles from '../../styles/InternetIsAlwaysRight.module.scss'

interface IQuestionCard {
  question: string
  option1: string
  option2: string
}

const QuestionCard = ({ question, option1, option2 }: IQuestionCard) => {
  return (
    <div className={styles.card__container}>
      <h2 className={styles.card__title}>{question}</h2>
      <div className={styles.answers__container}>
        <button className={cx(styles.button__answer, styles.answer__left)}>{option1}</button>
        <button className={cx(styles.button__answer, styles.answer__right)}>{option2}</button>
      </div>
    </div>
  )
}

export default QuestionCard
