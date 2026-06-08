import { Row, Col, Flex, Masonry } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import PhotoLightbox from 'src/components/PhotoLightbox'

import justMarriedImage from 'src/assets/images/JustMarried.png'
import brideGroomPaintImage from 'src/assets/images/BrideGroomPaint7.png'

import { GALLERY_ITEMS } from './constants'
import * as S from './styled'

function Intention() {
  const { t } = useTranslation()
  const [activePhotoIndex, setActivePhotoIndex] = useState(-1)

  return (
    <S.IntentionWrapper>
      <Container>
        <Row gutter={[16, 24]} align="middle">
          <Col span={24}>
            <Flex align="center" justify="center" vertical>
              <img
                src={justMarriedImage}
                alt="Just Married"
                style={{ maxWidth: 180 }}
              />
              <S.PaintImage src={brideGroomPaintImage} data-aos="fade-left" />
            </Flex>
          </Col>
          <Col span={24}>
            <Flex align="center" justify="center" vertical>
              <T.Text
                size="lg"
                align="center"
                data-aos="fade-right"
                style={{ marginBottom: 16 }}
              >
                {t('intention.label1')} <br /> {t('intention.label2')}
              </T.Text>
            </Flex>
          </Col>
        </Row>
        <Masonry
          column={3}
          gutter={8}
          items={GALLERY_ITEMS.map((img, index) => ({
            key: `item-${index}`,
            data: img,
            index,
          }))}
          itemRender={({ data, index }) => (
            <img
              src={`${data}?w=523&auto=format`}
              alt="sample"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => setActivePhotoIndex(index)}
            />
          )}
        />
        <PhotoLightbox
          photos={GALLERY_ITEMS}
          activeIndex={activePhotoIndex}
          onClose={() => setActivePhotoIndex(-1)}
        />
      </Container>
    </S.IntentionWrapper>
  )
}

export default Intention
