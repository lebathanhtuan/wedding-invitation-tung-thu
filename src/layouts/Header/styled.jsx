import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  z-index: 9;
`

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  max-width: ${({ theme }) => theme.breakpoint.xl};
  width: 100%;
`
