import styled, { keyframes } from 'styled-components'

export const OverviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 48px 16px;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  overflow: hidden;
`

export const EnvelopeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 24px 0 36px;
  container-type: inline-size;
  --env-w: min(100cqw, 340px);
  --env-h: calc(var(--env-w) * 2 / 3);
  --env-half-w: calc(var(--env-w) / 2);
  --wax-size: calc(var(--env-w) * 0.13);
`

const shadowScale = keyframes`
  0%, 100% {
    transform: translateX(-50%) scaleX(1);
  }
  50% {
    transform: translateX(-50%) scaleX(0.85);
  }
`

export const EnvelopeShadow = styled.div`
  position: relative;
  width: var(--env-w);
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  top: 0px;
  pointer-events: none;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    width: calc(var(--env-w) * 0.795);
    height: 20px;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(4px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    animation: 3s ease-in-out 0s infinite normal none running ${shadowScale};
  }
`

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`

export const EnvelopeContainer = styled.div`
  position: relative;
  width: var(--env-w);
  height: var(--env-h);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  background-color: #c5bdab;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 20px;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  animation: 3s ease-in-out 0s infinite normal none running ${floatAnimation};
`

export const Flap = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  transform-origin: center top;
  border-left: var(--env-half-w) solid transparent;
  border-right: var(--env-half-w) solid transparent;
  border-bottom: calc(var(--env-h) * 0.46) solid transparent;
  border-top: calc(var(--env-h) * 0.54) solid #cabd9f;
  z-index: 5;

  [data-open='true'] & {
    transform: rotateX(180deg);
    transition:
      transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      z-index 1.2s;
    z-index: 1;
  }
`

export const Pocket = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-left: var(--env-half-w) solid #d7cab6;
  border-right: var(--env-half-w) solid #d7cab6;
  border-bottom: calc(var(--env-h) / 2) solid #dfd6c4;
  border-top: calc(var(--env-h) / 2) solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 5;
`

export const WaxSeal = styled.div`
  position: absolute;
  top: calc(var(--env-h) * 0.4);
  left: 50%;
  transform: translateX(-50%);
  width: var(--wax-size);
  height: var(--wax-size);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('https://assets.cinelove.me/assets/plugins/wax-seal.webp');
  background-color: transparent;
  z-index: 10;
  cursor: pointer;
`

export const Letter = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  will-change: transform;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 227, 239, 0.2) 75%,
      rgba(215, 227, 239, 0.3) 100%
    );
    pointer-events: none;
  }
`

export const Letter1 = styled(Letter)`
  top: 5%;
  left: 10px;
  width: 50%;
  height: 94%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 26px;
  border-radius: 6px;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &::after {
    transition: all 0.3s;
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  [data-open='true'] & {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 30px;
    transform: translateY(calc(var(--env-h) * -0.6)) rotate(-10deg);
    z-index: 3;
    transition:
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s,
      z-index 0.5s;
  }
`

export const Letter2 = styled(Letter)`
  top: 5%;
  right: 0;
  width: 50%;
  height: 94%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 26px;
  border-radius: 6px;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &::after {
    transition: all 0.3s;
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  [data-open='true'] & {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 30px;
    transform: translateY(calc(var(--env-h) * -0.75)) rotate(10deg);
    z-index: 2;
    transition:
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s,
      z-index 0.5s;
  }
`

export const Letter3 = styled(Letter)`
  bottom: 5%;
  right: 30px;
  width: 70%;
  height: auto;
  background-color: transparent;

  &::after {
    background-image: none;
  }

  [data-open='true'] & {
    transform: translateY(calc(var(--env-h) * -0.5)) rotate(-8deg);
    z-index: 4;
    transition:
      transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s,
      z-index 0.5s;
  }
`

export const LetterImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  border: 3px solid #f8f2f0;
  transition: all 0.3s;
`

export const LetterTicket = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
  z-index: 1;
`

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    font-size: 32px;
  }

  & > p {
    position: relative;
    top: -12px;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  max-width: 400px;
  z-index: 1;

  & p {
    line-height: 0.9;
  }
`

export const OverviewFlower1 = styled.img`
  position: absolute;
  top: 21%;
  width: 210px;
  left: -72px;
  transform: rotate(22deg);
  opacity: 0.4;
  z-index: 0;
`

export const OverviewFlower2 = styled.img`
  position: absolute;
  bottom: 21%;
  width: 200px;
  right: -82px;
  transform: rotate(-33deg);
  opacity: 0.4;
  z-index: 0;
`

export const OverviewFlower3 = styled.img`
  position: absolute;
  bottom: 7%;
  width: 190px;
  left: -48px;
  transform: rotate(60deg);
  opacity: 0.35;
  z-index: 0;
`
