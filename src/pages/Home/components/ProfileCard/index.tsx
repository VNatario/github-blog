import { ProfileCardContainer } from './styles'

import { ExternalLink } from '../ExternalLink'

export function ProfileCard() {
  return (
    <ProfileCardContainer className="container">
      <img src="https://github.com/VNatario.png" alt="" />
      <div>
        <header>
          <h2>Vitor Natario</h2>
          <ExternalLink text="github" href="#" target="_blank" />
        </header>
      </div>
    </ProfileCardContainer>
  )
}
