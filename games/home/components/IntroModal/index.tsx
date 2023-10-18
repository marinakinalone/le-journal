import styles from './IntroModal.module.scss'
import ModalTitle from './ModalTitle'

interface IIntroModal {
  closeIntroModal: () => void
}

const IntroModal = ({ closeIntroModal }: IIntroModal) => {
  return (
    <section className={styles.modal}>
      <div className={styles.cta__frame}>
        <ModalTitle />
        <button className={styles.cta__button} onClick={() => closeIntroModal()}>
          entrer
        </button>
      </div>
    </section>
  )
}

export default IntroModal
