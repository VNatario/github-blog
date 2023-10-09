import { ProfileCard } from './components/ProfileCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />

      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
    </HomeContainer>
  )
}
