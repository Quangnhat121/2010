"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Heart, Music2, VolumeX, X, ChevronDown } from "lucide-react";
import { momContent } from "@/config/momContent";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .75 } };

function Petals({ burst = false }: { burst?: boolean }) {
  return <div className={`petals ${burst ? "petals-burst" : ""}`} aria-hidden="true">{Array.from({ length: burst ? 18 : 12 }).map((_, i) => <i key={i} style={{ "--i": i, "--x": `${(i * 37) % 100}%`, "--delay": `${(i % 7) * -.8}s` } as React.CSSProperties} />)}</div>;
}

function Bouquet({ small = false }: { small?: boolean }) {
  return <div className={`bouquet ${small ? "bouquet-small" : ""}`} aria-hidden="true"><span className="stem s1"/><span className="stem s2"/><span className="stem s3"/><span className="flower rose f1"><b/><b/><b/></span><span className="flower daisy f2"><b/><b/><b/><b/><b/></span><span className="flower hydrangea f3">✽</span><span className="leaf l1"/><span className="leaf l2"/><span className="ribbon">♡</span></div>;
}

function MusicToggle({ audioRef, playing, setPlaying }: { audioRef: React.RefObject<HTMLAudioElement | null>; playing: boolean; setPlaying: (v: boolean) => void }) {
  const toggle = async () => { if (!audioRef.current) return; if (playing) audioRef.current.pause(); else await audioRef.current.play().catch(() => undefined); setPlaying(!playing); };
  return <button className="music-toggle" onClick={toggle} aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}>{playing ? <Music2 size={18}/> : <VolumeX size={18}/>}<span>{playing ? "Đang phát" : "Bật nhạc"}</span></button>;
}

function Intro({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return <AnimatePresence>{!open && <motion.section className="intro" exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1 }}><Petals/><div className="intro-glow"/><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="intro-inner"><Bouquet small/><p className="eyebrow">Một món quà nhỏ • 20 tháng 10</p><h1>Gửi người phụ nữ tuyệt vời nhất<br/>trong cuộc đời con…</h1><div className="envelope-wrap"><div className="envelope"><div className="envelope-back"/><div className="letter-mini">Mẹ yêu quý</div><div className="envelope-front"/><div className="seal">♥</div></div></div><p className="intro-note">Mẹ ơi, hôm nay con có một món quà nhỏ dành cho mẹ. ❤️</p><button className="primary-btn" onClick={onOpen}>Mẹ mở nhé! <span>💌</span></button></motion.div></motion.section>}</AnimatePresence>;
}

function Hero() {
  return <section className="hero" id="home"><Petals/><div className="sun"/><div className="garden-back" aria-hidden="true"><span>❀</span><span>✿</span><span>❁</span><span>✽</span></div><motion.div {...reveal} className="hero-content"><span className="eyebrow light">Dành riêng cho mẹ • 20.10</span><h1>Chúc mừng ngày 20/10,<br/><em>mẹ yêu của con!</em></h1><p className="hero-lead">Cảm ơn mẹ vì đã dành cả thanh xuân để yêu thương, chăm sóc và che chở cho con.</p><p className="hero-small">Có thể con không thường xuyên nói ra, nhưng mẹ luôn là người quan trọng nhất trong trái tim con.</p><button className="ghost-btn" onClick={() => document.querySelector("#flowers")?.scrollIntoView({ behavior: "smooth" })}>Con có điều muốn nói với mẹ <ChevronDown size={18}/></button></motion.div><div className="hero-bouquet"><Bouquet/></div></section>;
}

function FlowerGarden() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="section flower-section" id="flowers"><motion.div {...reveal} className="section-heading"><span className="eyebrow">Mỗi cánh hoa, một lời cảm ơn</span><h2>Những bông hoa thay lời muốn nói</h2><p>Chạm vào từng bông hoa, mẹ nhé.</p></motion.div><div className="flower-field">{momContent.flowerMessages.map((message, i) => <motion.button key={message} className={`wish-flower flower-${i}`} initial={{ opacity: 0, scale: .2, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*.12, type: "spring" }} onClick={() => setActive(active === i ? null : i)} aria-label={`Mở lời nhắn ${i+1}`}><span className="bloom">{i % 3 === 0 ? "❀" : i % 3 === 1 ? "✿" : "✽"}</span><span className="flower-stem"/><span className="flower-leaf"/><AnimatePresence>{active === i && <motion.span className="flower-message" initial={{ opacity:0, y:8, scale:.95 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:6 }}>{message}</motion.span>}</AnimatePresence></motion.button>)}</div></section>;
}

function LoveLetter() {
  return <section className="section letter-section" id="letter"><motion.div {...reveal} className="letter-paper"><span className="letter-flower">❁</span><span className="eyebrow">Từ trái tim con</span><h2>Gửi mẹ yêu của con…</h2><div className="letter-rule"/>{momContent.letter.map((p, i) => <motion.p key={i} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: Math.min(i*.08,.4) }}>{p}</motion.p>)}<div className="signature"><span>Con của mẹ,</span><strong>{momContent.sender}</strong><small>luôn yêu mẹ ♡</small></div></motion.div></section>;
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return <section className="section gallery-section"><motion.div {...reveal} className="section-heading"><span className="eyebrow">Album gia đình</span><h2>Những khoảnh khắc con muốn giữ mãi</h2><p>Mỗi bức ảnh là một mảnh ký ức, một niềm hạnh phúc mà con luôn trân trọng.</p></motion.div><div className="gallery-grid">{momContent.gallery.map((item, i) => <motion.button key={item.caption} className={`polaroid p${i+1}`} {...reveal} transition={{ delay: i*.1, duration:.65 }} onClick={() => setSelected(i)}><span className="tape"/><span className="photo-placeholder"><span>{item.symbol}</span><small>Thêm ảnh của gia đình</small></span><strong>{item.caption}</strong></motion.button>)}</div><AnimatePresence>{selected !== null && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelected(null)}><motion.div className="lightbox-card" initial={{scale:.9,y:20}} animate={{scale:1,y:0}} onClick={e=>e.stopPropagation()}><button onClick={()=>setSelected(null)} aria-label="Đóng"><X/></button><div className="lightbox-photo">{momContent.gallery[selected].symbol}</div><p>{momContent.gallery[selected].caption}</p><small>Thay ảnh mẫu trong <code>config/momContent.ts</code></small></motion.div></motion.div>}</AnimatePresence></section>;
}

function Wishes() {
  return <section className="section wishes-section"><motion.div {...reveal} className="section-heading"><span className="eyebrow">Bốn điều con ước</span><h2>Con chỉ mong dành cho mẹ…</h2></motion.div><div className="wish-grid">{momContent.wishes.map((wish,i)=><motion.article key={wish} className="wish-card" {...reveal} whileHover={{y:-8,rotate:i%2?1:-1}}><span>0{i+1}</span><Heart size={22}/><p>{wish}</p><i>♡</i></motion.article>)}</div></section>;
}

function FinalMessage() {
  const [hug, setHug] = useState(false);
  return <section className="final-section"><Petals burst={hug}/><div className="sunset"/><motion.div {...reveal} className="final-content"><Bouquet small/><span className="eyebrow light">Một lời hứa từ con</span><h2>“Mẹ à, con lớn lên rồi,<br/>nhưng con vẫn luôn là đứa con bé nhỏ của mẹ.”</h2><p>Con sẽ cố gắng trưởng thành, sống thật tốt và yêu thương mẹ nhiều hơn mỗi ngày.</p><button className="primary-btn pale" onClick={()=>setHug(true)}>Con muốn ôm mẹ một cái <Heart size={18} fill="currentColor"/></button><AnimatePresence>{hug && <motion.div className="hug-message" initial={{opacity:0,scale:.9,y:10}} animate={{opacity:1,scale:1,y:0}}><span>♡</span> Con yêu mẹ nhiều lắm. Chúc mẹ ngày 20/10 luôn bình an, hạnh phúc và ngập tràn yêu thương.</motion.div>}</AnimatePresence><div className="final-sign"><strong>Happy Vietnamese Women’s Day — 20.10</strong><span>Dành tặng mẹ, bằng tất cả tình yêu của con.</span></div></motion.div></section>;
}

export default function Home() {
  const [opened, setOpened] = useState(false); const [playing, setPlaying] = useState(false); const audioRef = useRef<HTMLAudioElement>(null); const reduce = useReducedMotion();
  useEffect(()=>{ if(audioRef.current) audioRef.current.volume=.25; },[]);
  const openGift = async()=>{ setOpened(true); setTimeout(()=>window.scrollTo({top:0,behavior:reduce?"auto":"smooth"}),50); if(audioRef.current){ await audioRef.current.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false)); }};
  return <><audio ref={audioRef} loop preload="none" src={momContent.music}/><Intro open={opened} onOpen={openGift}/><main className={opened?"site revealed":"site"}><MusicToggle audioRef={audioRef} playing={playing} setPlaying={setPlaying}/><Hero/><FlowerGarden/><LoveLetter/><Gallery/><Wishes/><FinalMessage/></main></>;
}
