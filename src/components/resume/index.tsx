import { FadeIn } from "../effect/fadeIn"
import Title from "../title"
import Education from "./education"
import Skills from "./skills"
import Experience from "./experience"
import Achievement from "./achievement"

const tabs = ["Education", "Professional Skills", "Experience", "Achievements"]

function Resumes() {
    return (
        // resume
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-700">
            <FadeIn>
                <div className="flex justify-center items-center text-center">
                    <Title title="7+ YEARS OF EXPERIENCE" description="my resume" />
                </div>

                <div>
                    <ul className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {tabs.map((tab, idx) => (
                            <li
                                key={idx}
                                className="resumeLi"
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <Education />
                    <Skills />
                    <Experience />
                    <Achievement />
                </div>
            </FadeIn>
        </section>
    )
}

export default Resumes
