import React, { useState } from 'react'
import { COLOR_TYPE } from '../../constants'
import styles from '../../styles/Palette.module.scss'
import Tooltip from './Tooltip'

interface IColorBox {
  color: string
  width: number
  colorType: (typeof COLOR_TYPE)[keyof typeof COLOR_TYPE]
  boxBorderColor?: string
}

const ColorBox = ({ color, width, colorType, boxBorderColor = '' }: IColorBox) => {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false)

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
    setTooltipVisible(true)
    setTimeout(() => {
      setTooltipVisible(false)
    }, 1000)
  }

  const boxStyle = {
    background: styles.backgroundBox,
    primary: styles.primaryBox,
    secondary: styles.secondaryBox,
    tertiary: styles.tertiaryBox,
    accent: styles.accentBox,
  }

  return (
    <div className={styles.colorBox}>
      <Tooltip width={width} tooltipVisible={tooltipVisible} />
      <div
        className={boxStyle[colorType]}
        style={{
          backgroundColor: color,
          width: `${width}px`,
          ...(boxBorderColor ? { border: `1px solid ${boxBorderColor}` } : {}),
        }}
        onClick={() => copyToClipboard(color)}
      />
    </div>
  )
}

export default ColorBox
