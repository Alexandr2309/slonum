import React, { FC, useEffect, useRef, useState } from 'react'
import { IAccordionProps } from '../../types'
import cl from '../../styles/Accordion.module.scss'
import path from '../../helpers/imgPass'

const Accordion: FC<IAccordionProps> = ({ children, title }) => {
  const [show, setShow] = useState<boolean>(false)
  const [heightEl, setHeightEl] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current && setHeightEl(ref.current.scrollHeight)
  }, [])

  const setIsShow = () => {
    setShow((s) => !s)
  }

  return (
    <div className={cl.accordion}>
      <div className={cl.accordionHead} onClick={setIsShow}>
        <div className={cl.accordionTitle}>{title}</div>
        <div className={show ? `${cl.accordionToggler} show` : cl.accordionToggler}>
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
