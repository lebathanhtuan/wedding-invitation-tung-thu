import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

export const SpinningIcon = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;

  .ant-float-btn-icon {
    font-size: 22px;
  }

  svg {
    width: 1em;
    height: 1em;
  }

  ${({ $playing }) =>
    $playing
      ? css`
          animation: ${spin} 4s linear infinite;
        `
      : css`
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 250%;
            height: 2px;
            background-color: currentColor;
            transform: translate(-50%, -50%) rotate(-45deg);
            border-radius: 1px;
          }
        `}
`
