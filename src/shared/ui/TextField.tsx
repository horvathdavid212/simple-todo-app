import { InputHTMLAttributes, forwardRef } from 'react'
import './text-field.css'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(props, ref) {
  return <input ref={ref} className="text-field" {...props} />
})
