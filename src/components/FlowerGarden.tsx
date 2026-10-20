import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'
import { loveContent } from '../config/loveContent'

const flowers = Array.from({ length: 15 }, (_, i) => ({ x: (i * 43 + 9) % 96, y: 44 + ((i * 29) % 45), size: 46 + (i % 5) * 13, type: i % 3, delay: (i % 6) * .16 }))
export default function FlowerGarden() {
  const [note, setNote] = useState<string | null>(null)
  const mx = useSpring(useMotionValue(0), { stiffness:45,damping:20 }), my = useSpring(useMotionValue(0), { stiffness:45,damping:20 })
  return <section id="garden" className="garden section" onPointerMove={e => { mx.set((e.clientX/window.innerWidth-.5)*14); my.set((e.clientY/window.innerHeight-.5)*10) }}>
    <div className="section-heading"><span>Chạm vào một bông hoa</span><h2>Khu vườn của những lời thương</h2><p>Mỗi bông hoa đều giữ một điều anh muốn nói cùng em.</p></div>
    <motion.div className="garden-bed" style={{ x:mx,y:my }}>
      {flowers.map((f,i) => <motion.button key={i} className={`flower flower-${f.type}`} style={{ left:`${f.x}%`, top:`${f.y}%`, width:f.size, height:f.size }} initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ delay:f.delay, type:'spring' }} whileHover={{ scale:1.12, rotate:i%2?4:-4 }} whileTap={{ scale:.94 }} onClick={() => setNote(loveContent.flowerNotes[i % loveContent.flowerNotes.length])} aria-label={`Mở lời nhắn từ bông hoa ${i+1}`}><i/><i/><i/><i/><b/></motion.button>)}
      <div className="garden-ground"/>
    </motion.div>
    <motion.div className="flower-note" animate={{ opacity:note?1:0, y:note?0:10 }} aria-live="polite">{note || 'Một lời nhắn đang đợi em...'}</motion.div>
  </section>
}
