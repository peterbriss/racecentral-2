import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function News({ articles }) {
  return (
    <>
      <Head>
        <title>
          Kurt Hansen&apos;s Race Central Media News Feed
        </title>
        <meta
          name="description"
          content="News from around the motor sports world."
        />
      </Head>
      <div className="pt-6 pb-12 sm:pb-6 lg:pt-12">
        <Container>
          <Navigation />
        </Container>
        <SponsorsBanner />
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          {articles.map((article) => (
            <ArticleEntry key={article.title} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

function ArticleEntry({ article }) {
  let date = new Date(article.published)

  return (
    <article
      aria-labelledby={`article-${encodeURIComponent(article.title)}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`article-${encodeURIComponent(article.title)}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            {article.title}
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
            dangerouslySetInnerHTML={{ __html: article.description }}
          />
          <div className="mt-4 flex items-center gap-4">
            <span>Category: { article.category }</span>
            <Link className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              href={article.link}
              target="_blank"
            >
              Read More
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export async function getServerSideProps(context) {
  let feed = await parse('https://www.motorsport.com/rss/all/news/')
  let articles = feed.items

  return {
    props: {
      articles: articles.map(
        ({ title, category, description, link, published }) => ({
          title: `${title}`,
          published,
          category,
          description,
          link
        })
      ),
    }, // will be passed to the page component as props
  }
}
