import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router' // Import useRouter from Next.js
import { isLandscapeOrientation } from '../../providers/Navigation/utils'

const STRINGS =
  'Ce jeu est conçu pour une expérience optimale sur grand écran, que ce soit sur ordinateur ou en mode paysage sur tablette.'

const LandscapeNoMobile = () => {
  return <p>{STRINGS}</p>
}

export default LandscapeNoMobile
