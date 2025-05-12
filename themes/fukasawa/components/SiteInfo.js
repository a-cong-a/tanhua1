import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'

function SiteInfo({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative leading-6 justify-start w-full text-gray-600 dark:text-gray-300 text-xs '>
    </footer>
  )
}
export default SiteInfo
