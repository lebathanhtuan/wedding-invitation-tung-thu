import { useState } from 'react'
import { Row, Col } from 'antd'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import PhotoLightbox from 'src/components/PhotoLightbox'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import leftImage from 'src/assets/photos/DSC04646_crop.jpg'
import middleImage from 'src/assets/photos/DSC04421_crop.jpg'
import rightImage from 'src/assets/photos/DSC04436_crop.jpg'
import photos from './photos'
import loveStory1Image from 'src/assets/images/LoveStory1.png'
import loveStory2Image from 'src/assets/images/LoveStory2.png'
import loveStory3Image from 'src/assets/images/LoveStory3.png'
import loveStory4Image from 'src/assets/images/LoveStory4.png'
import loveStory5Image from 'src/assets/images/LoveStory5.png'
import loveStory6Image from 'src/assets/images/LoveStory6.png'

import * as S from './styled'

function LoveStory() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()
  return (
    <S.LoveStoryWrapper id="love-story">
      <Container
        style={{
          padding: '12px 8px',
          marginBottom: 24,
          backgroundColor: 'white',
        }}
      >
        <Row gutter={8}>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(0)}>
              <S.ImageContent src={leftImage} />
              <S.ImageLabel data-aos="fade-left">
                {moment(WEDDING_DAY).format('DD')}
              </S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(1)}>
              <S.ImageContent src={middleImage} />
              <S.ImageLabel data-aos="fade-left">
                {moment(WEDDING_DAY).format('MM')}
              </S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(2)}>
              <S.ImageContent src={rightImage} />
              <S.ImageLabel data-aos="fade-left">
                {moment(WEDDING_DAY).format('YY')}
              </S.ImageLabel>
            </S.ImageWrapper>
          </Col>
        </Row>
      </Container>
      <Container>
        <S.LoveStoryTitle align="center" justify="center" vertical>
          <T.Text size="lg">{t('loveStory.title')}</T.Text>
          <T.Title
            level={2}
            align="center"
            color="primary"
            style={{ lineHeight: 1 }}
          >
            {t('loveStory.subTitle')}
          </T.Title>
        </S.LoveStoryTitle>
        <Row gutter={[32, -16]}>
          <S.LoveStoryCol span={24} $right data-aos="fade-right">
            <img src={loveStory1Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-right">
            <T.Title size="xxl" color="primary">
              {t('loveStory.theFirstDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theFirstDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-left">
            <img src={loveStory2Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right data-aos="fade-left">
            <T.Title size="xxl" color="primary">
              {t('loveStory.firstLoveDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.firstLoveDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right data-aos="fade-right">
            <img src={loveStory3Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-right">
            <T.Title size="xxl" color="primary">
              {t('loveStory.theLoveJourney.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theLoveJourney.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-left">
            <img src={loveStory4Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right data-aos="fade-left">
            <T.Title size="xxl" color="primary">
              {t('loveStory.sheSayYes.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.sheSayYes.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right data-aos="fade-right">
            <img src={loveStory5Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-right">
            <T.Title size="xxl" color="primary">
              {t('loveStory.engagementDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.engagementDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} data-aos="fade-left">
            <img src={loveStory6Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right data-aos="fade-left">
            <T.Title size="xxl" color="primary">
              {t('loveStory.theWedding.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theWedding.description')}
            </T.Text>
          </S.LoveStoryCol>
        </Row>
      </Container>
      {/* <PhotoLightbox
        photos={photos}
        activeIndex={lightboxActiveIndex}
        onClose={() => setLightboxActiveIndex(-1)}
      /> */}
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
