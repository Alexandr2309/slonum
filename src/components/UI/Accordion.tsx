import React, { FC, useEffect, useRef, useState } from 'react'
import { IAccordionProps } from '../../types'
import cl from '../../styles/Accordion.module.scss'
import path from '../../helpers/imgPass'
import useAnimate from '../../hooks/useAnimate'

const Accordion: FC<IAccordionProps> = ({ children, title }) => {
  const [show, setShow] = useState<boolean>(false)
  const [heightEl, setHeightEl] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const animRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current && setHeightEl(ref.current.scrollHeight)
  }, [])

  const animate = useAnimate(animRef, (elem) => {
    elem.style.opacity = '1'
  })

  const setIsShow = () => {
    setShow((s) => !s)
  }

  return (
    <div className={cl.accordion}>
      <div className={cl.accordionHead} ref={animRef}>
        <div className={cl.accordionTitle}>{title}</div>
        <div
          className={show ? `${cl.accordionToggler} ${cl.show}` : cl.accordionToggler}
          onClick={setIsShow}
        >
          <img src={path.cross} alt="крестик" />
        </div>
      </div>
      <div
        className={show ? `${cl.accordionContent} show` : cl.accordionContent}
        ref={ref}
        style={{ height: show ? `${heightEl}px` : '0' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
