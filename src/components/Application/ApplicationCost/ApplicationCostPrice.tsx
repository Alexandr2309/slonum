import React, { FC, FunctionComponentElement, useEffect, useRef } from 'react'
import useAnimate from "../../../hooks/useAnimate";
import {cssChangeObj as changeCss} from '../../../helpers/helperFunc';

export function ApplicationCostPrice(props: {
  cl: { [p: string]: string }
}): FunctionComponentElement<FC> {
  const ref = useRef<HTMLDivElement>(null);

  const animate = useAnimate(ref, changeCss.appPrice);

  return (
    <div className={props.cl.price} ref={ref}>
      <div className={props.cl.priceLabel}>Стоимость участия:</div>
      <div className={props.cl.priceMain}>
        149&#8381;<sup>299&#8381;</sup>
      </div>
      <div className={props.cl.priceLabel}>При наличии репоста в соцсетях :)</div>
    </div>
  )
}
