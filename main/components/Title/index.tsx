import Image from 'next/image'
import React from 'react'

const Title = () => {
  return (
    <h1>
      le journal
      <Image src="/resources/le-journal/feather.png" alt="" width={70} height={70} />
    </h1>
  )
}

export default Title
