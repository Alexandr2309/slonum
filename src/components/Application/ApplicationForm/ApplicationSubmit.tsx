import React, { FC, useEffect, useRef } from 'react'
import path from '../../../helpers/imgPass'
import cl from '../../../styles/Application.module.scss'
import { BlobButton } from '../../UI/BlobButton'
import { animate, bounceEaseOut, plainFlight } from '../../../helpers/helperFunc'

const ApplicationSubmit: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    obsRef.current = new IntersectionObserver(onEntry)
    obsRef.current.observe(ref.current!)
    function onEntry(entry: any) {
      if (entry[0].isIntersecting) {
        console.log('anim')
        animate({
          timing: bounceEaseOut,
          duration: 2750,
          draw: plainFlight,
          ref: ref,
          obsRef,
        })
      }
    }
  }, [])

  return (
    <div className={cl.submit}>
      <BlobButton />
      <div className={cl.plain} ref={ref}>
        <img src={path.plain} alt="plain" />
      </div>
    </div>
  )
}

export default React.memo(ApplicationSubmit)
