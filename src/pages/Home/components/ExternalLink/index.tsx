import { ComponentProps } from 'react'
import { ExternalLinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
