import styled from 'styled-components'
import { Row } from 'antd'

import T from 'src/components/Typography'

export const CoupleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 0 56px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ $background }) => $background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 80%;
    background-attachment: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    filter: grayscale(100%);
    z-index: 0;

    @media (hover: none) and (pointer: coarse) {
      background-attachment: scroll;
      background-size: cover;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(110, 65, 40, 0.7);
    z-index: 1;
  }

  & > div {
    z-index: 2;
  }
`

export const CoupleName = styled(T.Text)`
  margin: 16px 0 8px;
  font-size: 36px !important;
`

export const ImageWrapper = styled.div`
  max-width: 300px;
  width: 94%;
  height: auto;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 136%;
`

export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid white;
  object-fit: cover;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const MiddleImage = styled.img`
  max-width: 40px;
  width: 100%;
  height: auto;
  margin: 16px 0;
`

export const TextImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
`

export const CoupleRow = styled(Row)`
  align-items: center;
  margin-bottom: 0;
`

export const CoupleBorderLeft = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 3;
`

export const CoupleBorderRight = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 3;
`

export const CoupleBorderBottom = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 24px;
  background-image: ${({ $background }) => `url(${$background})`};
  background-repeat: repeat;
`
