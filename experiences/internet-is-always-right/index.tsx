import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'
import styles from './styles/InternetIsAlwaysRight.module.scss'

interface IOption {
  label: string
  numberOfVotes: number
  comment?: string
  commentaire?: string
}

interface IDataItem {
  _id: string
  question: string
  answer1: IOption
  answer2: IOption
  totalNumberOfVotes: number
  hasAnswered: boolean
}

const COOKIE_DAYS = 365
const cookieName = (id: string) => `iiar-question-${id}`

const getComment = (option: IOption) => option.commentaire ?? option.comment ?? ''

const InternetIsAlwaysRight = () => {
  const [data, setData] = useState<IDataItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [votingId, setVotingId] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/getIIARData')
        if (!res.ok) {
          throw new Error('Fetch failed')
        }

        const result = await res.json()
        if (!Array.isArray(result)) {
          throw new Error('Invalid response')
        }

        const updatedResult = result.map((item: IDataItem) => {
          const id = String(item._id)
          const hasAnswered = Cookies.get(cookieName(id)) === 'true'
          return { ...item, _id: id, hasAnswered }
        })

        setData(updatedResult)
        setError(null)
      } catch {
        setError('Impossible de charger les questions.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleVote = async (id: string, answer: 1 | 2) => {
    if (Cookies.get(cookieName(id)) === 'true' || votingId !== null) return

    setVotingId(id)
    try {
      const res = await fetch('/api/voteIIAR', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, answer }),
      })

      if (!res.ok) {
        throw new Error('Vote failed')
      }

      const updated = await res.json()
      Cookies.set(cookieName(id), 'true', { expires: COOKIE_DAYS })

      setData((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                answer1: updated.answer1 ?? item.answer1,
                answer2: updated.answer2 ?? item.answer2,
                totalNumberOfVotes: updated.totalNumberOfVotes ?? item.totalNumberOfVotes + 1,
                hasAnswered: true,
              }
            : item,
        ),
      )
      setError(null)
    } catch {
      setError('Impossible d’enregistrer le vote.')
    } finally {
      setVotingId(null)
    }
  }

  return (
    <div className={styles.main__container}>
      <Header />
      {loading && (
        <div className={styles.loader} aria-live="polite" aria-busy="true">
          <div className={styles.loader__dot} />
          <p className={styles.loader__text}>Chargement des questions…</p>
        </div>
      )}
      {error && <p className={styles.error__message}>{error}</p>}
      {!loading &&
        data.map((item, index) => (
          <React.Fragment key={item._id}>
            {item.hasAnswered ? (
              <ResultCard
                question={item.question}
                leftVotes={item.answer1.numberOfVotes}
                rightVotes={item.answer2.numberOfVotes}
                totalVotes={item.totalNumberOfVotes}
                leftComment={getComment(item.answer1)}
                rightComment={getComment(item.answer2)}
                colorIndex={index}
              />
            ) : (
              <QuestionCard
                question={item.question}
                option1={item.answer1.label}
                option2={item.answer2.label}
                colorIndex={index}
                onVote={(answer) => handleVote(item._id, answer)}
                disabled={votingId === item._id}
              />
            )}
          </React.Fragment>
        ))}
      <p className={styles.cookie__notice}>
        Un cookie local mémorise les votes pour éviter les doublons (1 an, pas de suivi publicitaire).
      </p>
    </div>
  )
}

export default InternetIsAlwaysRight
