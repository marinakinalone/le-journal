import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useNavigation from '../../main/hooks/useNavigation'
import Headline from './components/Headline'
import Paragraph from './components/Paragraph'
import Title from './components/Title'
import { textblocks } from './data/textblocks'
import styles from './styles/TheEndWhereWeStart.module.scss'

const TheEndWhereWeStart: NextPage = () => {
  const [index, setIndex] = useState(0)
  const { redirectToHome } = useNavigation()

  const displayTextBlock = (textblock: any) => {
    switch (Object.keys(textblock)[0]) {
      case 'h1':
        return <Headline content={textblock.h1} />

      case 'h2':
        return <Title content={textblock.h2} />

      default:
        if (textblock.p === 'nous commence.') {
          return (
            <p
              style={{
                paddingLeft: '39%',
                paddingTop: '25rem',
              }}
            >
              {textblock.p}
            </p>
          )
        }
        return <Paragraph content={textblock.p} />
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'ArrowRight') {
        if (index + 1 === textblocks.length) {
          redirectToHome()
          return
        }
        setIndex(index + 1)
      }
      if (event.key === 'ArrowLeft') {
        if (index !== 0) {
          setIndex(index - 1)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const handleClick = () => {
    if (index + 1 === textblocks.length) {
      redirectToHome()
      return
    }
    setIndex(index + 1)
  }

  return (
    <div className={styles.container}>
      <section className={styles.main} onClick={handleClick}>
        {displayTextBlock(textblocks[index])}
      </section>
    </div>
  )
}

export default TheEndWhereWeStart
