import { ICSSModuleProp } from '../../types'
import React, { ReactElement, useMemo } from 'react'
import path from '../../helpers/imgPass'

const FooterIconItem = ({ src }: { src: string }): JSX.Element => {
  return (
    <div>
      <img src={src} alt="social-icon" />
    </div>
  )
}

export function FooterIcons({ cl }: ICSSModuleProp): ReactElement {
  const arrOfIcons = useMemo(() => [path.footerVk, path.footerDzen, path.footerTg], [])

  return (
    <div className={cl.socialsIcons}>
      {arrOfIcons.map((src, i) => (
        <FooterIconItem src={src} key={i} />
      ))}
    </div>
  )
}
