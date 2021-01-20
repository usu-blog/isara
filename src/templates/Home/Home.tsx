import { Layout } from '~/templates/Layout/Layout'
import { FC } from 'react'
import { Hero } from '~/components/organisms/Hero/Hero'

export type HomeProps = {}
export const Home: FC<HomeProps> = (props) => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
