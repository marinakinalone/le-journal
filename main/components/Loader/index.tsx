import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <section className={styles.loader__container}>
      <div className={styles.loader__sprite}></div>
      <p>Chargement...</p>
    </section>
  )
}

export default Loader
