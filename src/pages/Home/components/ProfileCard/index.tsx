import { ProfileCardContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function ProfileCard() {
  return (
    <ProfileCardContainer className="container">
      <img src="https://github.com/VNatario.png" alt="" />
      <ExternalLink text="github" href="" target="_blank" />
      <div>
        <header>
          <h2>Vitor Natario</h2>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} /> VNatario
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} /> None
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> 33 seguidores
          </li>
        </ul>
      </div>
    </ProfileCardContainer>
  )
}
