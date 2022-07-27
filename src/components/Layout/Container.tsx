import React, { FC } from 'react'

export interface IContainerProps {
  cl: string
  additionalCl?: string
  children: React.ReactNode | React.ReactElement
}

const Container: FC<IContainerProps> = ({ cl, additionalCl, children }) => {
  return (
    <div className={cl}>
      <div className={additionalCl ? `${additionalCl} container` : 'container'}>{children}</div>
    </div>
  )
}

export default Container
