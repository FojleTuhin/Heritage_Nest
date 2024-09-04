import { FaLocationDot } from "react-icons/fa6";

const PropertyDetails = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
            <div className="w-[800px] h-[72px] flex gap-8 border border-t-0 border-l-0 border-r-0 pb-4 border-[#E3E3E3] ">
                <div className="w-[540px] flex flex-col gap-2">
                    <p className="text-[#010101] font-semibold text-xl">3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</p>
                    <div className="flex items-center gap-2">
                        <FaLocationDot className="h-5 text-[#EE6611]" />
                        <p className="text-[#606060] text-[18px]">Meadowshire Park, Greenfield, USA</p>

                    </div>

                </div>
                <div>
                    <p className="text-[32px] font-extrabold">$ 300K</p>

                </div>

            </div>


            <div className="flex gap-5">
                <div className="w-[800px] rounded-lg mt-10">
                    <img className="w-[800px] h-[400px] rounded-lg" src="https://i.ibb.co/LSqHY2K/pexels-binyaminmellish-1396122.jpg" alt="" />
                    <div className="flex gap-5 h-[160px] mt-5">
                        <img className="h-[160px] w-[290px]" src="https://i.ibb.co/WKHYVwq/pexels-sebastians-731082.jpg" alt="" />
                        <img className="h-[160px] w-[290px]" src="https://i.ibb.co/dPd8sDV/pexels-binyaminmellish-1396132.jpg" alt="" />
                        <div className="h-[160px] w-[188px] relative">
                            <img
                                className="h-[160px] w-[188px]"
                                src="https://i.ibb.co/h9csy0S/pexels-itsterrymag-2631746.jpg"
                                alt=""
                            />
                            <p className="font-semibold text-[28px] absolute top-12 z-10 text-white left-5">
                                View more
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000A3] to-transparent"></div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#ECF5FF]  flex-1 mt-10 h-[504px]">
                    <div className="p-6 gap-4 flex flex-col ">
                        <div className=" gap-4 flex flex-col">
                            <div className=" gap-2 flex flex-col">
                                <p className="text-xl text-[#6B7280]">property value</p>
                                <p className="text-[#252323] font-bold text-[24px]">$ 300k - $ 310k</p>
                            </div>
                            <div>
                                <p className="font-medium text-[#6B7280]">Your bid can not be than 10% of the property Minimum value.</p>

                            </div>
                        </div>

                        <div className=" gap-6 flex flex-col">
                            <div className="">
                                <div className=" gap-1 flex flex-col">
                                    <p className="text-[#252323] text-[14px]">Min</p>
                                    <p className="text-[#252323] rounded py-3 px-4 bg-[#FFFFFF]">$ 280k</p>
                                </div>

                                <div className=" gap-1 flex flex-col mt-1">
                                    <p className="text-[#252323] text-[14px]">Max</p>
                                    <p className="text-[#252323] rounded py-3 px-4 bg-[#FFFFFF]">$ 305k</p>
                                </div>
                            </div>

                            <div className=" gap-2 flex flex-col">
                                <div>
                                    <p className="bg-[#EEEEEE] h-6 w-full"></p>

                                    <div className="flex justify-between -m-6 px-6">
                                        <p className="h-6 w-6 bg-[#EE6611] rounded-full"></p>
                                        <p className="h-6 w-6 bg-[#EE6611] rounded-full"></p>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <p className="font-medium text-[14px] text-[#252323]">$ 280k</p>
                                    <p className="font-medium text-[14px] text-[#252323]">$ 305k</p>
                                </div>
                            </div>


                            <div className="flex justify-center">
                                <p className="text-center bg-[#0059B1] text-[#FFFFFF] font-semibold text-[18px] py-3 px-6 rounded">Bid Property</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;