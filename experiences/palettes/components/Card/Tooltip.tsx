import React from 'react'
import styles from '../../styles/Palette.module.scss'

interface ITooltip {
  width: number
  tooltipVisible: boolean
}

const Tooltip = ({ width, tooltipVisible }: ITooltip) => {
  return (
    <div
      className={`${styles.tooltip} ${tooltipVisible && styles.tooltipVisible}`}
      style={{ left: `${width / 2 - 45}px` }}
    >
      Copied!
    </div>
  )
}

export default Tooltip
