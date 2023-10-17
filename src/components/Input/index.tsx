import { InputHTMLAttributes, forwardRef } from 'react'
import { InputStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => <InputStyled {...rest} ref={ref}></InputStyled>
)
