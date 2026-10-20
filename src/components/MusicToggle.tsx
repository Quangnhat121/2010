import { Music, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function MusicToggle({ src, startSignal }: { src: string; startSignal: boolean }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)
  useEffect(() => { if (startSignal && available) audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false)) }, [startSignal, available])
  const toggle = async () => { if (!audio.current || !available) return; if (playing) audio.current.pause(); else await audio.current.play().catch(() => setAvailable(false)); setPlaying(!playing) }
  return <><audio ref={audio} src={src} loop preload="none" onError={() => setAvailable(false)} /><button className="music-toggle" onClick={toggle} aria-label={playing ? 'Tắt nhạc' : 'Bật nhạc'} title={available ? 'Nhạc nền' : 'Thêm file nhạc vào public/music'}>{available ? (playing ? <Volume2/> : <VolumeX/>) : <Music/>}<span>{available ? (playing ? 'Đang phát' : 'Bật nhạc') : 'Chưa có nhạc'}</span></button></>
}
