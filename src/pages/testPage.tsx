import { useInView } from 'react-intersection-observer'

const Test = (): JSX.Element => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })
  return (
    <>
      <h1 className="text-xl">Test Page</h1>
      <div className="h-screen"></div>
      <div ref={ref} className="transition duration-500">
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    </>
  )
}

export default Test
