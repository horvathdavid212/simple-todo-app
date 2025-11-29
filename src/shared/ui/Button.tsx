import { ButtonHTMLAttributes } from 'react'
import './button.css'

type Variant = 'primary' | 'ghost'
type Size = 'md' | 'sm'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export function Button({ variant = 'primary', size = 'md', className = '', ...rest }: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  return <button className={classes} {...rest} />
}
