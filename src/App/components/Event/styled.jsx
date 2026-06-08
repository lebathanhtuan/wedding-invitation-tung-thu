import { Flex } from 'antd'
import styled from 'styled-components'
import { Timeline } from 'antd'

import T from 'src/components/Typography'

export const EventWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  overflow: hidden;
`

export const EventContainer = styled(Flex)`
  margin-bottom: 12px;
`

export const EventLeft = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin-bottom: 16px;

  & img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
`

export const EventTimeline = styled(Timeline)`
  margin-top: 24px;

  .ant-timeline-item-tail,
  .ant-timeline-item-rail {
    border-inline-start-color: ${({ theme }) =>
      theme.colors.primary} !important;
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }

  .ant-timeline-item-head-custom,
  .ant-timeline-item-icon {
    background-color: transparent !important;
    border: none !important;
    width: auto !important;
    height: auto !important;
    min-width: unset !important;
    min-height: auto !important;
    transform: translate(-50%, 0) !important;
    margin-inline-start: 0 !important;
    overflow: visible !important;
    top: -16px !important;

    &::after {
      display: none !important;
    }
  }

  .ant-timeline-item-placement-start .ant-timeline-item-header,
  .ant-timeline-item-placement-end .ant-timeline-item-content {
    padding-right: 32px !important;
  }

  .ant-timeline-item-placement-start .ant-timeline-item-content,
  .ant-timeline-item-placement-end .ant-timeline-item-header {
    padding-left: 32px !important;
  }
`

export const TimelineContent = styled.div`
  padding-bottom: 16px;
`

export const TimelineName = styled(T.Title)`
  line-height: 1.2;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const EventIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const EventIconContainer = styled.div`
  background-color: white;
  padding: 4px;
`

export const EventIconItem = styled.img`
  height: 84px;
  width: auto;
`
