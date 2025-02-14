import { useMemo, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SponsorsBanner } from '@/components/SponsorsBanner'

// import { episodesRepo } from '@/helpers/episodes-repo'

export default function Home({ episodes }) {
  return (
    <>
      <Head>
        <title>
          Kurt Hansen&apos; s Race Central Media Radio - Radio conversations with
          professional racers.
        </title>
        <meta
          name="description"
          content="Radio conversations with professional racers."
        />
      </Head>
      <div className="pt-6 pb-12 sm:pb-6 lg:pt-12">
        <Container>
          <Navigation />
        </Container>
        <SponsorsBanner />
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          {episodes.map((episode) => (
            <EpisodeEntry key={episode.title} episode={episode} />
          ))}
          {episodes.length === 0 && (
            <div className="pt-16 pb-12 text-center sm:pb-4 lg:pt-12">
              <button
                className="rounded-full bg-slate-100 py-2 px-4 font-bold text-slate-900 hover:bg-slate-200"
                onClick={reloadEpisodes}
              >
                Reload
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function EpisodeEntry({ episode }) {
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
    <article
      aria-labelledby={`radio-${encodeURIComponent(episode.title)}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`radio-${encodeURIComponent(episode.title)}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <Link href={`/radio/${encodeURIComponent(episode.title)}`}>
              {episode.title}
            </Link>
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
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            >
              <span className="sr-only">
                {player.playing ? 'Pause' : 'Play'}
                episode {episode.title}
              </span>
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                {player.playing ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
                  />
                ) : (
                  <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
                )}
              </svg>

              <span className="ml-3" aria-hidden="true">
                Listen
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              href={`/radio/${episode.title}`}
            >
                Show notes
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

async function reloadEpisodes() {
  const feed = await parse(
    'https://www.omnycontent.com/d/playlist/61af0f78-644a-4500-9792-a89500ea78e5/04154e08-3c85-4474-bdad-a9850133fca2/31a0d8c9-7f2e-4979-a136-a98501342dfe/podcast.rss'
  )

  await fetch('/api/episodes/importAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feed.items),
  })
}

// export async function getStaticProps() {
//   let episodes = await episodesRepo.getAll()
//   episodes.sort((a, b) => b.published - a.published)

//   return {
//     props: {
//       episodes: episodes.slice(0, 99).map(
//         ({ title, description, enclosures, published }) => ({
//           title: `${title}`,
//           published,
//           description,
//           audio: enclosures.map((enclosure) => ({
//             src: enclosure.url,
//             type: enclosure.type,
//           }))[0],
//         })
//       ),
//     },
//     revalidate: 10,
//   }
// }

export async function getServerSideProps(context) {
  let feed = await parse('https://www.omnycontent.com/d/playlist/61af0f78-644a-4500-9792-a89500ea78e5/04154e08-3c85-4474-bdad-a9850133fca2/31a0d8c9-7f2e-4979-a136-a98501342dfe/podcast.rss')
  let episodes = feed.items

  return {
    props: {
      episodes: episodes.map(
        ({ title, description, enclosures, published }) => ({
          title: `${title}`,
          published,
          description,
          audio: enclosures.map((enclosure) => ({
            src: enclosure.url,
            type: enclosure.type,
          }))[0],
        })
      ),
    },
  }
}
