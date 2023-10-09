import {
  ProfileImage,
  ProfileCardContainer,
  ProfileDetails,
  ProfileInfoList,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function ProfileCard() {
  return (
    <ProfileCardContainer className="container">
      <ProfileImage src="https://github.com/VNatario.png" alt="" />
      <ExternalLink text="github" href="" target="_blank" />
      <ProfileDetails>
        <h1>Vitor Natario</h1>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfoList>
          <li>
            <FontAwesomeIcon icon={faGithub} /> VNatario
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} /> None
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> 33 seguidores
          </li>
        </ProfileInfoList>
      </ProfileDetails>
    </ProfileCardContainer>
  )
}
