import { IoMdSearch } from "react-icons/io";
import video from "../../public/hero_banner.mp4"
import { Link } from "react-router-dom";


const Hero_Banner = () => {
    return (
        <div>
            <div className="relative h-[544px] overflow-hidden">
                {/* Background Video */}
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/72 to-black/88" />

                <div className="relative z-10 flex flex-col text-center items-center justify-center h-full ">
                    <h1 className="text-white text-[32px] lg:text-[64px] font-bold lg:w-[696px]">Your Portal to India's Exquisite Real Estate</h1>
                    <p className="font-medium text-[#F9FAFB] mt-12">Seamlessly connecting you to the heartbeat of India's prime properties.</p>

                    <Link to='/findProperty'>
                        <p className="py-4 px-6 rounded-md bg-[#0059B1] mt-12 text-white flex gap-3 items-center"><IoMdSearch className="h-[19px] w-[19px]" />Find Property</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero_Banner;