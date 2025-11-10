import Image from 'next/image';
import AboutImage from '../../public/About.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id='about' className='relative w-full h-screen overflow-hidden bg-white flex items-center justify-center'>
        <div className='h-[580px] lg:h-screen max-w-[1400px] w-full flex justify-center items-center px-4'>
            <div className="border border-black p-4 max-w-[1000px] w-full">
                <div className="flex flex-col md:flex-row gap-4 min-h-[600px]">
                    <div className="flex-1 flex items-start">
                        <p className="text-[min(8vw,2.8rem)] leading-[min(8vw,3.1rem)] font-['Outfit'] text-theme-color">
                            At &quot;Staple Coffee&quot;, we believe that coffee is more than just a beverage; it&apos;s an experience that brings people together
                        </p>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="flex justify-between text-theme-color w-full">
                            <p>Watch a video about Steady Sips</p>
                            <span>0:56</span>
                        </div>
                        <div className="w-full h-80 md:w-100 md:h-100 lg:w-120 lg:h-120 relative self-end">
                            <Image src={AboutImage} alt="IMG" fill className="object-cover" />
                            <a href="https://www.facebook.com/reel/1304251573996613" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black opacity-20 hover:opacity-50 duration-300 flex items-center justify-center cursor-pointer">
                                <FontAwesomeIcon icon={faPlay} className='text-6xl'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;