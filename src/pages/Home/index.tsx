import { useCallback, useState, useEffect } from 'react'
import { Card } from './components/Card'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import { CardListContainer, HomeContainer } from './styles'
import { api } from '../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface InterfacePost {
  title: string
  created_at: string
  body: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<InterfacePost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  )

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput getPosts={getPosts} postsLength={posts.length} />

      <CardListContainer>
        {posts.map((post) => (
          <Card key={post.number} post={post} />
        ))}
      </CardListContainer>
    </HomeContainer>
  )
}
