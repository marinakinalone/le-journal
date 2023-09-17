import cx from "classnames"
import Link from "next/link"
import React from "react"
import styles from "../styles/Home.module.scss"

export interface ILinkToGameProps {
  title: string;
}

const LinkToGame = ({ title }: ILinkToGameProps) => {
  const getUrl = (title: string) => {
    return title.replaceAll(" ", "-")
  }
  return (
    <li>
      <Link href={getUrl(title)} className={cx(styles.entry, styles.animated_arrow)}>

        <span className={cx(styles.arrow, styles.left)}>
          <span className={styles.shaft}></span>
        </span>
        <span className={styles.wrapper}>
          <span className={styles.text}>{title}</span>
          <span className={cx(styles.arrow, styles.right)}>
            <span className={styles.shaft}></span>
          </span>
        </span>

      </Link>
    </li>
  );
}

export default LinkToGame
