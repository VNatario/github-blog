import { Card } from './components/Card'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { CardListContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput />

      <CardListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardListContainer>
    </HomeContainer>
  )
}
