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
        'py-3 px-10 text-sm text-white bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 hover:bg-primary-dark',
        roundedClass(),
        props.className,
      ])}
    >
      {props.children}
    </button>
  )
}
