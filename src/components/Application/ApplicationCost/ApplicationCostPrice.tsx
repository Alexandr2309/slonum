import React, { FC, FunctionComponentElement } from 'react'

export function ApplicationCostPrice(props: {
  cl: { [p: string]: string }
}): FunctionComponentElement<FC> {
  return (
    <div className={props.cl.price}>
      <div className={props.cl.priceLabel}>Стоимость участия:</div>
      <div className={props.cl.priceMain}>
        149&#8381;<sup>299&#8381;</sup>
      </div>
      <div className={props.cl.priceLabel}>При наличии репоста в соцсетях :)</div>
    </div>
  )
}
