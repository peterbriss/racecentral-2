import Head from 'next/head'

import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function Podcast() {
  return (
    <>
      <Head>
        <title>
          Kurt Hansen&apos;s Race Central Media Podcast
        </title>
        <meta
          name="description"
          content="Podcast video of Kurt Hansen&apos;s Race Central Media."
        />
      </Head>
      <div className="pt-6 pb-12 sm:pb-6 lg:pt-12">
        <Container>
          <Navigation />
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          <iframe
            src="https://vimeo.com/showcase/9968240/embed"
            allowFullScreen
            className="h-screen w-full"
          />
        </div>
        <SponsorsBanner />
      </div>
    </>
  )
}
