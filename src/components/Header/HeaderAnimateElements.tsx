import React, { FC } from 'react'
import animateElems from './HeaderAnimElems/HeaderStyledComponents'

const HeaderAnimateElements: FC = () => {
  return (
    <div className="anim-elements" >
      {animateElems.map((elem, i) => (
        <>{elem}</>
      ))}
    </div>
  )
}

export default HeaderAnimateElements
