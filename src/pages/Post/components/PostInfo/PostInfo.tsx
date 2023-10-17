import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { InfoList, PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export function PostInfo() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      <header>
        <ExternalLink
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          $variant="iconLeft"
        />
        <ExternalLink text="ver no github" href="#" target="_blank" />
      </header>

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
