import { useRef } from 'react'
import { config, useSpring, animated } from 'react-spring'
import { useMove } from 'react-use-gesture'

import { AnimatedBox } from '@/components/shared'

type PerspectiveImageProps = {
  src: string
  alt: string
}

export const PerspectiveImage = (props: PerspectiveImageProps) => {
  const { src, alt } = props

  const imageContainerRef = useRef<HTMLDivElement>(null)

  const [{ transform }, springApi] = useSpring(() => ({
    transform: getTransform(0, 0, 1),
    config: config.default,
  }))

  const bind = useMove(({ xy: [mx, my], moving }) => {
    if (moving && imageContainerRef.current) {
      const { x, y, width, height } =
        imageContainerRef.current.getBoundingClientRect()

      springApi.start({
        transform: getTransform(
          (-(my - y - height / 2) / 2).clamp(-24, 24),
          ((mx - x - width / 2) / 2).clamp(-24, 24),
          1.1
        ),
      })
    }
  })

  return (
    <AnimatedBox
      ref={imageContainerRef}
      {...bind()}
      onMouseLeave={() => {
        springApi.start({
          transform: getTransform(0, 0, 1),
        })
      }}
      sx={{ maxWidth: '140px', maxHeight: '80px' }}
    >
      <animated.img
        src={src}
        alt={alt}
        style={{ transform, maxWidth: '100%', maxHeight: '100%' }}
      />
    </AnimatedBox>
  )
}

function getTransform(rotX: number, rotY: number, scale: number) {
  return `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`
}
