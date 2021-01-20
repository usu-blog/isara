import { FC } from 'react'
import { Header } from '~/components/organisms/Header/Header'
import { Footer } from '~/components/organisms/Footer/Footer'

export type LayoutProps = {}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
