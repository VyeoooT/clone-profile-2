import { FadeIn } from "../effect/fadeIn"
import Title from "../title"
import Education from "./tabs/education"
import Skills from "./tabs/skills"
import Experience from "./tabs/experience"
import Achievement from "./tabs/achievement"
import { useState } from "react"

interface Tab {
    id: "education" | "skills" | "experience" | "achievements",
    tabName: string,
}

const tabs: Tab[] = [
    {
        id: "education",
        tabName: "Education",
    },
    {
        id: "skills",
        tabName: "Professional Skills",
    },
    {
        id: "experience",
        tabName: "Experience",
    },
    {
        id: "achievements",
        tabName: "Achievements",
    },
]

const components = {
    education: <Education />,
    skills: <Skills />,
    experience: <Experience />,
    achievements: <Achievement />
}

function Resumes() {
    const [isTab, setIsTab] = useState<"education" | "skills" | "experience" | "achievements">("education")

    const activeComponent = components[isTab]

    return (
        // resume
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-700">
            <FadeIn>
                <div className="flex justify-center items-center text-center">
                    <Title title="7+ YEARS OF EXPERIENCE" description="my resume" />
                </div>

                {/* tabs */}
                <div>
                    <ul className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {tabs.map(({ id, tabName }) => (
                            <li
                                key={id}
                                className={`resumeLi ${isTab === id ? "border-designColor rounded-lg" : "border-transparent"}`}
                                onClick={() => setIsTab(id)}
                            >
                                {tabName}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* active component - render */}
                {activeComponent}
            </FadeIn>
        </section>
    )
}

export default Resumes
