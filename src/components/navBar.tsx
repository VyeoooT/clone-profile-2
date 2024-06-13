import assets from "../assets/index.tsx"
import navLinksData from "../constants"
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useRef, useState } from "react"

function NavBar() {    
    // get data nav links
    const navLinks = navLinksData()

    // useState open menu mobile
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // click outside menu mobile | menu auto close
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="w-full h-24 flex justify-between items-center *:text-lightText font-titleFont bg-bodyColor/70 px-4 mx-auto border-b-[1px] border-gray-600 sticky top-0 z-50 backdrop-blur-2xl transition-colors">
            {/* logo */}
            <div>
                <img src={assets.logo} alt="logo" />
            </div>

            {/* desktop - nav links */}
            <div>
                <ul className="mdl:inline-flex items-center hidden lg:gap-10 gap-6">
                    {navLinks.map(({ _id, link, title }) => (
                        <li key={_id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* icon menu mobile - open */}
            <button
                className="mdl:hidden size-10 bg-black inline-flex justify-center items-center rounded-full active:text-designColor"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={faBars} size="1x"/>
            </button>
            
            {/* mobile - nav links */}
            <div ref={menuRef} className={`${isOpen ? "translate-x-0" : "-translate-x-[100%]"} duration-300 w-[80%] h-screen mdl:hidden absolute top-0 left-0 bg-gray-900 p-4 overflow-scroll scrollbar-hide`}>
                <div className="relative flex flex-col gap-8 py-2">
                    {/* logo - description */}
                    <div className="">
                        <img src={assets.logo} alt="logo" />

                        <p className="text-sm text-gray-400 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi fugit deleniti harum quisquam quis quia dignissimos? Minima aliquid praesentium tempore, ut adipisci saepe at repellat reiciendis dolores sed blanditiis?
                        </p>
                    </div>

                    {/* icon menu mobile - close */}
                    <button
                        className="absolute top-2 right-2 text-gray-400 active:text-designColor"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faClose} size="lg"/>
                    </button>

                    {/* map navlinks */}
                    <ul className="flex flex-col gap-4 *:text-base *:text-gray-400 *:font-normal *:tracking-wide *:duration-300">
                        {navLinks.map(({ _id, link, title }) => (
                            <li key={_id}>
                                <Link
                                    onClick={toggleMenu}
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* find me in */}
                    <div className="flex flex-col gap-4">
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
            </div>
        </div>
    )
}

export default NavBar
