import React from "react"
import styles from "./styles/Home.module.scss"
import Link from "next/link"
import cx from "classnames"
import { LinkToGameProps } from "./types"

const LinkToGame = ({ title }: LinkToGameProps) => {
  const getUrl = (title: string) => {
    return title.replaceAll(" ", "-")
  }
  return (
    <li>
      <Link href={getUrl(title)}>
        <a className={cx(styles.entry, styles.animated_arrow)}>
          <span className={cx(styles.arrow, styles.left)}>
            <span className={styles.shaft}></span>
          </span>
          <span className={styles.wrapper}>
            <span className={styles.text}>{title}</span>
            <span className={cx(styles.arrow, styles.right)}>
              <span className={styles.shaft}></span>
            </span>
          </span>
        </a>
      </Link>
    </li>
  )
}

export default LinkToGame
