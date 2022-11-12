import styles from './Button.module.scss'
import {ButtonModel} from '@/components/atoms/Button/Button.model'
import React from 'react'

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