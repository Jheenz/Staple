import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                <h1 className="text-[min(8vw,5rem)] leading-[min(8vw,5rem)] font-extrabold text-white text-shadow-lg uppercase">
                    A hidden cafe in the <br className="hidden md:block" />
                    <span className="text-theme-color">Athens</span> of Pampanga.
                </h1>
                <p className="text-sm sm:text-lg text-white/80 max-w-2xl">
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