import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer id="contact" className="w-full bg-linear-to-r from-theme-color to-black text-white py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-['Outfit'] font-bold text-5xl">Follow Us!</h2>
                        <div className="flex gap-8">
                            <Link
                            href="https://www.facebook.com/100088484048377"
                            target="_blank"
                            aria-label="Staple on Facebook"
                            className="text-white hover:scale-125 transition-transform duration-300"
                            >
                            <FontAwesomeIcon icon={faFacebook} className="w-14 h-14" aria-hidden="true" />
                            </Link>
                            <Link
                            href="https://www.instagram.com/staplecoffee.ph"
                            target="_blank"
                            aria-label="Staple on Facebook"
                            className="text-white hover:scale-125 transition-transform duration-300"
                            >
                            <FontAwesomeIcon icon={faInstagram} className="w-16 h-16" aria-hidden="true" />
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
        </footer>
    )
}

export default Footer;