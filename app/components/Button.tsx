import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

const base = 'inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2'
const variants: Record<Variant, string> = {
  primary: 'bg-theme-color text-white hover:opacity-95 focus:ring-theme-color',
  secondary: 'bg-white text-theme-color border border-theme-color hover:bg-theme-color/10 focus:ring-theme-color',
  ghost: 'bg-transparent text-white hover:bg-white/5 focus:ring-white'
}
const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-3 text-base rounded-md',
  lg: 'px-6 py-4 text-lg rounded-lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
  ariaLabel
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()
  const computedRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={computedRel} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}