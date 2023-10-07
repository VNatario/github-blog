import {
  AnchorHTMLAttributes,
  //  ComponentProps
} from 'react'
import { ExternalLinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

//Atribuindo as caracteristicas a um Elemento ancora com type ou interface
// type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
//   text: string
// }

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
