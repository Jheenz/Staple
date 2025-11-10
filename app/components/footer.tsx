'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Footer = () => {
    const [localTime, setLocalTime] = useState<string>(() => new Date().toLocaleTimeString());
    const [currentYear] = useState<string>(() => new Date().getFullYear().toString());

    useEffect(() => {
        const timer = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <footer id="contact" className="w-full bg-linear-to-r from-theme-color to-black text-white">
            <div className="max-w-[1400px] mx-auto px-8 xl:px-0 py-16">
                <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-['Outfit'] font-bold text-5xl">Follow Us!</h2>
                        <div className="flex gap-8">
                            <Link
                            href="https://www.facebook.com/100088484048377"
                            target="_blank"
                            aria-label="Staple on Facebook"
                            className="text-white hover:scale-125 transition-transform duration-300 text-[48px]"
                            >
                            <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
                            </Link>
                            <Link
                            href="https://www.instagram.com/staplecoffee.ph"
                            target="_blank"
                            aria-label="Staple on Instagram"
                            className="text-white hover:scale-125 transition-transform duration-300 text-[50px]"
                            >
                            <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-2xl font-extrabold font-['Outfit']">Get cozy here and match it with a cup!</p>
                        <p className="text-md font-light font-['Roboto']">“Staple Coffee” Cabambangan (Pob.), Bacolor, Pampanga.</p>
                    </div>
                    <div className="flex gap-4">
                    <Button href="https://www.google.com/maps/dir/?api=1&destination=Staple+Coffee" target='_blank' variant="primary">
                        <span className='flex items-center font-["Roboto"]'>Visit Us <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" /></span>
                    </Button>
                    </div>
                </div>
            </div>
             <div className="max-w-[1400px] mx-auto flex justify-between px-8 xl:px-0 pb-4">
                <div>
                    <span className="text-neutral-400 font-medium">Version</span>
                <p className="text-sm font-extralight mt-2">
                    &copy;{currentYear ? currentYear : ''} JHENSLEE ARCE
                </p>
                </div>
                <div>
                    <span className="text-neutral-400 font-medium">Local Time</span>
                    <p className="text-sm font-extralight mt-2">
                        {localTime ? localTime : ''}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;