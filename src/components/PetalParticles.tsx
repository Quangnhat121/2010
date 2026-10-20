import { motion, useReducedMotion } from 'framer-motion'

export default function PetalParticles({ count = 18 }: { count?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return null
  return <div className="petal-layer" aria-hidden="true">{Array.from({ length: count }, (_, i) => (
    <motion.i key={i} className="petal" style={{ left: `${(i * 37) % 100}%`, width: 9 + (i % 5) * 2, height: 13 + (i % 4) * 3 }} animate={{ y: ['-10vh','112vh'], x: [0, (i % 2 ? 1 : -1) * (30 + i * 2), 0], rotate: [0, 180, 360] }} transition={{ duration: 10 + (i % 6) * 2, delay: -(i * 1.7), repeat: Infinity, ease: 'linear' }} />
  ))}</div>
}
