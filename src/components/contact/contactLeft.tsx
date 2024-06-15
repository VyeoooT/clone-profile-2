import assets from "../../assets"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactLeft() {
    return (
        // contactLeft
        <div className="lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] lgl:p-8 p-4 rounded-lg shadowGray flex flex-col justify-center gap-8">
            {/* img */}
            <img className="rounded-lg" src={assets.contactImg} alt="contact" />

            {/* info contact */}
            <div className="flex flex-col gap-6 ">
                <div className="space-y-2">
                    <h3 className="text-3xl text-white font-bold">John Doe</h3>
                    <p className="text-lg text-gray-400 font-normal">MERN Stack Developer</p>
                </div>

                <div className="space-y-2">
                    <p className="text-base text-gray-400 tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
                    <p className="text-base text-gray-400 flex items-center gap-2">
                        Phone: <span className="text-lightText">09xxx0234</span>
                    </p>
                    <p className="text-base text-gray-400 flex items-center gap-2">
                        Mail: <span className="text-lightText">noor.jsdivs@gmail.com</span>
                    </p>
                </div>
            </div>

            {/* sicial contact - find me in */}
            <div>
                <h2 className="text-base font-titleFont mb-4">Find me in</h2>

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
        </div>
    )
}

export default ContactLeft
