'use client';
import Image from 'next/image';
import ShowcaseImage1 from '../../public/case1.png';
import ShowcaseImage2 from '../../public/case2.png';
import ShowcaseImage3 from '../../public/case3.png';
import ShowcaseImage4 from '../../public/case4.png';
import SipsImage from '../../public/sips.png';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Showcase = () => {
useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#showcase",
            start: "top 60%",
        }
    });
    const textSplit = SplitText.create(".showtitle", { type: "lines, words", linesClass: "line" });
    const words = textSplit.words;

    tl.from(words, {
        duration: 0.6,
        opacity: 0,
        yPercent: 50,
        ease: "power",
        stagger: .50,
    });
}, []);

    return (
        <section id="showcase" className="w-full bg-gray-100 flex items-center justify-center pb-16">
            <div className="max-w-[1400px] w-full">
                <div className="flex flex-col items-center text-center gap-4 py-16 px-4 md:px-0">
                    <h2 className="showtitle text-[min(8vw,5rem)] text-theme-color font-['Outfit'] font-black mb-4">BREW. PAIR. ENJOY.</h2>

                    {/* grid wrapper: when hovering a .showcase-item, siblings will blur via the CSS below */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 w-full showcase-grid py-4 px-4 xl:px-0">
                        <div className="showcase-item relative w-full h-60 sm:h-80 md:h-100 overflow-hidden rounded-xl transition-transform duration-300 will-change-transform">
                            <Image src={ShowcaseImage1} alt="Showcase 1" fill className="object-cover" />
                        </div>
                        <div className="showcase-item relative w-full h-60 sm:h-80 md:h-100 overflow-hidden rounded-xl transition-transform duration-300 will-change-transform">
                            <Image src={ShowcaseImage2} alt="Showcase 2" fill className="object-cover" />
                        </div>
                        <div className="showcase-item relative w-full h-60 sm:h-80 md:h-100 overflow-hidden rounded-xl transition-transform duration-300 will-change-transform">
                            <Image src={ShowcaseImage3} alt="Showcase 3" fill className="object-cover" />
                        </div>
                        <div className="showcase-item relative w-full h-60 sm:h-80 md:h-100 overflow-hidden rounded-xl transition-transform duration-300 will-change-transform">
                            <Image src={ShowcaseImage4} alt="Showcase 4" fill className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='bg-theme-color rounded-4xl m-8 xl:m-0 md:w-1/2 overflow-hidden'>
                        <div className='relative w-full h-128 md:h-196 p-8 py-24 md:py-8 my-4 md:my-10 flex items-center justify-center text-white'>
                            <div className='relative w-full max-w-96 h-full max-h-128 m-8 md:m-0'>
                                <h2 className='absolute -top-[min(8vh,4rem)] -left-[min(8vw,4rem)] font-["Outfit"] font-black text-[min(8vw,4rem)] leading-[min(8vw,4rem)] z-10'>
                                    SIPS WORTH<br />SHARING
                                </h2>
                                <Image src={SipsImage} alt="SipsImage" fill className="object-cover rounded-4xl" />
                                <div className='absolute -bottom-[min(8vw,4rem)] -right-[min(8vw,4rem)] bg-black/20 backdrop-blur-xs rounded-xl p-6 max-w-sm text-left ml-8 sm:ml-0'>
                                    <p className='text-sm sm:text-[min(8vw,1.5rem)] font-["Outfit"] uppercase'>Because a great coffee isn&apos;t just a drink - it&apos;s a shared experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 p-8'>
                        <h1 className='text-black text-6xl font-["Outfit"] font-bold pb-8'>Explore the Delightful <span className='text-theme-color'>Offerings</span></h1>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <h3 className='text-theme-color text-2xl font-["Outfit"] font-semibold'>Coffee:</h3>
                                <p className='text-black font-["Roboto"]'>Immerse yourself in the rich world of exceptional coffee crafted with precision and passion. Choose from our selection of single-origin delights or expertly blended brews, all available with the option of Oatside milk for a creamy and plant-based alternative.</p>
                            </div>
                            <div>
                                <h3 className='text-theme-color text-2xl font-["Outfit"] font-semibold'>Non Coffee:</h3>
                                <p className='text-black font-["Roboto"]'>For those who savor moments without the buzz of caffeine, our non-coffee offerings are a treat. Indulge in a selection of handcrafted teas, refreshing beverages, and delectable alternatives, ensuring there&apos;s something for every palate.</p>
                            </div>
                            <div>
                                <h3 className='text-theme-color text-2xl font-["Outfit"] font-semibold'>Pastries:</h3>
                                <p className='text-black font-["Roboto"]'>Elevate your coffee experience with our delectable range of freshly baked bread. From Grilled Cheese to Cookies, our bread selection complements the perfect cup, adding a delightful touch to your visit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* scoped styles: blur non-hovered items and scale hovered item */}
            <style jsx>{`
                .showcase-grid :global(.showcase-item) {
                  transform-origin: center;
                }

                /* blur siblings when any item is hovered */
                .showcase-grid:hover :global(.showcase-item:not(:hover)) :global(img) {
                  filter: blur(4px) brightness(0.9);
                  transform: scale(0.95);
                  transition: filter 300ms ease, transform 300ms ease;
                }

                /* scale hovered item slightly and raise above siblings */
                .showcase-grid :global(.showcase-item:hover) {
                  transform: scale(1.10);
                  filter: none;
                  transition: transform 350ms cubic-bezier(.2,.8,.2,1);
                }

                /* lift hovered container to avoid overlap clipping */
                .showcase-grid :global(.showcase-item:hover) {
                  z-index: 10;
                }
            `}</style>
        </section>
    )
}

export default Showcase;