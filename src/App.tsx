import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'
import { useState } from 'react'
import IntroEnvelope from './components/IntroEnvelope'
import PetalParticles from './components/PetalParticles'
import FlowerGarden from './components/FlowerGarden'
import LoveLetter from './components/LoveLetter'
import MemoriesGallery from './components/MemoriesGallery'
import LovePromise from './components/LovePromise'
import FinalScene from './components/FinalScene'
import MusicToggle from './components/MusicToggle'
import { loveContent } from './config/loveContent'

export default function App(){const [opened,setOpened]=useState(false);return <><IntroEnvelope open={opened} onOpen={()=>{setOpened(true);setTimeout(()=>document.getElementById('home')?.scrollIntoView(),600)}}/><MusicToggle src={loveContent.music} startSignal={opened}/><main id="home" className={opened?'revealed':''}><section className="hero section"><PetalParticles/><div className="hero-glow"/><div className="hero-flower hero-flower-left"/><div className="hero-flower hero-flower-right"/><motion.div className="hero-copy" initial={{opacity:0,y:32}} animate={opened?{opacity:1,y:0}:{}} transition={{delay:.65,duration:1}}><span className="hero-script">For my favorite person</span><div className="mini-heart"><Heart fill="currentColor"/></div><h1>{loveContent.heroTitle} <span>❤️</span></h1><p>{loveContent.heroSubtitle}</p><a className="primary-btn" href="#garden">Dành tặng em một điều bất ngờ</a></motion.div><a href="#garden" className="scroll-cue" aria-label="Cuộn xuống"><span>Khám phá khu vườn</span><ChevronDown/></a></section><FlowerGarden/><LoveLetter/><MemoriesGallery/><LovePromise/><FinalScene/></main></>}
