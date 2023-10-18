import Image from 'next/image'
import styles from './IntroModal.module.scss'

const ModalTitle = () => {
  return (
    <div className={styles.title__container}>
      <h1 className={styles.title}>le journal</h1>
      <Image
        className={styles.title__image}
        src="/resources/home/feather.png"
        alt=""
        width={60}
        height={60}
      />
    </div>
  )
}

export default ModalTitle
