import { FadeIn } from "./effect/fadeIn"
import assets from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        // footer
        <FadeIn className="w-full py-20 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
            {/* logo - socials */}
            <div className="w-full h-full flex flex-col gap-8">
                <img className="w-32" src={assets.logo} alt="" />

                <div className="flex gap-4">
                    <a className="bannerIcon shadowGray" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a className="bannerIcon shadowGray" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a className="bannerIcon shadowGray" href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

            {/* quick link */}
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">quick link</h3>

                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            About
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Portfolio
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Services
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Blog
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Contact
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>

            {/* resoucrces */}
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">resoucrces</h3>

                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            System
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            Status</span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Terms
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            of Service</span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Pricing
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Over
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            Right</span>
                    </li>
                </ul>
            </div>

            {/* developers */}
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-designColor tracking-wider">developers</h3>

                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Documentation
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            API
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            Reference</span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Support
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>

                    <li>
                        <span className="w-full relative text-lg hover:text-designColor duration-300 group cursor-pointer">
                            Open
                            <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            Source</span>
                    </li>
                </ul>
            </div>
        </FadeIn>
    )
}

export default Footer
