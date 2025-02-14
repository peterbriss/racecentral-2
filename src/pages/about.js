import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import Head from 'next/head'
import { SponsorsBanner } from '@/components/SponsorsBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          About Kurt Hansen&apos;s Race Central Media
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

          <div className="mt-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900">Kurt Hansen</h1>
            <p className="mt-4 text-gray-600">
              Whether behind the wheel or behind the microphone or in front of the Television Camera,
              Kurt Hansen is accustomed to the fast track. The California native and Denver resident has
              parlayed a two-decade career as a professional driver and team owner into an award-winning
              broadcast career, earning praise as one of the most knowledgeable and entertaining personalities
              in motor sports radio and television.
            </p>
            <p className="mt-4 text-gray-600">
              A 1982 graduate of the Jim Russell Racing School, Hansen was a member of the French Formula 3 AVIA team in 1986,
               and claimed both the West Coast Formula Atlantic and Pacific Coast Racing Championships in 1991. Hansen broke
               three qualifying lap records in Portland, Ore., Laguna Seca and Sears Point Raceway and competed professionally
               in the Champ Car World Series Toyota Atlantic Championship from 1991-93. After retiring as a Professional driver,
               Hansen continues to compete on many top near Professional Racing levels but saw broadcasting as another way to keep
               his competitive fires burning.
            </p>
            <blockquote className="italic font-semibold mt-4 text-gray-600">
              &ldquo;Having raced on many levels, I missed the driving aspect and saw broadcasting as a way back into the driver&apos;s seat.
              Racing is my passion and if I could not drive anymore, I wanted to get as close as I could get.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600">
              Hansen launched his broadcasting career in 2001 at KNBR 1050 in San Francisco as host of Race Central before moving
              the program in 2002 to Denver&apos;s ESPN Radio affiliate KLZ 560 and nationally on ESPN. He now be heard on the Rocky
              Mountain&apos;s ESPN Sports Radio Networks Friday and Sundays Mornings. Hansen could also be heard nationwide as motor
              sports correspondent for ESPN Radio&apos;s The V Show, heard on all 450 of the network&apos;s affiliates and as of April 2014
              on one of Arizona&apos;s top AM Stations, NBC Sports Radio every Monday Evening on the 50,000 watt Blow Torch. A recipient
              of the prestigious &lsquo;Telly&rsquo; Award, recognizing outstanding performance on a cable/satellite television program, Hansen
              has also enjoyed success in front of the camera. Hansen hosts a television version of Race Central seen nationally and
              internationally on no less that 15 Major Television Networks, Cable Outlets, Satellite, Verizon Fios as well as IPTV
              and Mobil Downloads, Video On Demand as well as two of the Hottest Digital Electronic Television and Mobil Platforms
              in existence, the Nation&apos;s newest cutting-edge network reaching over 410 Million US Homes, The Roku Channel and Amazon
              Prime Television Outlets. Race Central can also be seen on an additional 180 Million Homes on Free Digital &ldquo;over air&rdquo;
              Platforms on The Action Channel and on The Revin Network. Hansen also makes regular appearances on ESPN, Fox Sports and
              many other Networks for their racing coverage. Race Central&apos;s guest list is a &lsquo;Who&apos;s Who&rsquo; in auto racing, including the
              likes of, Mario Andretti, Patrick Dempsey, Adrian Brody, John Force and Danica Patrick, just to name a few, as well as
              numerous celebrities from sports and entertainment. Hansen credits his racing background for opening so many doors in
              his career and earning the respect of those in the racing industry.
            </p>
            <blockquote className="italic font-semibold mt-4 text-gray-600">
              &ldquo;I bring other-side-of-the-fence knowledge to my broadcasts because I&apos;ve done it and have tremendous respect for the
              sport and the people in it. I try to take that knowledge and combine energy and a little bit of an edge every time
              I&apos;m on the air.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600">
              With so many options for today&apos;s sports fan on radio, television and the Internet, Hansen strives to bring something
              unique to every broadcast.
            </p>
            <blockquote className="italic font-semibold mt-4 text-gray-600">
              &ldquo;I never want to say something on the air that makes a listener or viewer say &lsquo;So what?&rsquo; I always want to leave them
              wanting more and thinking, &lsquo;I didn&apos;t know that!&rsquo;&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600">
              The world&apos;s racetracks are not the only places that cater to Hansen&apos;s love of speed - he is also an accomplished skier.
              Hansen was a nationally-ranked alpine racer in the 1970&apos;s and attended training camps with the U.S. Ski Team in South
              America. When not racing on four wheels or two skis, Hansen has worked for over 20 years in the collectible car business,
              buying, selling and restoring high-end and exotic vehicles. A wealth of life experiences has helped Hansen as a
              broadcaster.
            </p>
            <blockquote className="italic font-semibold mt-4 text-gray-600">
              &ldquo;I can do radio, television, track announcing... I am confident I can do it all because I feel I have done it all.&rdquo;
            </blockquote>
          </div>

          <div className="mt-4 max-w-2xl mx-auto">
            <h2 className="font-bold my-2  text-gray-900">Kurt Hansen - Driver</h2>
            <ul className="">
              <li>French Formula 3 AVIA Team - 1986</li>
              <li>West Coast Formula Atlantic Champion - 1991</li>
              <li>Pacific Coast Racing Champion - 1991</li>
              <li>Set three National qualifying lap records - Portland, Laguna Seca, Sears Point.</li>
              <li>Track record-holder at Motor Sports Park Hastings (NE) - 2007</li>
              <li>Toyota Atlantic Championship driver - 1991-93</li>
              <li>Skip Barber Racing School Instructor - 1996</li>
              <li>Raced in the Score Baja 1000 - 2004</li>
              <li>Member - Pikes Peak International Hill Climb Board of Directors</li>
              <li>Member - Colorado Motorsports Hall of Fame Board of Directors  & Selection Committee</li>
              <li>Competed in 2004 Baja 1000 on the Centrix Financial Team with Paul Newman, Rod Millen and Bob Sutton</li>
            </ul>
            <h2 className="font-bold my-2  text-gray-900">Kurt Hansen - Broadcaster</h2>
            <ul className="">
              <li>Received &lsquo;Telly&rsquo; Award for work as network host for 2007 Champ Car Karting Nationals</li>
              <li>Host of Race Central - KNBR 1050, San Francisco</li>
              <li>Host of Race Central - Sporting News Radio AM 1510 Denver</li>
              <li>Host of Race Central - Altitude Sports & Entertainment</li>
              <li>Host of Race Central - MavTV -Global TV Networks</li>
              <li>Host for Altitude Sports 1on1 interviews with sports personalities</li>
              <li>Correspondent - The V Show, ESPN Radio.</li>
              <li>Network TV host for Pike&rsquo;s Peak International Hill Climb on Speed TV and ESPN2 - world&rsquo;s 2nd-oldest road race</li>
              <li>Reporter - ESPN2, Speed TV, Outdoor Channel</li>
              <li>ESPN Zone 2day television show</li>
              <li>Announcer - Champ Car World Series Grand Prix of Houston and Denver</li>
              <li>NASCAR Announcer- Colorado National Speedway</li>
              <li>Co-Host of the Sports Summit Show on Altitude Sports & Entertainment Network</li>
              <li>Member - Executive Board of Directors - Pro Players Association</li>
              <li>Host NFL Broncos Pre-Game Show - Sprtn News radio</li>
            </ul>
          </div>
        </Container>
        <SponsorsBanner />
      </div>
    </>
  )
}
