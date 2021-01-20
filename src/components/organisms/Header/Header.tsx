import { FC } from 'react'
import { Button } from '~/components/atoms/Button/Button'

export type HeaderProps = {
  logoUrl: string
  subTitle: string
  contactText: string
}
export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="flex items-center p-3 bg-white fixed w-full">
      <img className="h-11" src={props.logoUrl} alt="logo" />
      <div className="ml-1 h-12 flex items-end">
        <small className="mb-1">{props.subTitle}</small>
      </div>
      <Button className="ml-auto" rounded>
        {props.contactText}
      </Button>
    </header>
  )
}
