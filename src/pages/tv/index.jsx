import Head from 'next/head'

import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function TV({ episodes }) {
  return (
    <>
      <Head>
        <title>Kurt Hansen&apos;s Race Central Media TV</title>
        <meta
          name="description"
          content="TV conversations with professional racers."
        />
      </Head>
      <div className="pt-6 pb-12 sm:pb-6 lg:pt-12">
        <Container>
          <Navigation />
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          <iframe
            src="https://vimeo.com/showcase/9766060/embed"
            allowFullScreen
            className="h-screen w-full"
          />
        </div>
        <SponsorsBanner />
        <div className="flex justify-center divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/mnlNGea_Q5s"
            allowFullScreen
            className="h-[50vh] w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  )
}
