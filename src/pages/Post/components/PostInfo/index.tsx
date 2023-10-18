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
import { InterfacePost } from '../../../Home'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { Spinner } from '../../../../components/Spinner'

interface PostInfoProps {
  post: InterfacePost
  isLoading: boolean
}

export function PostInfo({ post, isLoading }: PostInfoProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  console.log(post)
  const formattedDate = relativeDateFormatter(post?.created_at)

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              $variant="iconLeft"
            />
            <ExternalLink
              text="ver no github"
              href={post.html_url}
              target="_blank"
            />
          </header>

          <h1>{post.title}</h1>

          <InfoList>
            <li>
              <FontAwesomeIcon icon={faGithub} /> {post.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {post.comments} comentários
            </li>
          </InfoList>
        </>
      )}
    </PostInfoContainer>
  )
}
