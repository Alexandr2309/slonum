import HeaderAnimateElements from './HeaderAnimateElements'
import path from '../../helpers/imgPass'
import React from 'react'

export default function HeaderSpace() {
  return (
    <div>
      <div style={{ zIndex: 1 }}>
        <HeaderAnimateElements />
        <img src={path.cover} alt="cover" />
      </div>
    </div>
  )
}
