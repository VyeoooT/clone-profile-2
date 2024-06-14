import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    src: string
    title: string
    description: string
}

function CardProject({ title, description, src }: Props) {
    return (
        <div className="w-full h-auto flex flex-col shadowGray bg-gradient-to-r from-bodyColor to-[#202327] xl:px-12 xl:py-10 p-4 rounded-lg group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            {/* img */}
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img className="w-full aspect-video object-cover group-hover:scale-110 duration-300" src={src} alt="src" />
            </div>

            {/* content */}
            <div className="w-full flex flex-col gap-6 mt-5">
                <div>
                    <div className="flex justify-between items-center">
                        {/* title */}
                        <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>

                        {/* icon */}
                        <div className="flex gap-2">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <span className="size-10 bg-black rounded-full inline-flex justify-center items-center text-lg text-gray-400 hover:text-designColor duration-300">
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </a>

                            <a href="https://goole.com" target="_blank" rel="noopener noreferrer">
                                <span className="size-10 bg-black rounded-full inline-flex justify-center items-center text-lg text-gray-400 hover:text-designColor duration-300">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* desc */}
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProject
