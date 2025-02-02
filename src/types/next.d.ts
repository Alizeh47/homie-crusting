declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
  
  type Props = {
    src: string
    alt: string
    fill?: boolean
    quality?: number
    priority?: boolean
    loading?: 'lazy' | 'eager'
    className?: string
  }

  export default function Image(props: Props): JSX.Element
} 