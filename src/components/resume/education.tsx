import { motion } from "framer-motion"
import CardResume from "./card"

function Education() {
    return (
        // education
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex lgl:flex-row flex-col lgl:gap-20 gap-10"
        >
            {/* Education Quality */}
            <div>
                <div className="flex flex-col gap-4 lgl:py-12 py-6 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Education Quality</h2>
                </div>

                {/* card */}
                <div className="w-full h-[1000px] flex flex-col gap-10 border-l-[6px] border-l-black border-opacity-30 lgl:mt-14 mt-6">
                    <CardResume
                        title="BSc in Computer Science"
                        subTitle="University of DVI (2006 - 2010)"
                        result="3.90/4"
                        description="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />

                    <CardResume
                        title="AS - Science & Information"
                        subTitle="SuperKing College (2001 - 2005)"
                        result="4.75/5"
                        description="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                    />

                    <CardResume
                        title="Secondary School Education"
                        subTitle="Kingstar Secondary School (1998 - 2000)"
                        result="5.00/5"
                        description="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>

            {/* Job Experience */}
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
        </motion.div>
    )
}

export default Education
