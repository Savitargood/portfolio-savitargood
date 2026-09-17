import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 28 })
  const springY = useSpring(y, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 8)
      y.set(e.clientY - 8)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-brand-400/60 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
      style={{ x: springX, y: springY }}
    />
  )
}
