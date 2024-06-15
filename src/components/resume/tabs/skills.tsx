import { motion } from "framer-motion"

function Skills() {
    return (
        // skills
        <motion.div
            className="w-full flex lgl:flex-row flex-col lgl:gap-20 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            {/* features */}
            <div className="lgl:w-1/2 w-full">
                <div className="flex flex-col gap-4 py-12 font-titleFont">
                    <p className="text-sm text-designColor uppercase tracking-[4px]">Features</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Design Skill</h2>
                </div>

                <div className="w-full flex flex-col gap-6">
                    {/* photoshop */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Photoshop</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">100%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* figma */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Figma</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">90%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* adobe xd */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Adobe XD</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">60%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* adobe illustrator */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Adobe Illustrator</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">70%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* design */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Design</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">95%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>

            {/* development skill */}
            <div className="lgl:w-1/2 w-full">
                <div className="flex flex-col gap-4 py-12 font-titleFont">
                    <p className="text-sm text-designColor uppercase tracking-[4px]">Features</p>
                    <h2 className="md:text-4xl text-3xl font-bold">Development Skill</h2>
                </div>

                <div className="w-full flex flex-col gap-6">
                    {/* react */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">React</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">100%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* html 5 */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">HTML 5</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">95%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* css 3 */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">CSS 3</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">80%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* js */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">JAVASCRIPT</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">75%</span>
                            </motion.span>
                        </span>
                    </div>

                    {/* software */}
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">SOFTWARE</p>

                        <span className="w-full h-2 bgOpacity rounded-full inline-flex mt-2">
                            <motion.span
                                className="relative w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-full"
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="absolute -top-7 right-0">90%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
