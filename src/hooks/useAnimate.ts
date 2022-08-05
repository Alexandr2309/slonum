import React, { useEffect } from 'react'

export default function useAnimate(
  ref: React.RefObject<HTMLElement>,
  cb: (elem: HTMLElement) => void,
) {
  useEffect(() => {
    const onEntry = (entry: any) => {
      if (entry[0].isIntersecting) {
        cb(ref.current!)
      }
    }
    const options = {
      rootMargin: '-80px',
      thresholds: 1,
    }
    const observer: IntersectionObserver = new IntersectionObserver(onEntry, options)
    observer.observe(ref.current as HTMLDivElement)
  }, [])
}
