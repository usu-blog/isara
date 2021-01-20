import { FC } from 'react'
import classnames from 'classnames'
export type ButtonProps = {
  rounded?: boolean
  className?: string
}
export const Button: FC<ButtonProps> = (props) => {
  const roundedClass = () => (props.rounded ? 'rounded-full' : 'rounded')
  return (
    <button
      className={classnames([
        'py-2 px-4 text-sm text-white bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 opacity-80 hover:opacity-100',
        roundedClass(),
        props.className,
      ])}
    >
      {props.children}
    </button>
  )
}
