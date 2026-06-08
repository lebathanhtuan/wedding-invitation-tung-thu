import { useState } from 'react'
import { Row, Col, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import PhotoLightbox from 'src/components/PhotoLightbox'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import coupleLeftImage from 'src/assets/photos/DSC06929.jpg'
import coupleRightImage from 'src/assets/photos/DSC06296_crop.jpg'
import coupleBackgroundImage from 'src/assets/photos/DSC05878.jpg'
import coupleMiddleImage from 'src/assets/images/CoupleMiddle.png'
import coupleTextImage from 'src/assets/images/CoupleText.png'
import coupleBorderImage from 'src/assets/images/CoupleBorder.png'
import coupleBorderLeftImage from 'src/assets/images/CoupleBorderLeft.png'
import coupleBorderRightImage from 'src/assets/images/CoupleBorderRight.png'
import coupleBorderBottomImage from 'src/assets/images/CoupleBorderBottom.png'
import photos from './photos'

import * as S from './styled'

function Couple() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()

  return (
    <S.CoupleWrapper id="couple" $background={coupleBackgroundImage}>
      <Container>
        <Flex align="center" justify="center" style={{ marginBottom: 8 }}>
          <S.TextImage src={coupleTextImage} alt="" />
        </Flex>
        <Row gutter={[16, 16]} align={{ lg: 'middle', xs: 'stretch' }}>
          <Col span={24}>
            <S.CoupleRow>
              <Col span={10} data-aos="fade-right">
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xl" color="light">
                    {t('couple.groom.label')}
                  </T.Text>
                  <T.Text color="light" align="center">
                    {/* {t('couple.groom.family.father')} */}
                    {t('couple.groom.family.mother')}
                    <br />
                    <br />
                  </T.Text>
                </Flex>
              </Col>
              <Col span={4}>
                <Flex align="center" justify="center" vertical>
                  <S.MiddleImage src={coupleMiddleImage} alt="" />
                </Flex>
              </Col>
              <Col span={10} data-aos="fade-left">
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xl" color="light">
                    {t('couple.bride.label')}
                  </T.Text>
                  <T.Text color="light" align="center">
                    {t('couple.bride.family.father')}
                    <br />
                    {t('couple.bride.family.mother')}
                  </T.Text>
                </Flex>
              </Col>
            </S.CoupleRow>
          </Col>
          <Col span={12}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper data-aos="fade-right">
                <S.ImageContainer>
                  <S.ImageContent $background={coupleBorderImage}>
                    <S.ImageItem
                      src={coupleLeftImage}
                      alt=""
                      style={{ backgroundSize: '150%' }}
                      onClick={() => setLightboxActiveIndex(0)}
                    />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <S.CoupleName color="light" font="hoatay1" data-aos="fade-right">
                {t('name.groom')}
              </S.CoupleName>
              <T.Text color="light" align="center" data-aos="fade-right">
                {t('couple.groom.description')}
              </T.Text>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper data-aos="fade-left">
                <S.ImageContainer>
                  <S.ImageContent $background={coupleBorderImage}>
                    <S.ImageItem
                      src={coupleRightImage}
                      alt=""
                      onClick={() => setLightboxActiveIndex(1)}
                    />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <S.CoupleName color="light" font="hoatay1" data-aos="fade-left">
                {t('name.bride')}
              </S.CoupleName>
              <T.Text color="light" align="center" data-aos="fade-left">
                {t('couple.bride.description')}
              </T.Text>
            </Flex>
          </Col>
        </Row>
      </Container>
      <S.CoupleBorderLeft src={coupleBorderLeftImage} alt="" />
      <S.CoupleBorderRight src={coupleBorderRightImage} alt="" />
      <S.CoupleBorderBottom $background={coupleBorderBottomImage} />
      {/* <PhotoLightbox
        photos={photos}
        activeIndex={lightboxActiveIndex}
        onClose={() => setLightboxActiveIndex(-1)}
      /> */}
    </S.CoupleWrapper>
  )
}

export default Couple
