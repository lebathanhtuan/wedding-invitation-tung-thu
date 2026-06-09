import { useState, useRef, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import T from 'src/components/Typography'
import PhotoLightbox from 'src/components/PhotoLightbox'

import overviewBackgroundImage from 'src/assets/images/OverviewBackground.png'
import overviewFlower1Image from 'src/assets/images/OverviewFlower1.png'
import overviewFlower2Image from 'src/assets/images/OverviewFlower2.png'
import overviewFlower3Image from 'src/assets/images/OverviewFlower3.png'
import ticketImage from 'src/assets/images/Ticket.png'
import letter1Image from 'src/assets/photos/DSC04933_crop.jpg'
import letter2Image from 'src/assets/photos/DSC04586_crop.jpg'
import { photos1 } from 'src/constants/photos'

import * as S from './styled'
import CountdownTimer from './CountdownTimer'

export default function App() {
  const containerRef = useRef(null)
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()

  const handleSealClick = useCallback(() => {
    if (containerRef.current) {
      const isCurrentlyOpen =
        containerRef.current.getAttribute('data-open') === 'true'
      containerRef.current.setAttribute('data-open', String(!isCurrentlyOpen))

      if (!isCurrentlyOpen) {
        const rect = containerRef.current.getBoundingClientRect()
        const origin = {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
        const colors = [
          '#b8734a',
          '#8c6f4f',
          '#db9e82',
          '#f0ead6',
          '#f8f2f0',
          '#fff',
        ]

        const fire = (particleRatio, opts) =>
          confetti({
            origin,
            colors,
            ticks: 300,
            particleCount: Math.floor(300 * particleRatio),
            ...opts,
          })

        fire(0.25, { spread: 26, startVelocity: 55 })
        fire(0.2, { spread: 60 })
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
        fire(0.1, { spread: 120, startVelocity: 45 })
      }
    }
  }, [])

  return (
    <S.OverviewWrapper $background={overviewBackgroundImage}>
      <T.Title
        level={1}
        weight="light"
        font="kattyDiona"
        style={{ fontSize: 68, marginBottom: 64, zIndex: 1 }}
      >
        Wedding Invitation
      </T.Title>
      <T.Text size="xl" weight="light" style={{ zIndex: 1 }}>
        Chạm để mở thiệp
      </T.Text>
      <Flex style={{ width: '100%', padding: '0 24px' }}>
        <S.EnvelopeWrapper>
          <S.EnvelopeContainer ref={containerRef} data-open="false">
            <S.Flap />
            <S.Pocket />
            <S.WaxSeal onClick={handleSealClick} />
            <S.Letter1>
              <S.LetterImage
                alt="Letter"
                src={letter1Image}
                onClick={() => setLightboxActiveIndex(22)}
              />
            </S.Letter1>
            <S.Letter2>
              <S.LetterImage
                alt="Letter"
                src={letter2Image}
                onClick={() => setLightboxActiveIndex(10)}
              />
            </S.Letter2>
            <S.Letter3>
              <S.LetterTicket alt="Ticket" src={ticketImage} />
            </S.Letter3>
          </S.EnvelopeContainer>
          <S.EnvelopeShadow />
        </S.EnvelopeWrapper>
      </Flex>
      <S.NameContainer>
        <Flex align="baseline" gap={12}>
          <T.Text font="hoatay1" color="primary" size="xxl">
            {t('overview.groom.label')}
          </T.Text>
          <T.Text font="hoatay1" style={{ fontSize: 56 }}>
            {t('name.groom')}
          </T.Text>
        </Flex>
        <T.Text font="hoatay1" color="primary" style={{ fontSize: 48 }}>
          &
        </T.Text>
        <Flex align="baseline" gap={12}>
          <T.Text font="hoatay1" style={{ fontSize: 56 }}>
            {t('name.bride')}
          </T.Text>
          <T.Text font="hoatay1" color="primary" size="xxl">
            {t('overview.bride.label')}
          </T.Text>
        </Flex>
      </S.NameContainer>
      <CountdownTimer />
      <S.OverviewFlower1 src={overviewFlower1Image} />
      <S.OverviewFlower2 src={overviewFlower2Image} />
      <S.OverviewFlower3 src={overviewFlower3Image} />
      <PhotoLightbox
        photos={photos1}
        activeIndex={lightboxActiveIndex}
        onClose={() => setLightboxActiveIndex(-1)}
      />
    </S.OverviewWrapper>
  )
}
