import assets from "../../assets"
import { FadeIn } from "../effect/fadeIn"
import Title from "../title"
import Card from "./card"

function Projects() {
    return (
        // projects
        <section id="projects" className="w-full border-b-[1px] border-gray-700 py-20">
            <FadeIn>
                <div className="flex justify-center items-center text-center">
                    <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" description="my projects" />
                </div>

                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-14 gap-6">
                    <Card
                        src={assets.projectOne}
                        title="social media clone"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />

                    <Card
                        src={assets.projectTwo}
                        title="e-commerce website"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />

                    <Card
                        src={assets.projectThree}
                        title="chaating app"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />

                    {/* --- */}
                    <Card
                        src={assets.projectOne}
                        title="social media clone"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />

                    <Card
                        src={assets.projectTwo}
                        title="e-commerce website"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />

                    <Card
                        src={assets.projectThree}
                        title="chaating app"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    />
                </div>
            </FadeIn>
        </section>
    )
}

export default Projects
