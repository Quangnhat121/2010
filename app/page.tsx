"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Music2, Pause, X } from "lucide-react";
import { momContent } from "@/config/momContent";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease },
};

function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 240 360" aria-hidden="true">
      <path d="M121 346c-4-90 8-176 17-260M127 240c-42-20-61-47-66-80M130 205c41-22 61-49 68-82M134 143c-29-16-39-39-39-65" />
      <path d="M61 160c24 1 42 13 58 38-29 0-49-11-58-38ZM198 123c-25 2-44 15-61 42 30-1 51-14 61-42ZM95 78c20 3 35 15 45 37-24-3-39-15-45-37Z" />
      <g className="botanical-flower">
        <ellipse cx="142" cy="69" rx="16" ry="32" /><ellipse cx="142" cy="69" rx="16" ry="32" transform="rotate(60 142 69)" /><ellipse cx="142" cy="69" rx="16" ry="32" transform="rotate(120 142 69)" /><circle cx="142" cy="69" r="8" />
      </g>
    </svg>
  );
}

function IntroPetals() {
  return <div className="intro-petals" aria-hidden="true">{Array.from({ length: 5 }).map((_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>;
}

function ImageOrPlaceholder({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`image-frame ${className}`}>{!failed && <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}{failed && <div className="image-placeholder"><Botanical/><span>Thêm ảnh của mẹ</span></div>}</div>;
}

function Intro({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return <AnimatePresence>{!opened && <motion.section className="intro" exit={{ opacity: 0 }} transition={{ duration: 0.55, ease }}><IntroPetals/><div className="intro-grid"><motion.div className="intro-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}><span className="kicker">20.10</span><h1>Dành tặng mẹ</h1><p>Con có một món quà nhỏ dành cho mẹ.</p><button className="text-button" onClick={onOpen}>Mở xem nhé <span aria-hidden="true">→</span></button></motion.div><motion.div className="intro-art" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }}><ImageOrPlaceholder src={momContent.coverImage} alt="Ảnh của mẹ" className="cover-image"/><Botanical className="intro-branch"/></motion.div></div></motion.section>}</AnimatePresence>;
}

function MusicToggle({ audioRef, playing, setPlaying }: { audioRef: React.RefObject<HTMLAudioElement | null>; playing: boolean; setPlaying: (value: boolean) => void }) {
  const toggle = async () => { if (!audioRef.current) return; if (playing) { audioRef.current.pause(); setPlaying(false); } else { await audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); } };
  return <button className="music-toggle" onClick={toggle} aria-label={playing ? "Tạm dừng nhạc" : "Phát nhạc"}>{playing ? <Pause size={14}/> : <Music2 size={14}/>}<span>{playing ? "Tạm dừng" : "Bật nhạc"}</span></button>;
}

function Greeting() {
  return <section className="greeting section"><motion.div {...reveal} className="greeting-number">20<span>/10</span></motion.div><motion.div {...reveal} className="greeting-copy"><span className="kicker">Một lời chúc nhỏ</span><h2>Chúc mẹ ngày 20/10 vui vẻ!</h2>{momContent.greeting.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</motion.div><motion.div {...reveal} className="greeting-flower"><Botanical/></motion.div></section>;
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return <section className="gallery section"><motion.header {...reveal} className="section-header"><div><span className="kicker">Ảnh gia đình</span><h2>Một vài khoảnh khắc của mẹ</h2></div><p>Những bức ảnh con muốn lưu lại.</p></motion.header><div className="gallery-grid">{momContent.gallery.map((item, index) => <motion.button {...reveal} transition={{ duration: 0.55, delay: index * 0.06, ease }} className={`gallery-item item-${index + 1}`} key={item.caption} onClick={() => setSelected(index)}><ImageOrPlaceholder src={item.image} alt={item.caption}/><span><b>0{index + 1}</b>{item.caption}</span></motion.button>)}</div><AnimatePresence>{selected !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setSelected(null)}><motion.figure initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease }} onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} aria-label="Đóng ảnh"><X size={18}/></button><ImageOrPlaceholder src={momContent.gallery[selected].image} alt={momContent.gallery[selected].caption}/><figcaption>{momContent.gallery[selected].caption}</figcaption></motion.figure></motion.div>}</AnimatePresence></section>;
}

function Closing() {
  return <footer className="closing section"><motion.div {...reveal} className="closing-art"><ImageOrPlaceholder src={momContent.closingImage} alt="Khoảnh khắc của mẹ"/><Botanical/></motion.div><motion.div {...reveal} className="closing-copy"><span className="kicker">20 tháng 10</span><h2>Thương mẹ.<br/>Chúc mẹ một ngày 20/10 thật vui!</h2><p>— {momContent.sender}</p></motion.div></footer>;
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => { if (audioRef.current) audioRef.current.volume = 0.22; }, []);
  const open = async () => { setOpened(true); window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); if (audioRef.current) await audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); };
  return <><audio ref={audioRef} loop preload="none" src={momContent.music}/><Intro opened={opened} onOpen={open}/><main className={opened ? "site is-open" : "site"}><header className="site-nav"><a href="#top">20.10</a><span>Dành tặng mẹ</span></header><MusicToggle audioRef={audioRef} playing={playing} setPlaying={setPlaying}/><div id="top"/><Greeting/><Gallery/><Closing/></main></>;
}
