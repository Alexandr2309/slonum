import Button from './Button'
import React, {useEffect, useRef} from 'react'

export const BlobButton = ({ reverse }: { reverse?: boolean }) => {
    const searchArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reverse) {
      searchArea.current!.querySelector('.blob-btn__inner')!.classList.add('reverse')
      Array.from(searchArea.current!.querySelectorAll('.blob-btn__blob')).forEach((item) =>
        item.classList.add('reverse'),
      )
    }
  }, [])

  return (
    <div ref={searchArea}>
      <Button
        cl="blob-btn"
        text={`Участвовать <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>`}
      />
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  )
}
