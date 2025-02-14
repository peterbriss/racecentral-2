import Link from 'next/link'
import { useRouter } from 'next/router'
import SocialBar from '@/components/SocialBar'

export function Navigation({ ...props }) {
  const inactiveClassNames =
    'text-pink-500 hover:text-pink-700 active:text-pink-900'
  const router = useRouter()

  function isActiveClassNames(route) {
    return route === router.pathname ? '' : inactiveClassNames
  }

  return (
    <>
      <section className="items-left flex">
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900 after:ml-2 after:text-slate-200 after:content-['/']">
          <Link className={isActiveClassNames('/podcast')} href="/podcast">
            Podcast
          </Link>
        </h1>
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900 after:ml-2 after:text-slate-200 after:content-['/']">
          <Link className={isActiveClassNames('/')}  href="/">
            Radio
          </Link>
        </h1>
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900 after:ml-2 after:text-slate-200 after:content-['/']">
          <Link className={isActiveClassNames('/tv')} href="/tv">
            TV
          </Link>
        </h1>
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900 after:ml-2 after:text-slate-200 after:content-['/']">
          <Link className={isActiveClassNames('/news')} href="/news">
            News
          </Link>
        </h1>
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900 after:ml-2 after:text-slate-200 after:content-['/']">
          <Link className={isActiveClassNames('/press')} href="/press">
            Press
          </Link>
        </h1>
        <h1 className="mr-2 text-l font-bold leading-6 text-slate-900">
          <Link className={isActiveClassNames('/about')} href="/about">
            About
          </Link>
        </h1>
      </section>
      <section className="mt-4">
        <SocialBar />
      </section>
    </>
  )
}
