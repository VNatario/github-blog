import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileCardContainer } from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="" alt="" />
      <div>
        <div>
          <h2>Cameron Williamson</h2>
          <a href="">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </ProfileCardContainer>
  )
}
