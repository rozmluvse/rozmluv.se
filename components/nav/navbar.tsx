'use client'

import Link from 'next/link'
import LanguageSelector from './language-selector'
import { Menu } from './menu'
import { useMenu } from '@/store/use-menu'
import { Container } from '../container'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { useLanguage } from '@/store/use-language'
import { useState } from 'react'
import { BlogSearch } from '../blog-search'
import { AnimatePresence } from 'framer-motion'

interface Props {
  posts: any
}

export const Navbar = ({ posts }: Props) => {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { isMenuOpen, openMenu } = useMenu()

  const [isSearchOpen, setSearchOpen] = useState(false)

  const blog = pathname.includes('/blog')

  return (
    <nav className='fixed top-0 z-[1000] w-full bg-white py-4'>
      <Container>
        <div className='flex items-end justify-between'>
          <Link
            href='/#home'
            className='ffs-12 place-self-center text-2xl md:text-3xl lg:text-4xl'
          >
            rozmluv se
          </Link>
          <div className='flex items-center gap-2 pt-1 text-sm sm:gap-3 sm:text-base md:gap-6'>
            {blog ? (
              <button
                className='inline-flex items-center gap-1 font-stabil'
                onClick={() => setSearchOpen((prev) => !prev)}
              >
                <Search size={15} />
                {language === 'cz' && 'Hledat'}
                {language === 'en' && 'Search'}
                {language === 'de' && '!TEXT!'}
                {language === 'ua' && '!TEXT!'}
              </button>
            ) : (
              <>
                <Link
                  href='https://eshop.rozmluv.se/p/prvn-3-d-ly-kurzu-zdarma-pendler-tina-pro-nov-ky-rozmluv-se-n-mecky-rowm9qp1m'
                  target='_blank'
                  className='font-stabil'
                >
                  ZDARMA
                </Link>
                <Link
                  href='https://linktr.ee/rozmluv.se'
                  target='_blank'
                  className='font-stabil'
                >
                  Aktuality
                </Link>
                <div className='hidden items-center gap-3 lg:flex xl:gap-4'>
                  <Link href='/#languages' className='font-stabil'>
                    {language === 'cz' && 'Jazyky'}
                    {language === 'en' && 'Languages'}
                    {language === 'de' && 'Sprachen'}
                    {language === 'ua' && 'Мови'}
                  </Link>
                  <Link href='/#pricelist' className='font-stabil'>
                    {language === 'cz' && 'Ceník'}
                    {language === 'en' && 'Pricelist'}
                    {language === 'de' && 'Preisliste'}
                    {language === 'ua' && 'Прайслист'}
                  </Link>
                  <Link href='/#contact' className='font-stabil'>
                    {language === 'cz' && 'Kontakt'}
                    {language === 'en' && 'Contact'}
                    {language === 'de' && 'Kontakt'}
                    {language === 'ua' && 'Контакт'}
                  </Link>
                  <Link href='/blog' className='hidden font-stabil xl:inline-flex'>
                    Blog
                  </Link>
                </div>
              </>
            )}
            <LanguageSelector color='black' />
            <Button
              variant='ghost'
              onClick={() => openMenu()}
              className='m-0 p-0 font-stabil hover:bg-transparent sm:!text-base'
            >
              Menu
            </Button>
          </div>
        </div>

        <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
        {isSearchOpen && blog && <BlogSearch posts={posts} />}
      </Container>
    </nav>
  )
}
