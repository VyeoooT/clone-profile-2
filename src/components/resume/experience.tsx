import { motion } from "framer-motion"
import CardResume from "./card"

function Experience() {
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
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Job Experience</h2>
                </div>

                {/* card */}
                <div className="w-full h-[1000px] flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lgl:mt-14 mt-6">
                    <CardResume 
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        description="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />

                    <CardResume 
                        title="Web Developer & Trainer"
                        subTitle="Apple Developer Team - (2012 - 2016)"
                        result="MALAYSIA"
                        description="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
                    />

                    <CardResume 
                        title="Front-end Developer"
                        subTitle="Nike - (2020 - 2011)"
                        result="Oman"
                        description="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
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
                        title="Gym Instructor"
                        subTitle="Rainbow Gym Center (2015 - 2020)"
                        result="DHAKA"
                        description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />

                    <CardResume 
                        title="Web Developer and Instructor"
                        subTitle="SuperKing College (2010 - 2014)"
                        result="CANADA"
                        description="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                    />

                    <CardResume 
                        title="School Teacher"
                        subTitle="Kingstar Secondary School (2001 - 2010)"
                        result="NEVADA"
                        description="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
