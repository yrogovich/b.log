import styles from './Button.module.scss'
import React from 'react'

export interface ButtonModel {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'

  [key: string]: any
}

const Button: React.FC<ButtonModel> = ({
  href,
  children,
  variant = 'primary',
  ...props
}) => {
  const isLink = Boolean(href)
  const classNames = [styles.button, styles[`button--${variant}`]].join(' ')
  let button

  if (isLink) {
    button = (
      <a href={href} className={classNames} {...props}>{children}</a>
    )
  } else {
    button = (
      <button className={classNames} {...props}>{children}</button>
    )
  }

  return (
    <>{button}</>
  )
}

export default Button