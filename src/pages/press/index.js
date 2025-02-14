import Head from 'next/head'
// import Link from 'next/link'

import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function Press({ press_releases }) {
  return (
    <>
      <Head>
        <title>
          Kurt Hansen&apos;s Race Central Media Press Releases
        </title>
        <meta
          name="description"
          content="Press Releases from Kurt Hansesn&apos;s Race Central Media."
        />
      </Head>
      <div className="pt-6 pb-12 sm:pb-6 lg:pt-12">
        <Container>
          <Navigation />
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          {press_releases.map((press_release) => (
            <PressEntry key={press_release.title} press_release={press_release} />
          ))}
        </div>
        <SponsorsBanner />
      </div>
    </>
  )
}

function PressEntry({ press_release }) {
  let date = new Date(press_release.published)

  return (
    <article
      aria-labelledby={`article-${encodeURIComponent(press_release.title)}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`article-${encodeURIComponent(press_release.title)}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            {press_release.title}
          </h2>
          <time
            dateTime={date.toISOString()}
            className="-order-1 font-mono text-sm leading-7 text-slate-500"
          >
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(date)}
          </time>
          <div
            className="mt-1 text-base leading-7 text-slate-700"
            dangerouslySetInnerHTML={{ __html: press_release.body }}
          />
        </div>
      </Container>
    </article>
  )
}

export async function getServerSideProps(context) {
  let press_releases = [
    {
      title: "Race Central TV Brings Exciting Motorsports Action to TV Universe",
      body: `
        <p>Miami Beach, FL – Race Central TV, the premier destination for motorsports fans, is excited to announce its official launch on TV Universe, one of the world's leading independent streaming service for television and movies. Starting today, viewers can tune in to enjoy a wide range of high-octane motorsports events, from Formula One and NASCAR to rally racing and more.</p>
        <br/>
        <p>Race Central TV is the longest running motorsports show in North America, offering a diverse lineup of programming that is sure to thrill fans of all kinds. With live races, behind-the-scenes footage and in-depth analysis, the channel provides a complete motorsports experience. In addition, viewers will have access to a rich archive of past races and events, allowing them to relive the excitement of their favorite moments.</p>
        <br/>
        <p>TV Universe is the leading streaming service for television and movies, offering a global distribution of a vast library of content that is easily accessible from anywhere in the world. With the addition of Race Central TV, the platform is now the go-to destination for motorsports fans, making it easier than ever to stay up-to-date with all the latest action.</p>
        <br/>
        <p>"We are thrilled to be adding Race Central TV to our lineup of top-quality programming," said Hugh Knight Robinson, CEO of TV Universe. "With its focus on motorsports, Race Central TV is a perfect addition to our platform, and we know that our users will love having access to all of the exciting events and races that the channel has to offer."</p>
        <br/>
        <p>
          Race Central TV is available now on TV Universe. For more information, visit:
          <br/>
          <a class="text-pink-500 hover:text-pink-700 active:text-pink-900" href="https://www.amazon.com/Crescent-Moon-Production-Entertainment-LLC/dp/B0BPTHNSZ6/ref=sr_1_1?keywords=TV+Universe&qid=1672071315&s=mobile-apps&sr=1-1" target="_blank">TV Universe Amazon</a>
          <br/>
          <a class="text-pink-500 hover:text-pink-700 active:text-pink-900" href="https://channelstore.roku.com/details/4ebe22ba985c12cbf34b187a7334058a/tv-universe" target="_blank">TV Universe Roku</a>
          <br/>
          <a class="text-pink-500 hover:text-pink-700 active:text-pink-900" href="https://play.google.com/store/apps/details?id=com.tvuniverse.tv&pli=1" target="_blank">TV Universe Google</a>
          <br/>
          <a class="text-pink-500 hover:text-pink-700 active:text-pink-900" href="https://www.racecentralmedia.com/podcast" target="_blank">Race Central Media TV Podcast</a>
        </p>
      `,
      published: "April 12, 2023"
    }
  ]

  return {
    props: {
      press_releases: press_releases.map(
        ({ title, body, published }) => ({
          title: `${title}`,
          published,
          body
        })
      )
    }, // will be passed to the page component as props
  }
}
