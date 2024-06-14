import Title from "../title"
import Card from "./card"
import { FadeIn } from "../effect/fadeIn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppStore, faSquareWebAwesome, faUikit } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faMobileAndroid } from "@fortawesome/free-solid-svg-icons"

function Features() {
    return (
        // features
        <section id="features" className="w-full py-20 border-b-[1px] border-gray-700">
            <FadeIn>
                <Title title="features" description="what i do" />

                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-20 gap-6">
                    <Card
                        icon={null}
                        title="Business Stratagy"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />

                    <Card 
                        icon={<FontAwesomeIcon icon={faAppStore} />}
                        title="App Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />

                    <Card 
                        icon={<FontAwesomeIcon icon={faSquareWebAwesome} />}
                        title="SEO Optimisation"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />

                    <Card 
                        icon={<FontAwesomeIcon icon={faMobileAndroid} />}
                        title="Mobile Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />

                    <Card 
                        icon={<FontAwesomeIcon icon={faUikit} />}
                        title="UX Design"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />

                    <Card 
                        icon={<FontAwesomeIcon icon={faGlobe} />}
                        title="Hosting Websites"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    />
                </div>
            </FadeIn>
        </section>
    )
}

export default Features
