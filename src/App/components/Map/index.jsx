import { Row, Col } from 'antd'
import { Map as PigeonMap, Marker } from 'pigeon-maps'
import { RESTAURANT_COORDINATES } from 'src/constants/wedding'

import * as S from './styled'

function Map() {
  return (
    <S.ConfirmWrapper>
      <S.ConfirmContainer>
        <Row>
          <Col span={24}>
            <S.MapWrapper>
              <PigeonMap
                defaultCenter={[
                  RESTAURANT_COORDINATES.lat,
                  RESTAURANT_COORDINATES.lng,
                ]}
                defaultZoom={15}
                minZoom={14}
                maxZoom={18}
              >
                <Marker
                  width={50}
                  anchor={[
                    RESTAURANT_COORDINATES.lat,
                    RESTAURANT_COORDINATES.lng,
                  ]}
                />
              </PigeonMap>
            </S.MapWrapper>
          </Col>
        </Row>
      </S.ConfirmContainer>
    </S.ConfirmWrapper>
  )
}

export default Map
