import { getDownloadURL, listAll, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import Window from './Window'
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
  const country = countryWithExtension.split('.')[0]

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

  useEffect(() => {
    fetchWindowList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (windows.length > 0) {
      const randomIndex = Math.floor(Math.random() * windows.length)
      setSelectedWindow(windows[randomIndex])
    }
  }, [windows])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && !error && selectedWindow && <Window {...selectedWindow} />}
      {error && <div>Error fetching windows</div>}
    </div>
  )
}

export default Fenêtres
