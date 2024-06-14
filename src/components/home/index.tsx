import HomeLeft from "./homeLeft"
import HomeRight from "./homeRight"

function Home() {
    return (
        // home index
        <section id="home" className="w-full pt-10 pb-20 flex lgl:flex-row flex-col items-center xl:gap-0 gap-10 border-b-[1px] border-gray-700 font-titleFont">
            <HomeLeft />
            <HomeRight />
        </section>
    )
}

export default Home
