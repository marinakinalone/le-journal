import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import Error from './Error'
import Intro from './Intro'
import Loading from './Loading'
import Window from './Window'
import styles from './styles/Fenetres.module.scss'
import { storage } from './utils/firebase'

const FIREBASE_FOLDER = 'fenetres'

interface IWindowInfo {
  year: string
  month: string
  city: string
  country: string
}

export interface IWindow extends IWindowInfo {
  url: string
}

const getWindowInfo = (itemName: string): IWindowInfo => {
  const [yearMonth, cityCountry] = itemName.split(' - ')
  const [year, month] = yearMonth.split(' ')
  const [city, countryWithExtension] = cityCountry.split(', ')
  const countryNoExtension = countryWithExtension.split('.')[0]
  const country = countryNoExtension.split(' (')[0]

  return {
    year,
    month,
    city,
    country,
  }
}

const Fenêtres = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [windows, setWindows] = useState<IWindow[]>([])
  const [selectedWindow, setSelectedWindow] = useState<IWindow | null>(null)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const [windowOpened, setWindowOpened] = useState<boolean>(false)

  const fetchWindowList = async () => {
    const listRef = ref(storage, FIREBASE_FOLDER)
    try {
      const windowsList = await listAll(listRef)
      const urls = await Promise.all(
        windowsList.items.map(async (item) => {
          const url = await getDownloadURL(item)
          return { url, ...getWindowInfo(item.name) }
        }),
      )
      setWindows(urls)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching windows:', error)
      setError(true)
    }
  }

  const getNewWindow = () => {
    if (windows.length > 0) {
      setLoading(true)
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * windows.length)
      } while (randomIndex === previousIndex)
      setSelectedWindow(windows[randomIndex])
      setPreviousIndex(randomIndex)
    }
  }

  const handleVideoLoaded = () => {
    setLoading(false)
  }

  useEffect(() => {
    fetchWindowList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getNewWindow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windows])

  return (
    <div className={styles.main__container}>
      {loading && !windowOpened && <Intro handleStart={setWindowOpened} />}
      {loading && windowOpened && <Loading />}
      {windowOpened && !error && selectedWindow && (
        <Window
          {...selectedWindow}
          loading={loading}
          handleOpenWindow={getNewWindow}
          handleVideoLoaded={handleVideoLoaded}
        />
      )}
      {error && <Error />}
    </div>
  )
}

export default Fenêtres
