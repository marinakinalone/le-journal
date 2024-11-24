import React from 'react'
import { IPalette } from '../../constants'
import styles from '../../styles/Palette.module.scss'
import BlobMarker from './Blob'

const Palette = ({ name, colors }: IPalette) => {
  return (
    <div className={styles.square} style={{ backgroundColor: colors.background }}>
      <BlobMarker name={colors.primary} color={colors.primary} type={'primary'} />
      {colors.secondary && (
        <BlobMarker name={colors.secondary} color={colors.secondary} type={'secondary'} />
      )}
      {colors.tertiary && (
        <BlobMarker name={colors.tertiary} color={colors.tertiary} type={'tertiary'} />
      )}
      {/* <BlobMarker name={colors.primary} color={colors.primary} />
      <BlobMarker name={colors.primary} color={colors.primary} />
      <BlobMarker name={colors.primary} color={colors.primary} /> */}
    </div>
  )
}

export default Palette
