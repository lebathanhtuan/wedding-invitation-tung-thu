import styled, { css } from 'styled-components'

const typographyStyle = css`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.dark1)};
  white-space: pre-line;
  word-break: break-word;

  ${({ truncate }) =>
    truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ truncateMultiLine, theme }) => truncateMultiLine && theme.truncateMultipleLine(truncateMultiLine)}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
`

const textStyle = css`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.md)};
  font-weight: ${({ weight, theme }) => (weight ? theme.fontWeights[weight] : theme.fontWeights.regular)};
`

const titleStyle = css`
  font-weight: ${({ weight, theme }) => (weight ? theme.fontWeights[weight] : theme.fontWeights.bold)};
`

const fontStyle = css`
  font-family: ${({ font, theme }) => {
    switch (font) {
      case 'cambria':
        return 'Cambria, Cochin, Georgia, Times, "Times New Roman", serifl'
      case 'cormorant':
        return '"Cormorant", serif'
      case 'shantellSans':
        return '"Shantell Sans", sans-serif'
      case 'windSong':
        return '"WindSong", cursive'
      case 'poppins':
        return '"Poppins", sans-serif'
      case 'kattyDiona':
        return '"Katty Diona", cursive'
      case 'showcaseSans':
        return '"ShowcaseSans", sans-serif'
      case 'hoatay1':
        return '"UVN Hoa Tay 1", cursive'
      case 'dancing':
      default:
        return '"Dancing Script", cursive'
    }
  }};
`

export const Text = styled.p`
  ${textStyle}
  ${fontStyle}
  ${typographyStyle}
`

export const Label = styled.label`
  ${textStyle}
  ${fontStyle}
  ${typographyStyle}
`

export const H1 = styled.h1`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.xxxl)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xxxl) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xxxl) - 4}px`};
  }
`
export const H2 = styled.h2`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.xxl)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xxl) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xxl) - 4}px`};
  }
`
export const H3 = styled.h3`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.xl)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xl) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.xl) - 4}px`};
  }
`
export const H4 = styled.h4`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.lg)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.lg) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.lg) - 4}px`};
  }
`
export const H5 = styled.h5`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.md)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.md) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.md) - 4}px`};
  }
`
export const H6 = styled.h6`
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.sm)};
  ${titleStyle}
  ${fontStyle}
  ${typographyStyle}

  @media screen and (max-width: 768px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.sm) - 2}px`};
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ size, theme }) => `${parseInt(size ? theme.fontSizes[size] : theme.fontSizes.sm) - 4}px`};
  }
`
