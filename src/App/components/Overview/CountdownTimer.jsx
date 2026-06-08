import { useState, useCallback } from 'react'
import { Statistic, Flex } from 'antd'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import * as S from './styled'

export default function CountdownTimer() {
  const { t } = useTranslation()
  const [countdownTime, setCountdownTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  })

  const handleChangeCountdown = useCallback((value) => {
    const vietnamTimezoneOffset = 7 * 60 * 60 * 1000
    const oneHourTime = 60 * 60 * 1000
    const [days, hours, minutes, seconds] = moment(
      value - vietnamTimezoneOffset - oneHourTime,
    )
      .format('D-H-m-s')
      .split('-')
    setCountdownTime({ days, hours, minutes, seconds })
  }, [])

  return (
    <Flex>
      <S.CountdownContainer>
        <S.CountdownItem>
          <T.Title level={3} weight="regular" color="primary">
            {countdownTime.days}
          </T.Title>
          <T.Text weight="light" size="md">
            {t('overview.countdown.days')}
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular" color="primary">
            {countdownTime.hours}
          </T.Title>
          <T.Text weight="light" size="md">
            {t('overview.countdown.hours')}
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular" color="primary">
            {countdownTime.minutes}
          </T.Title>
          <T.Text weight="light" size="md">
            {t('overview.countdown.minutes')}
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular" color="primary">
            {countdownTime.seconds}
          </T.Title>
          <T.Text weight="light" size="md">
            {t('overview.countdown.seconds')}
          </T.Text>
        </S.CountdownItem>
      </S.CountdownContainer>
      <Statistic.Countdown
        value={moment(WEDDING_DAY).valueOf()}
        onChange={handleChangeCountdown}
        style={{ display: 'none' }}
      />
    </Flex>
  )
}
