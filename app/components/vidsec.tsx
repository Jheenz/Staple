'use client';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
useEffect(() => {
    
    const trigger = {
        trigger: "#videosec",
        start: "top 50%",
    }
    gsap.to(".videosec-item", {
        scrollTrigger: trigger,
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
    });

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
                        <h2 className="font-['Outfit'] font-bold text-black text-4xl md:text-6xl">COME ON IN<br />& <span className="text-theme-color">DRINK UP</span></h2>
                        <p className="font-['Outfit'] text-black text-md">
                            Join us for a refreshing drink and a good time! Enjoy handcrafted cocktails, a rotating selection of local beers, and thoughtful non-alcoholic options. Relax in our cozy atmosphere, catch live music on weekends, and take advantage of weekly specials — perfect for catching up with friends or making new ones.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;