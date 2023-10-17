import { useForm } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { SearchInputContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormScheema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormScheema>

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>
  postsLength: number
}

export function SearchInput({ getPosts, postsLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormScheema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>{postsLength} publicações</span>
      </div>

      <Input placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
