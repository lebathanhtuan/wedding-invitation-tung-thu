import { useEffect, useRef, useState } from 'react'

/**
 * Hook quản lý nhạc nền wedding.
 * - Lần đầu tiên người dùng click vào bất kỳ đâu trên trang → nhạc tự phát.
 * - Cung cấp isPlaying và toggle để hiển thị nút play/pause.
 */
export function useAudioPlayer(src) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  useEffect(() => {
    if (hasInteracted) return

    const handleFirstInteraction = () => {
      if (!audioRef.current) return
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        })
        .catch(() => {
          // Bị chặn bởi trình duyệt, sẽ thử lại ở lần click tiếp theo
        })
    }

    // Bắt sự kiện ở giai đoạn capture để chạy TRƯỚC các handler khác,
    // nhưng không preventDefault/stopPropagation → click gốc vẫn hoạt động
    window.addEventListener('click', handleFirstInteraction, { capture: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction, {
        capture: true,
      })
    }
  }, [hasInteracted])

  const toggle = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
      setHasInteracted(true)
    }
  }

  return { isPlaying, toggle }
}
