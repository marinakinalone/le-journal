import cx from 'classnames'
import Link from 'next/link'
import React from 'react'
import useExperienceData from '../../hooks/useExperienceData'
import styles from '../../styles/Main.module.scss'

const NewExperienceLabel = () => {
  return <span>*NEW* </span>
}

interface ILinkToExperience {
  title: string
  id: string
  new?: boolean
  index: number
}

const LinkToExperience = ({ index, ...experience }: ILinkToExperience) => {
  const { updateCurrentExperienceData } = useExperienceData()

  const handleClick = () => {
    updateCurrentExperienceData({
      ...experience,
    })
  }
  const ExperienceTitle = () => <span className={styles.text}>{experience.title}</span>

  return (
    <li className={styles[`experience_${index}`]}>
      <Link
        href={`/experience/${experience.id}`}
        className={cx(styles.entry, styles.animated_arrow)}
        onClick={handleClick}
      >
        <span className={cx(styles.arrow, styles.left)}>
          <span className={styles.shaft}></span>
        </span>
        <span className={styles.wrapper}>
          <span className={styles.text}>
            {experience.new ? <NewExperienceLabel /> : <></>}
            <ExperienceTitle />
          </span>

          <span className={cx(styles.arrow, styles.right)}>
            <span className={styles.shaft}></span>
          </span>
        </span>
      </Link>
    </li>
  )
}

export default LinkToExperience
