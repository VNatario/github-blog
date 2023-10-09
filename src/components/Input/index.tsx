import { InputHTMLAttributes } from 'react'
import { InputStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <InputStyled {...rest}></InputStyled>
}
