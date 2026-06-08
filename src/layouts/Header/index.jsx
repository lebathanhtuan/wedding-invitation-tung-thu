import T from 'src/components/Typography'

import * as S from './styled'

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <T.Text font="showcaseSans" weight="light" size="xl">
          WELCOME
        </T.Text>
        <T.Text font="showcaseSans" weight="light" size="xl">
          TO OUR
        </T.Text>
        <T.Text font="showcaseSans" weight="light" size="xl">
          WEDDING
        </T.Text>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
