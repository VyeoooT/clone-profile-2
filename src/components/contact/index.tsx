import { FadeIn } from "../effect/fadeIn"
import ContactRight from "./contactRight"
import ContactLeft from "./contactLeft"
import Title from "../title"

function Contact() {
    return (
        // contact
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
            <FadeIn>
                <div className="flex justify-center items-center text-center">
                    <Title title="contact" description="contact with me" />
                </div>

                <div className="w-full">
                    <div className="w-full flex lgl:flex-row flex-col lgl:justify-between max-sml:gap-5">
                        <ContactLeft />
                        <ContactRight />
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Contact
