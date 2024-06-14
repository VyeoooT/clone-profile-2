import { motion } from "framer-motion"
import CardResume from "./card"

function Achievement() {
    return (
        // experience
        <motion.div
            className="w-full flex lgl:flex-row flex-col lgl:gap-20 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            {/* job experience */}
            <div>
                <div className="flex flex-col gap-4 lgl:py-12 py-6 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Company Experience</h2>
                </div>

                {/* card */}
                <div className="w-full h-[1000px] flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lgl:mt-14 mt-6">
                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />

                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />

                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />
                </div>
            </div>

            {/* trainer experience */}
            <div>
                <div className="flex flex-col gap-4 lgl:py-12 py-6 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Trainer Experience</h2>
                </div>

                {/* card */}
                <div className="w-full h-[1000px] flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lgl:mt-14 mt-6">
                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />

                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />

                    <CardResume 
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Achievement
