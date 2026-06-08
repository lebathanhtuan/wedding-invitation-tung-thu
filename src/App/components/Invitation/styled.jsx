import styled from 'styled-components'
import T from 'src/components/Typography'

export const InvitationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0 150px;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    padding: 4px 4px 0;
  }
`

export const RestaurantName = styled(T.Title)`
  font-size: 44px;
  margin: 12px 0 -8px;
`

export const RestaurantSubName = styled(T.Title)`
  font-size: 20px;
  margin-bottom: 8px;
`

export const InvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  & p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serifl;
  }
`

export const InvitationDecorate = styled.img`
  position: absolute;
  opacity: 0.8;
`

export const InvitationDecorate1 = styled(InvitationDecorate)`
  top: 0;
  left: 0;
`

export const InvitationDecorate2 = styled(InvitationDecorate)`
  top: 0;
  right: 0;
`

export const InvitationDecorate3 = styled(InvitationDecorate)`
  bottom: 0;
  left: 0;
`

export const InvitationDecorate4 = styled(InvitationDecorate)`
  bottom: 0;
  right: 0;
`

export const InvitationDecorate5 = styled(InvitationDecorate)`
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  opacity: 0.9;
`
