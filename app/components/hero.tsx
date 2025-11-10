'use client';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const timeline = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        timeline.current = gsap.timeline();
        timeline.current.to(".title", {
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power4.Out",
        })
    }, []);

  return (
    <section id='home' className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
        <video
        className='absolute inset-0 w-full h-full object-cover'
        src='/media/Hero.mp4'
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className='h-[580px] lg:h-screen max-w-[1400px] w-full'>
            <div className="relative z-10 flex flex-col justify-center h-full px-4 gap-4">
                <div>
                    <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                        <h1 className="title text-[min(7vw,5rem)] leading-[min(7vw,5rem)] font-extrabold text-white text-shadow-lg uppercase whitespace-nowrap translate-y-[125px]">
                            A hidden cafe in the
                        </h1>
                    </div>
                    <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                        <h1 className="title text-[min(7vw,5rem)] leading-[min(7vw,5rem)] font-extrabold text-white text-shadow-lg uppercase whitespace-nowrap translate-y-[125px]">
                            <span className="text-theme-color">Athens</span> of Pampanga.
                        </h1>
                    </div>
                </div>
                <p className="title text-sm sm:text-lg text-white/80 max-w-2xl">
                It&apos;s more than a cup of coffee - it&apos;s about the companionship we built into every cup. It&apos;s always a good cup with good companions!
                </p>
                <div>
                    <Button href="https://www.google.com/maps/dir/?api=1&destination=Staple+Coffee" target='_blank' variant="primary">
                        <span className='flex items-center font-["Roboto"]'>Visit Us <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" /></span>
                    </Button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero;