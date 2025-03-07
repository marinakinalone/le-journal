import React from 'react'
import Frame from './Frame'

const Error = () => {
  return (
    <Frame>
      <div className={StyleSheet.e}>
        <p>Looks like this window will not open...</p>
        <p>Please try again later.</p>
      </div>
    </Frame>
  )
}

export default Error
