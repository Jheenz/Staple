'use client';
import Image from 'next/image';
import ShowcaseImage1 from '../../public/case1.png';
import ShowcaseImage2 from '../../public/case2.png';
import ShowcaseImage3 from '../../public/case3.png';
import ShowcaseImage4 from '../../public/case4.png';
import SipsImage from '../../public/sips.png';

const Showcase = () => {
    return (
        <section id="showcase" className="w-full bg-gray-100 flex items-center justify-center">
            <div className="max-w-[1400px] w-full">
                <div className="flex flex-col items-center text-center gap-4 py-16 px-4 md:px-0">
                    <h2 className="text-[min(8vw,5rem)] text-theme-color font-['Outfit'] font-black mb-4">BREW. PAIR. ENJOY.</h2>

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
                <div className='bg-theme-color rounded-4xl m-8 xl:m-0 overflow-hidden'>
                    <div className='relative w-full h-128 md:h-196 p-8 py-24 md:py-8 my-4 md:my-10 flex items-center justify-center text-white'>
                        <div className='relative w-full max-w-96 h-full max-h-128 m-8 md:m-0'>
                            <h2 className='absolute -top-[min(8vh,4rem)] -left-[min(8vw,4rem)] font-["Outfit"] font-black text-[min(8vw,4rem)] leading-[min(8vw,4rem)] z-10'>
                                SIPS WORTH<br />SHARING
                            </h2>
                            <Image src={SipsImage} alt="SipsImage" fill className="object-cover rounded-4xl" />
                            <div className='absolute -bottom-[min(8vw,4rem)] -right-[min(8vw,4rem)] bg-black/20 backdrop-blur-2xl rounded-xl p-6 max-w-sm text-left ml-8 sm:ml-0'>
                                <p className='text-sm sm:text-[min(8vw,1.5rem)] font-["Outfit"] uppercase'>Because a great coffee isn&apos;t just a drink - it&apos;s a shared experience.</p>
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