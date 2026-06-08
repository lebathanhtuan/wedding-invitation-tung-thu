import { createGlobalStyle } from 'styled-components'

import KattyDionaFont from './fonts/KattyDiona.otf'
import ShowcaseSansFont from './fonts/ShowcaseSansMini.otf'
import HoaTay1Font from './fonts/UVNHoaTay1.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Katty Diona';
    src: url(${KattyDionaFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ShowcaseSans';
    src: url(${ShowcaseSansFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'UVN Hoa Tay 1';
    src: url(${HoaTay1Font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    line-height: 1.5;
  }

  body {
    font-family: 'Dancing Script';
    font-size: 14px;
    line-height: 1.5;
    height: 100%;
    color: ${({ theme }) => theme.colors.dark1};
  }

  button {
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  label {
    margin: 0;
    line-height: 1.5em;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    color: ${({ theme }) => theme.colors.dark1};
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  .ant-drawer-body {
    display: flex;
    flex-direction: column;
  }

  .ant-modal-mask, {
    background-color: rgba(0, 0, 0, 0.85) !important;
  }

  .ant-drawer-mask {
    background-color: rgba(0, 0, 0, 0.75) !important;
  }

  .ant-select .ant-select-selection-item span,
  .ant-select-dropdown .ant-select-item-option-content span {
    @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .ant-modal-root .ant-modal {
      margin: 0 auto;
    }
}
`

export default GlobalStyle
