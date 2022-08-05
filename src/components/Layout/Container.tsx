import React, { FC } from 'react'

export interface IContainerProps {
  cl: string
  additionalCl?: string,
  refProp?: React.Ref<HTMLDivElement>
  children: React.ReactNode | React.ReactElement
}

const Container: FC<IContainerProps> = ({ cl, additionalCl, children, refProp }) => {
  return (
    <div className={cl}>
      <div className={additionalCl ? `${additionalCl} container` : 'container'} ref={refProp}>{children}</div>
    </div>
  )
}

export default Container
