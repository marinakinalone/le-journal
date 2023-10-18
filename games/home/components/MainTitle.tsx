import Image from 'next/image'
import React from 'react'

const MainTitle = () => {
  return (
    <h1>
      le journal
      <Image src="/resources/home/feather.png" alt="" width={70} height={70} />
    </h1>
  )
}

export default MainTitle
