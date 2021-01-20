import { FC } from 'react'
import { Button } from '~/components/atoms/Button/Button'

export type HeaderProps = {
  logoUrl: string
  subTitle: string
  contactText: string
}
export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className="flex items-center">
      <img className="h-12" src={props.logoUrl} alt="logo" />
      <div className="h-12 flex items-end">
        <small className="mb-1">{props.subTitle}</small>
      </div>
      <Button className="ml-auto" rounded>
        {props.contactText}
      </Button>
    </header>
  )
}
