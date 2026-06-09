import styled, { css } from 'styled-components'

export const IntentionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.background};
`

export const PaintImage = styled.img`
  margin-top: 16px;
  margin-right: 16px;
  width: 360px;
  height: auto;
  object-fit: cover;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto;
  grid-gap: 4px;
  margin-top: 24px;
  max-width: 472px;
  width: 100%;
`

export const GridItem = styled.div`
  width: 100%;
  padding-top: 100%;

  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}
`
