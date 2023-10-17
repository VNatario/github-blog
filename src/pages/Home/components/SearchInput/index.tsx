import { useForm } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { SearchInputContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormScheema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormScheema>

export function SearchInput() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormScheema),
  })

  function handleSearchPosts(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <Input placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
