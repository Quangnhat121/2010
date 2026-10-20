import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import PetalParticles from './PetalParticles'

export default function IntroEnvelope({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return <motion.section className="intro" animate={{ opacity: open ? 0 : 1, y: open ? '-100%' : 0 }} transition={{ duration: .9, ease: [.7,0,.2,1] }} style={{ pointerEvents: open ? 'none' : 'auto' }} aria-hidden={open}>
    <PetalParticles count={14}/><div className="sparkles" aria-hidden="true"/>
    <motion.div className="intro-content" initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:1 }}>
      <p className="eyebrow">Gửi đến người đặc biệt nhất</p>
      <div className={`envelope ${open ? 'is-open' : ''}`}><div className="envelope-back"/><div className="letter-peek"><Heart fill="currentColor"/></div><div className="envelope-front"/><div className="envelope-flap"/><div className="seal"><Heart size={20} fill="currentColor"/></div></div>
      <h1>Anh có một món quà nhỏ<br/>dành cho em...</h1>
      <button className="primary-btn" onClick={onOpen}>Mở món quà nhé <span>💌</span></button>
    </motion.div>
  </motion.section>
}
