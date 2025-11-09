import React from 'react'
import Link from 'next/link';
import localFont from 'next/font/local';

const staple = localFont({
  src: '../../public/media/Bodoni.otf',
  variable: '--font-staple',
});

const navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-10 bg-linear-to-b from-[#0c0c0cee] to-transparent'>
      <div className='max-w-[1400px] w-full mx-auto px-8 py-6 flex justify-between items-center text-white'>
        <div className='menu-logo font-semibold'>
          <Link href="/" className={`${staple.className} text-5xl font-extralight`}>STAPLE</Link>
        </div>
        <div className="menu-open cursor-pointer uppercase">
          <p className='nav'>Menu</p>
        </div>
      </div>
    </div>
  )
}

export default navbar