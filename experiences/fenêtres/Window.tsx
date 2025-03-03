import React from 'react'
import { IWindow } from '.'

const Window = ({ url, year, month, city, country }: IWindow) => {
  return (
    <div>
      <video src={url} controls autoPlay loop style={{ width: '100%', height: 'auto' }} />

      <p>{`${city} in ${country},${month} ${year}`}</p>
      <p>open a new window</p>
    </div>
  )
}

export default Window
