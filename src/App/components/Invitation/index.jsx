import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import invitationBackground from 'src/assets/images/InvitationBackground.png'
import invitationDecorate1 from 'src/assets/images/InvitationDecorate1.png'
import invitationDecorate2 from 'src/assets/images/InvitationDecorate2.png'
import invitationDecorate3 from 'src/assets/images/InvitationDecorate3.png'
import invitationDecorate4 from 'src/assets/images/InvitationDecorate4.png'
import InvitationDecorate5 from 'src/assets/images/InvitationDecorate5.png'

import * as S from './styled'

function Invitation() {
  const { t } = useTranslation()

  return (
    <S.InvitationWrapper id="invitation" $background={invitationBackground}>
      {/* <S.InvitationDecorate1 src={invitationDecorate1} />
      <S.InvitationDecorate2 src={invitationDecorate2} />
      <S.InvitationDecorate3 src={invitationDecorate3} />
      <S.InvitationDecorate4 src={invitationDecorate4} /> */}
      <S.InvitationDecorate5 src={InvitationDecorate5} />
      <Container>
        <S.InvitationContainer data-aos="fade-up">
          <T.Text size="sm" align="center" style={{ fontSize: 11 }}>
            {t('invitation.title')}
            <br />
            {t('invitation.subTitle')}
          </T.Text>
          <S.RestaurantName
            level={1}
            font="dancing"
            weight="light"
            color="primary"
          >
            {t('invitation.restaurant')}
          </S.RestaurantName>
          <S.RestaurantSubName
            level={2}
            font="cambria"
            weight="light"
            color="primary"
          >
            {t('invitation.subRestaurant')}
          </S.RestaurantSubName>
          <T.Text align="center">{t('invitation.address')}</T.Text>
          <T.Text style={{ margin: '8px 0', fontSize: 15 }}>
            {t('invitation.time')}
          </T.Text>
          <Flex align="center" justify="center">
            <T.Text
              size="lg"
              style={{
                borderTop: '1px solid #2e2e2e',
                borderBottom: '1px solid #2e2e2e',
              }}
            >
              {t('invitation.dddd')}
            </T.Text>
            <Flex
              align="center"
              justify="center"
              vertical
              style={{ margin: '0 8px' }}
            >
              <T.Text size="xs">{t('invitation.date')}</T.Text>
              <T.Text size="xxl" color="primary" style={{ lineHeight: 1.1 }}>
                {t('invitation.DD')}
              </T.Text>
              <T.Text size="xs">{t('invitation.YYYY')}</T.Text>
            </Flex>
            <T.Text
              size="lg"
              style={{
                borderTop: '1px solid #2e2e2e',
                borderBottom: '1px solid #2e2e2e',
              }}
            >
              {t('invitation.MMMM')}
            </T.Text>
          </Flex>
          <T.Text style={{ marginTop: 4 }}>{t('invitation.viDate')}</T.Text>
          <T.Text>{t('invitation.schedule')}</T.Text>
        </S.InvitationContainer>
      </Container>
    </S.InvitationWrapper>
  )
}

export default Invitation
