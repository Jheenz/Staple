import React from 'react'
import Link from 'next/link';
import localFont from 'next/font/local';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const staple = localFont({
  src: '../../public/media/Bodoni.otf',
  variable: '--font-staple',
});

const navbar = () => {
  return (
    <div className='bg-black/20 fixed top-0 left-0 w-full z-20'>
      <div className='max-w-[1400px] w-full mx-auto px-8 py-4 flex justify-between items-center text-white'>
        <div className='menu-logo font-semibold'>
          <Link href="/" className={`${staple.className} text-4xl md:text-5xl font-extralight`}>STAPLE</Link>
        </div>
        <div className="menu-open hidden md:block">
          <ul className='flex items-center h-full text-xl font-["Outfit"] [&>li>a]:py-7 [&>li>a]:px-6 [&>li>a]:transition-colors [&>li>a:hover]:bg-black/80'>
            <li><Link href="/about">Home</Link></li>
            <li><Link href="/services">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
          <button className='block md:hidden'>
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        <div className="fixed hidden top-0 right-0 h-dvh w-full sm:w-[250px] z-20 shadow-lg bg-black/10 backdrop-blur-xl">
          <div className='p-6 flex justify-between items-center'>
            <Link href="/" className={`${staple.className} text-4xl md:text-5xl font-extralight`}>STAPLE</Link>
            <button>
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* optimized: make each anchor a block that fills the container so hover covers full width */}
          <ul
            className='list-none w-full flex flex-col justify-center items-start text-xl font-["Outfit"]
                       [&>li>a]:block [&>li>a]:w-[250px] [&>li>a]:px-6 [&>li>a]:py-4
                       [&>li>a]:transition-colors [&>li>a:hover]:bg-black/80'
          >
            <li><Link href="/about">Home</Link></li>
            <li><Link href="/services">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar