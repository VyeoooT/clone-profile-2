import { faCss3Alt, faFacebook, faGithub, faHtml5, faLinkedin, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FadeIn } from "../effect/fadeIn"

function HomeLeft() {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    return (
        // home left
        <FadeIn className="lgl:w-1/2 w-full flex flex-col gap-20">
            {/* wellcome */}
            <div className="flex flex-col gap-5">
                <h4 className="text-lg font-normal">WELLCOME TO MY WORLD</h4>
                
                <h1 className="text-6xl font-bold text-white">
                    Hi I'm&nbsp;
                    <span className="text-designColor capitalize">john doe</span>
                </h1>

                <h2 className="text-4xl font-bold text-white">
                    a&nbsp;
                    <span>{text}</span>
                    <Cursor cursorStyle="|" cursorColor="#ff014f" />
                </h2>

                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
                </p>
            </div>

            {/* find me in - skills */}
            <div className="flex xl:flex-row flex-col justify-between lgl:gap-0 gap-6">
                {/* find me in */}
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

                {/* skills */}
                <div>
                    <h2 className="text-base font-titleFont mb-4">Best skill on</h2>

                    <div className="flex gap-4">
                        <a className="bannerIcon shadowGray" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faReact} />
                        </a>

                        <a className="bannerIcon shadowGray" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </a>

                        <a className="bannerIcon shadowGray" href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSquareJs} />
                        </a>

                        <a className="bannerIcon shadowGray" href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faHtml5} />
                        </a>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default HomeLeft
