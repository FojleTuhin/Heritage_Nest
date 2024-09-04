import { RiHomeSmile2Line } from "react-icons/ri";

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto px-8">
            <div className="mt-20">
                <p className="font-bold text-[40px] text-[#181818] text-center">Other Services</p>

                <div className="flex lg:justify-between mt-20 flex-wrap justify-center gap-5">
                    <div className="w-[384px] h-[200px] bg-[#ECF5FF] p-6 flex gap-5">
                        <div>
                            <div className="w-12 h-12 bg-[#EE6611] rounded flex items-center justify-center"><RiHomeSmile2Line className="text-[25px] text-white" /></div>

                        </div>

                        <div >
                            <p className="font-semibold text-2xl">Advanced Property Search</p>
                            <p className="font-medium text-[#6B7280] mt-5">Effortlessly find your dream property with advanced search filters.</p>
                        </div>

                    </div>
                    <div className="w-[384px] h-[200px] bg-[#ECF5FF] p-6 flex gap-5">
                        <div>
                            <div className="w-12 h-12 bg-[#EE6611] rounded flex items-center justify-center"><RiHomeSmile2Line className="text-[25px] text-white" /></div>

                        </div>

                        <div >
                            <p className="font-semibold text-2xl">Virtual Tours and Multimedia</p>
                            <p className="font-medium text-[#6B7280] mt-5">Explore properties through immersive virtual tours and HD photos.</p>
                        </div>

                    </div>
                    <div className="w-[384px] h-[200px] bg-[#ECF5FF] p-6 flex gap-5">
                        <div>
                            <div className="w-12 h-12 bg-[#EE6611] rounded flex items-center justify-center"><RiHomeSmile2Line className="text-[25px] text-white" /></div>

                        </div>

                        <div >
                            <p className="font-semibold text-2xl">Secure Online Transactions</p>
                            <p className="font-medium text-[#6B7280] mt-5">Ensure secure transactions and e-sign documents seamlessly online.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;