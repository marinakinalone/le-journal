import Image from 'next/image'
import styles from './LandscapeNoMobile.module.scss'

const getFrames = () => {
  const frames = []
  for (let i = 0; i <= 17; i++) {
    frames.push({
      src: `/resources/main/animations/landscape/landscape-${i}.png`,
      className: styles[`landscape_${i}`],
    })
  }
  return frames
}

const LandscapeAnimation = () => {
  const images = getFrames()
  return (
    <div className={styles.frame}>
      {images.map(({ src, className }) => {
        return <Image key={src} src={src} alt={''} width={95} height={95} className={className} />
      })}
    </div>
  )
}

export default LandscapeAnimation
