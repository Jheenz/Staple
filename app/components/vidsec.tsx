'use client';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#videosec",
            start: "top 65%",
        }
    });
    tl.to(".videosec-item", {
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
    })
    tl.to(".vidtitle", {
        y: 0,
        duration: 0.6,
        stagger: 0.5,
        ease: "power4.Out",
    }, '-=0.3');

}, []);

    return (
        <section id="videosec" className="w-full bg-white flex items-center justify-center">
            <div className="max-w-[1400px] w-full py-16">
                <div className='w-full h-full flex flex-col lg:flex-row items-center p-8 xl:p-0'>
                    <div className="videosec-item lg:w-[70%] rounded-4xl overflow-hidden scale-75">
                    <video
                        className='w-full h-full object-cover'
                        src="/media/ComeOn.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                    />
                    </div>
                    <div className="lg:w-[30%] lg:p-8 py-4 lg:py-0 flex flex-col gap-4">
                        <div>
                            <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                                <h1 className='vidtitle text-black text-6xl font-["Outfit"] font-bold translate-y-[125px]'>COME ON IN</h1>
                            </div>
                            <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                                <h1 className='vidtitle text-black text-6xl font-["Outfit"] font-bold translate-y-[125px]'>& <span className="text-theme-color">DRINK UP</span></h1>
                            </div>
                        </div>
                        <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                            <p className="vidtitle font-['Outfit'] text-black text-md translate-y-[200px]">
                                Join us for a refreshing drink and a good time! Enjoy handcrafted cocktails, a rotating selection of local beers, and thoughtful non-alcoholic options. Relax in our cozy atmosphere, catch live music on weekends, and take advantage of weekly specials — perfect for catching up with friends or making new ones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;