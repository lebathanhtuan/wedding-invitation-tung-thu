import styled from 'styled-components'

export const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

export const ConfirmContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
`

export const ConfirmLeft = styled.div`
  height: 100%;
`

export const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 75% 50%;
  color: white;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  & img {
    width: 50%;
    height: auto;
  }
`

export const FormLine = styled.div`
  margin: 16px 0;
  width: 80px;
  height: 2px;
  border-radius: 2px;
  background-color: white;
`

export const ConfirmRight = styled.div`
  padding: 16px;
`

export const ConfirmForm = styled.div`
  border-radius: 4px;
  padding: 16px;
  background-color: #f8f2f0;
`

export const MapWrapper = styled.div`
  min-height: 300px;
  height: 100%;
`

export const MapLocation = styled.img`
  position: relative;
  left: -30%;
  width: 130px;
`
