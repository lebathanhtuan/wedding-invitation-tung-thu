import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import brideGroomPaint from 'src/assets/images/BrideGroomPaint6.png'
import eventTimeline1 from 'src/assets/images/EventTimeline1.png'
import eventTimeline2 from 'src/assets/images/EventTimeline2.png'
import eventTimeline3 from 'src/assets/images/EventTimeline3.png'

import * as S from './styled'

function Event() {
  const { t } = useTranslation()

  return (
    <S.EventWrapper id="event">
      <Container>
        <S.EventContainer align="center" justify="center" vertical>
          <T.Text size="lg">{t('event.title')}</T.Text>
          <T.Title
            level={2}
            align="center"
            color="primary"
            style={{ lineHeight: 1 }}
          >
            {t('event.subTitle')}
          </T.Title>
        </S.EventContainer>
        <S.EventLeft>
          <img src={brideGroomPaint} alt="" data-aos="fade-up" />
        </S.EventLeft>
        <S.EventTimeline
          mode="alternate"
          items={[
            {
              title: (
                <>
                  <T.Text size="sm" font="poppins">
                    20/06/2026
                  </T.Text>
                  <T.Text color="primary" font="cambria">
                    7h00
                  </T.Text>
                </>
              ),
              content: (
                <S.TimelineContent data-aos="fade-left">
                  <S.TimelineName level={2} color="primary">
                    {t('event.event1.title')}
                  </S.TimelineName>
                  <T.Text font="cambria">{t('event.event1.location')}</T.Text>
                  <T.Text font="cambria" weight="bold" size="sm">
                    {t('event.event1.address')}
                  </T.Text>
                </S.TimelineContent>
              ),
              icon: (
                <S.EventIconWrapper>
                  <S.EventIconContainer>
                    <S.EventIconItem src={eventTimeline1} alt="" />
                  </S.EventIconContainer>
                </S.EventIconWrapper>
              ),
            },
            {
              title: (
                <>
                  <T.Text size="sm" font="poppins">
                    20/06/2026
                  </T.Text>
                  <T.Text color="primary" font="cambria">
                    8h30
                  </T.Text>
                </>
              ),
              content: (
                <S.TimelineContent data-aos="fade-right">
                  <S.TimelineName level={2} color="primary">
                    {t('event.event2.title')}
                  </S.TimelineName>
                  <T.Text font="cambria">{t('event.event2.location')}</T.Text>
                  <T.Text font="cambria" weight="bold" size="sm">
                    {t('event.event2.address')}
                  </T.Text>
                </S.TimelineContent>
              ),
              icon: (
                <S.EventIconWrapper>
                  <S.EventIconContainer>
                    <S.EventIconItem src={eventTimeline2} alt="" />
                  </S.EventIconContainer>
                </S.EventIconWrapper>
              ),
            },
            {
              title: (
                <>
                  <T.Text size="sm" font="poppins">
                    20/06/2026
                  </T.Text>
                  <T.Text color="primary" font="cambria">
                    11h00
                  </T.Text>
                </>
              ),
              content: (
                <div data-aos="fade-left">
                  <S.TimelineName level={2} color="primary">
                    {t('event.event3.title')}
                  </S.TimelineName>
                  <T.Text
                    font="cambria"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 15 }}>
                      {t('event.event3.location')}
                    </span>
                  </T.Text>
                  <T.Text font="cambria" weight="bold" size="sm">
                    {t('event.event3.address')}
                  </T.Text>
                </div>
              ),
              icon: (
                <S.EventIconWrapper>
                  <S.EventIconContainer>
                    <S.EventIconItem src={eventTimeline3} alt="" />
                  </S.EventIconContainer>
                </S.EventIconWrapper>
              ),
            },
          ]}
        />
      </Container>
    </S.EventWrapper>
  )
}

export default Event
