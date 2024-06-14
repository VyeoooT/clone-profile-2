import assets from '../../assets/index'
import { FadeIn } from '../effect/fadeIn'

function HomeRight() {
    return (
        // home right
        <FadeIn className="relative lgl:w-1/2 w-full flex justify-center items-center">
            <img className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" src={assets.bannerImg} alt="" />

            {/* shadow img */}
            <div className="absolute bottom-0 lgl:w-[500px] lgl:h-[500px] w-[350px] h-[300px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadowGray flex justify-center items-center"></div>
        </FadeIn>
    )
}

export default HomeRight
