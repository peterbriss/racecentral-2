import SocialIcons from '@/components/SocialIcons'

export default function SocialBar() {
  return (
    <div className="text-gray-333 font-open-sans flex w-full items-center justify-between text-sm">
      <div className="block">
        {/* <Phone /> */}
        {/* <Email /> */}
        <SocialIcons />
      </div>
    </div>
  )
}
