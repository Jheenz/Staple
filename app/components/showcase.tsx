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
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 w-full showcase-grid py-4">
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
                <div className='bg-theme-color rounded-xl'>
                    <div className='relative w-full h-60 md:h-120 p-4 flex items-center justify-center text-white'>
                        <h2 className='font-["Outfit"] font-black text-5xl'>SIPS WORTH<br />SHARING</h2>
                        <Image src={SipsImage} alt="SipsImage" fill className="object-cover" />
                        <div>

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