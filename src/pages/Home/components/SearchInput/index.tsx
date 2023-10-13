import { Input } from '../../../../components/Input'
import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <Input placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
