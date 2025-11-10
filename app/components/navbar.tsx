'use client';
import Link from 'next/link';
import localFont from 'next/font/local';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const staple = localFont({
  src: '../../public/media/Bodoni.otf',
  variable: '--font-staple',
});

const Navbar = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!overlayRef.current) return
    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, {
        duration: 0.45,
        x: '0%',
        ease: 'power4.out',
      })

    // cleanup
    return () => {
      tl.current?.kill()
      tl.current = null
    }
   }, []);

  useEffect(() => {
    if (tl.current) {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }
  }, [isMenuOpen]);

  useEffect(() => {
        gsap.to('.menu-bar', {
        y: 0,
        duration: 1,
        ease: "power4.Out",
    });
  }, []);

  const onHashClick = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = hash.replace('#', '')
    const el = document.getElementById(id) || document.querySelector(hash)
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
      // update URL hash without jumping
      history.replaceState(null, '', `#${id}`)
    } else {
      // fallback (navigates if section not on current page)
      window.location.href = hash
    }
  }
  return (
    <div className='menu-bar bg-black/30 fixed top-0 left-0 w-full z-20 -translate-y-20'>
      <div className='max-w-[1400px] w-full mx-auto px-8 py-4 flex justify-between items-center text-white'>
        <div className='menu-logo font-semibold'>
          <Link href="/" className={`${staple.className} text-4xl md:text-5xl font-extralight`}>STAPLE</Link>
        </div>
        <div className="menu-open hidden md:block">
          <ul className='flex items-center h-full text-xl font-["Outfit"] [&>li>a]:py-7 [&>li>a]:px-6 [&>li>a]:transition-colors [&>li>a:hover]:bg-black/80'>
            <li><Link href="#home" onClick={onHashClick('#home')}>Home</Link></li>
            <li><Link href="#about" onClick={onHashClick('#about')}>About</Link></li>
            <li><Link href="#contact" onClick={onHashClick('#contact')}>Socials</Link></li>
          </ul>
        </div>
          <button className='block md:hidden cursor-pointer' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl"/>
          </button>
          {/* Sidebar */}
        <div ref={overlayRef} className="fixed top-0 right-0 h-dvh w-full sm:w-[250px] z-20 shadow-lg bg-black/10 backdrop-blur-xl translate-x-256">
          <div className='p-6 flex justify-between items-center'>
            <Link href="/" className={`${staple.className} text-4xl md:text-5xl font-extralight`}>STAPLE</Link>
            <button className='cursor-pointer' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} className="text-2xl hover:rotate-90 transition-transform duration-300"/>
            </button>
          </div>

          {/* optimized: make each anchor a block that fills the container so hover covers full width */}
            <ul
            className='list-none w-full flex flex-col justify-center items-start text-xl font-["Outfit"]
                   [&>li]:w-full [&>li>a]:block [&>li>a]:w-full [&>li>a]:px-6 [&>li>a]:py-4
                   [&>li>a]:transition-colors [&>li>a:hover]:bg-black/80'
            >
            <li><Link href="#home" onClick={onHashClick('#home')} className="block w-full">Home</Link></li>
            <li><Link href="#about" onClick={onHashClick('#about')} className="block w-full">About</Link></li>
            <li><Link href="#contact" onClick={onHashClick('#contact')} className="block w-full">Contact</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar