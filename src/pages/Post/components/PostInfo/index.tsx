import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { InfoList, PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div>
        <ExternalLink text="Voltar" href="" target="_blank" />
        <ExternalLink text="ver no github" href="" target="_blank" />
      </div>

      <h1>JavaScript data types and data structures</h1>

      <InfoList>
        <li>
          <FontAwesomeIcon icon={faGithub} /> VNatario
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </InfoList>
    </PostInfoContainer>
  )
}
