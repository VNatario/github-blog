import { SpinnerContainer } from './styles'

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </SpinnerContainer>
  )
}
