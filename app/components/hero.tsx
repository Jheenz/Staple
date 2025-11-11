'use client';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Hero = () => {
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const prevOverflow = useRef<{ html: string; body: string } | null>(null);

    useEffect(() => {
        prevOverflow.current = {
          html: document.documentElement.style.overflow,
          body: document.body.style.overflow,
        };
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        const enableScroll = () => {
          if (prevOverflow.current) {
            document.documentElement.style.overflow = prevOverflow.current.html || '';
            document.body.style.overflow = prevOverflow.current.body || '';
            prevOverflow.current = null;
          } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
          }
        };

        timeline.current = gsap.timeline({ paused: true });
        timeline.current.to(".title", {
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power4.Out",
        });

        const video = videoRef.current;
        if (!video) {
          enableScroll();
          timeline.current?.play();
          return;
        }

        const onCanPlayThrough = () => {
          timeline.current?.play();
          enableScroll();
        };

        // fallback: if event doesn't fire, start after 1s and enable scroll
        const fallback = window.setTimeout(() => {
          if (timeline.current?.paused()) timeline.current.play();
          enableScroll();
        }, 1000);

        video.addEventListener('canplaythrough', onCanPlayThrough, { once: true });
        video.addEventListener('loadeddata', onCanPlayThrough, { once: true });

        return () => {
          video.removeEventListener('canplaythrough', onCanPlayThrough);
          video.removeEventListener('loadeddata', onCanPlayThrough);
          clearTimeout(fallback);

          enableScroll();
          timeline.current?.kill();
          timeline.current = null;
        };
    }, []);


  return (
    <section id='home' className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
        <video
        className='absolute inset-0 w-full h-full object-cover'
        ref={videoRef}
        src='/media/Hero.mp4'
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        />
        <div className='absolute bottom-5 right-5 cursor-pointer z-10'>
            <Link href="https://www.facebook.com/reel/380508814425137" title='Watch Video' target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-2xl hover:text-theme-color transition-colors duration-300'/></Link>
        </div>

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
                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)'}}>
                    <p className="title text-sm sm:text-lg text-white/80 max-w-2xl translate-y-[125px]">
                        It&apos;s more than a cup of coffee - it&apos;s about the companionship we built into every cup. It&apos;s always a good cup with good companions!
                    </p>
                </div>
                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                    <div className="title translate-y-[125px]">
                        <Button href="https://www.google.com/maps/dir/?api=1&destination=Staple+Coffee" target='_blank' variant="primary">
                            <span className='flex items-center font-["Roboto"]'>Visit Us <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero;