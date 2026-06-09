import { useEffect, useState } from 'react'
import { FloatButton } from 'antd'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from 'src/layouts/Header'
import MusicControl from 'src/components/MusicControl'
import { useAudioPlayer } from 'src/hooks/useAudioPlayer'
import weddingMusic from 'src/assets/musics/CuoiDi.mp3'
import Overview from './components/Overview'
import Invitation from './components/Invitation'
import Couple from './components/Couple'
import LoveStory from './components/LoveStory'
import Event from './components/Event'
import Intention from './components/Intention'
import Map from './components/Map'
import Thanks from './components/Thanks'

import doorBackgroundImage from 'src/assets/images/DoorBackground.png'
import doorBorderImage from 'src/assets/images/DoorBorder.png'
import doorLockImage from 'src/assets/images/DoorLock.png'

import * as S from './styled'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const { isPlaying, toggle } = useAudioPlayer(weddingMusic)

  const { t } = useTranslation()

  useEffect(() => {
    // Tự động mở cửa sau khi component render lần đầu
    // Sử dụng setTimeout để đảm bảo trình duyệt có thời gian áp dụng CSS trạng thái ban đầu (đóng)
    // trước khi chuyển sang trạng thái mới (mở), tạo ra hiệu ứng animation.
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    // Cleanup function để gỡ bỏ timeout nếu component unmount trước khi chạy xong
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: 'ease-out',
    })

    const onLoad = () => AOS.refresh()
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <S.AppWrapper>
      <S.LeftDoor
        $open={isOpen}
        $background={doorBackgroundImage}
        $border={doorBorderImage}
      />
      <S.LockDoor src={doorLockImage} $open={isOpen} alt="Lock" />
      <S.RightDoor
        $open={isOpen}
        $background={doorBackgroundImage}
        $border={doorBorderImage}
      />
      <S.AppContainer>
        <S.AppContent>
          <Header />
          <main>
            <Overview />
            <Couple />
            <Invitation />
            <LoveStory />
            <Event />
            <Intention />
            <Map />
            <Thanks />
          </main>
          <FloatButton.Group shape="circle">
            <MusicControl isPlaying={isPlaying} onToggle={toggle} />
            <FloatButton.BackTop
              type="primary"
              tooltip={<div>{t('common.backToTop')}</div>}
            />
          </FloatButton.Group>
        </S.AppContent>
      </S.AppContainer>
    </S.AppWrapper>
  )
}

export default App
