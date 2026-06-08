import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f2f0;
`

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-width: 548px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`

export const AppContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  min-width: 375px;
  background-color: #fff;
  overflow-x: hidden;

  .ant-float-btn-circle .ant-float-btn-body {
    box-shadow:
      0 0 0 2px white,
      0 6px 16px 0 rgba(0, 0, 0, 0.08);
  }
`

export const Door = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  height: 100vh;
  transition: transform 1s ease-in-out;
  z-index: 98;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  background-image: url(${({ $background }) => $background});
  background-repeat: repeat;
  background-color: ${({ theme }) => theme.colors.background};
`

export const LeftDoor = styled(Door)`
  left: 0;
  transform: ${({ $open }) => ($open ? 'translateX(-250px)' : 'translateX(0)')};
  border-right: 33px solid transparent;
  border-image: url(${({ $border }) => $border}) 58 round;
  border-color: #f0ead6;
`

export const RightDoor = styled(Door)`
  right: 0;
  transform: ${({ $open }) => ($open ? 'translateX(250px)' : 'translateX(0)')};
  border-left: 33px solid transparent;
  border-image: url(${({ $border }) => $border}) 58 round;
  border-color: #f0ead6;
`

export const LockDoor = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: auto;
  height: 125px;
  transition:
    transform 1s ease-in-out,
    opacity 0.5s ease-in-out 0.5s;
  transform: ${({ $open }) =>
    $open ? 'translate(calc(-50% - 250px), -50%)' : 'translate(-50%, -50%)'};
  opacity: ${({ $open }) => ($open ? '0' : '1')};
  z-index: 99;
`
