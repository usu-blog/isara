import { FC } from 'react'
export type HeroProps = {}
export const Hero: FC<HeroProps> = (props) => {
  return (
    <>
      <div
        className="bg-no-repeat flex items-center justify-center flex-col bg-cover"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', height: '500px' }}
      >
        <h1 className="text-center text-2xl font-bold">
          プログラミングで
          <br />
          人生の安定を手にいれよう
        </h1>
        <img className="h-32" src="/images/isaralogolarge.png" alt="logo" />
        <p className="text-center font-bold mt-6">
          バンコクのノマドエンジニア育成講座
          <br />
          iSara[イサラ]
        </p>
      </div>
    </>
  )
}
