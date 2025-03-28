import Image from 'next/legacy/image'
import Link from 'next/link'
import Router from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

import sponsor1 from '@/images/sponsors/Winter wine and spirit logo.png'
import sponsor2 from '@/images/sponsors/coyote storefront.jpg'
import sponsor3 from '@/images/sponsors/Colpar2-Logo-NEW.webp'
import sponsor4 from '@/images/sponsors/northstar-liquor.png'
import sponsor5 from '@/images/sponsors/dents-by-hand-logo-lrg-xtr-white.png'
import sponsor6 from '@/images/sponsors/asian-cajun-front.png'
import sponsor7 from '@/images/sponsors/asian-cajun-rear.png'
import sponsor8 from '@/images/sponsors/euro-werkz.jpg'
import sponsor9 from '@/images/sponsors/innovative-cold-therapy.png'
import sponsor10 from '@/images/sponsors/revilitlized-health.jpg'

export function SponsorsBanner({ className, children, ...props }) {
  useEffect(() => {
    Router.events.on(
      'routeChangeComplete',
      (path) => {
        const script = document.createElement('script')

        script.src =
          '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js'
        script.async = true
        script.defer = true

        document.body.appendChild(script)

        return () => document.body.removeChild(script)
      },
      [Router]
    )
  })

  return (
    <>
      <div className="bg-yellow-200 text-center">Sponsored By</div>
      <div
        className="relative w-full"
        data-carousel="slide"
        id="default-carousel"
      >
        <div className="relative h-52 w-full overflow-hidden md:h-72 lg:h-96">
          <div
            className="hidden bg-yellow-200 duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="grid grid-cols-2 ">
              <Link
                className="px-2 pb-2"
                target="_blank"
                href="https://coyotemotorsports.com/"
              >
                <Image
                  alt="Sponsored by Coyote Motorsports"
                  id="sponsor-2"
                  layout="responsive"
                  height="400"
                  src={sponsor2}
                />
              </Link>
              <Link
                className="px-2 pb-2"
                target="_blank"
                href="https://www.hobbytown.com/aurora-co/l45"
              >
                <Image
                  alt="Sponsored by Colpar's Hobby Town"
                  id="sponsor-3"
                  layout="responsive"
                  height="450"
                  src={sponsor3}
                />
              </Link>
            </div>
          </div>
          <div
            className="hidden bg-yellow-200 duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="grid bg-yellow-200 px-2 pb-2">
              <Link
                className="px-2 pb-2"
                target="_blank"
                href="https://www.eurowerkzmotorsport.com/"
              >
                <Image
                  alt="EuroWerkz Motorsport"
                  id="sponsor-8"
                  layout="responsive"
                  height="5000"
                  src={sponsor8}
                />
              </Link>
            </div>
          </div>
          <div
            className="hidden bg-yellow-200 duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="grid bg-yellow-200 px-2 pb-2">
              <Link
                className="px-2 pb-2"
                target="_blank"
                href="https://iceboxtherapy.com/westminster-co/"
              >
                <Image
                  alt="Innovative Cold Therapy"
                  id="sponsor-9"
                  layout="responsive"
                  height="600"
                  src={sponsor9}
                />
              </Link>
            </div>
          </div>
          <div
            className="hidden bg-yellow-200 duration-700 ease-in-out"
            data-carousel-item
          >
            <div className="grid bg-yellow-200 px-2 pb-2">
              <Link
                className="px-2 pb-2"
                target="_blank"
                href="https://www.revitalized-health.com/"
              >
                <Image
                  alt="Revilitlized Health"
                  id="sponsor-10"
                  layout="responsive"
                  height="450"
                  src={sponsor10}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Script
        id="signup_ctct_m"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _ctct_m = "5d589eff4ed9f50766fe09f72a669059";
          `,
        }}
      />
      <div
        className="ctct-inline-form"
        data-form-id="e86beda0-8f69-4d7d-acc3-517204cc3902"
      ></div>
    </>
  )
}
