import { InterfacePost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { CardContainer } from './styles'

interface CardProps {
  post: InterfacePost
}

export function Card({ post }: CardProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <CardContainer to={`/post/${post.number}`}>
      <div>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </CardContainer>
  )
}
