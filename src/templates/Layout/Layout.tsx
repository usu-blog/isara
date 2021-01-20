import { FC } from 'react'
import { Header } from '~/components/organisms/Header/Header'
import { Footer } from '~/components/organisms/Footer/Footer'

export type LayoutProps = {}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header
        logoUrl="/images/isaralogo.png"
        contactText="お問い合わせ / 資料請求はこちら"
        subTitle="バンコクのノマドエンジニア育成講座"
      />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
