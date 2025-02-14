import { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { PlayButton } from '@/components/player/PlayButton'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function Episode({ episode }) {
  console.log(episode)
  let date = new Date(episode.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/radio/${encodeURIComponent(episode.title)}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <>
      <Head>
        <title>{episode.title}</title>
        <meta name="description" content={episode.description} />
      </Head>
      <article className="py-16 lg:py-36">
        <Container>
          <Navigation />
          <header className="flex flex-col">
            <div className="flex items-center gap-6">
              <PlayButton player={player} size="large" />
              <div className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold text-slate-900">
                  {episode.title}
                </h1>
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
              </div>
            </div>
            <div
              className="prose prose-slate ml-24 mt-3 text-lg font-medium leading-8 text-slate-700"
              dangerouslySetInnerHTML={{ __html: episode.description }}
            />
          </header>
        </Container>
        <SponsorsBanner />
      </article>
    </>
  )
}

export async function getServerSideProps({ params }) {
  let feed = await parse('https://www.omnycontent.com/d/playlist/61af0f78-644a-4500-9792-a89500ea78e5/04154e08-3c85-4474-bdad-a9850133fca2/31a0d8c9-7f2e-4979-a136-a98501342dfe/podcast.rss')
  let episodes = feed.items

  let episode = episodes
    .map(({ title, description, content, enclosures, published }) => ({
      title: `${title}`,
      description,
      content,
      published,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }))
    .find(({ title }) => title === decodeURI(params.episode))

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episode: episode
    }
  }
}

// export async function getStaticProps({ params }) {
//   let feed = await parse('https://www.omnycontent.com/d/playlist/61af0f78-644a-4500-9792-a89500ea78e5/04154e08-3c85-4474-bdad-a9850133fca2/31a0d8c9-7f2e-4979-a136-a98501342dfe/podcast.rss')
//   let episodes = feed.items

//   let episode = episodes
//     .map(({ title, description, content, enclosures, published }) => ({
//       title: `${title}`,
//       description,
//       content,
//       published,
//       audio: enclosures.map((enclosure) => ({
//         src: enclosure.url,
//         type: enclosure.type,
//       }))[0],
//     }))
//     .find(({ title }) => title === decodeURI(params.episode))

//   if (!episode) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       episode,
//     },
//     revalidate: 10,
//   }
// }

// export async function getStaticPaths() {
//   let feed = await parse('https://www.omnycontent.com/d/playlist/61af0f78-644a-4500-9792-a89500ea78e5/04154e08-3c85-4474-bdad-a9850133fca2/31a0d8c9-7f2e-4979-a136-a98501342dfe/podcast.rss')
//   let episodes = feed.items

//   return {
//     paths: episodes.map(({ title }) => ({
//       params: {
//         episode: title.toString(),
//       },
//     })),
//     fallback: 'blocking',
//   }
// }
