export interface ButtonModel {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'

  [key: string]: any
}