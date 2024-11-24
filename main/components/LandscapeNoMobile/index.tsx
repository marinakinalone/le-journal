import React from 'react'
import mainStyles from '../../styles/Main.module.scss'
import LandscapeAnimation from './LandscapeAnimation'
import styles from './LandscapeNoMobile.module.scss'

const STRINGS = {
  description:
    'Ce jeu est conçu pour une expérience optimale sur grand écran, que ce soit sur ordinateur ou en mode paysage sur tablette.',
  cta: 'Passez en mode paysage...',
}

//todo : add animation to switch device orientation + paysage :)
const LandscapeNoMobile = () => {
  return (
    <article className={mainStyles.container}>
      <section className={styles.container}>
        <LandscapeAnimation />
        <p>{STRINGS.description}</p>
        <p>{STRINGS.cta}</p>
      </section>
    </article>
  )
}

export default LandscapeNoMobile
