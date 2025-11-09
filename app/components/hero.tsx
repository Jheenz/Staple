import React from 'react'
import Button from './Button';

const Hero = () => {
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
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white text-shadow-lg uppercase">
                A hidden cafe in the <br /><span className="text-theme-color">Athens</span> of Pampanga.
                </h1>
                <p className="text-md sm:text-lg text-white/80 max-w-2xl">
                It's more than a cup of coffee - it's about the companionship we built into every cup. It's always a good cup with good companions!
                </p>
                <div>
                    <Button href="#" variant="primary" size="md">
                        Instagram
                    </Button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero;