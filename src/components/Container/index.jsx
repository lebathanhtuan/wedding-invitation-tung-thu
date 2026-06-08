import * as S from './styled'

function Container({ children, ...rest }) {
  return <S.ContainerWrapper {...rest}>{children}</S.ContainerWrapper>
}

export default Container
