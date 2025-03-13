import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import styles from './styles/InternetIsAlwaysRight.module.scss'

interface IOption {
  label: string
  numberOfVotes: number
  comment: string
}

interface IDataItem {
  id: number
  question: string
  answer1: IOption
  answer2: IOption
  totalNumberOfVotes: number
  hasAnswered: boolean
}

const InternetIsAlwaysRight = () => {
  const [data, setData] = useState<IDataItem[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/getIIARData')
      const result = await res.json()

      const updatedResult = result.map((item: IDataItem, index: number) => {
        const cookieName = `question-${index}`
        const hasAnswered = Cookies.get(cookieName) === 'true'
        return { ...item, hasAnswered }
      })

      setData(updatedResult)
    }

    fetchData()
  }, [])

  console.log('data', data)
  return (
    <div className={styles.main__container}>
      <Header />
      {data.map(
        (item) =>
          !item.hasAnswered && (
            <QuestionCard
              key={item.id}
              question={item.question}
              option1={item.answer1.label}
              option2={item.answer2.label}
            />
          ),
      )}
    </div>
  )
}

export default InternetIsAlwaysRight
