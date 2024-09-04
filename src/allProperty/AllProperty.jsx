import { FaLocationDot } from "react-icons/fa6";
import { IoScanCircleSharp } from "react-icons/io5";
import { PiRectangleDashedLight } from "react-icons/pi";
import Testimonial from "../components/Testimonial";

const AllProperty = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-20">

            <div className="w-[800px] pb-4 border bordeer-b-[1px] border-[#E3E3E3] border-t-0 border-l-0 border-r-0 flex gap-8">

                <p className="bg-[#0059B1] rounded p-[10px] text-[18px] font-medium text-[#F9FAFB]">properties (400)</p>
                <p className="bg-[#ECF5FF] rounded p-[10px] text-[18px] font-medium text-[#4B5563]">New Projects (400)</p>
                <p className="bg-[#ECF5FF] rounded p-[10px] text-[18px] font-medium text-[#4B5563]">Pre-launch offers</p>
            </div>
            <div>
                <p className="text-[24px] font-medium mt-5">400 results for rental   </p>
            </div>


            {/* card 5  */}
            <div className="flex flex-col gap-6 w-[800px] mt-10 pb-6 border bordeer-b-[1px] border-[#959595] border-t-0 border-l-0 border-r-0">

                {/* 1st */}
                <div className="h-[232px] rounded-lg p-6 flex gap-8 bg-[#F9FAFB]">
                    <div className="w-[152px] h-[184px]">
                        <img className="w-[152px] h-[184px] rounded" src="https://i.ibb.co/YQGnQ6s/pexels-hikaique-65438.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-[10px] justify-between">
                            <div className="w-[423px] flex flex-col gap-4">
                                <p className="font-semibold text-[18px] text-[#010101]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                                <div className="flex items-center gap-2 ">
                                    <FaLocationDot className="text-[#EE6611] h-[20px]" />
                                    <p className="text-[#606060] ">Meadowshire Park, Greenfield, USA</p>
                                </div>

                            </div>
                            <div className="w-[135px] flex flex-col justify-between">
                                <p className="text-[#010101] font-bold text-2xl">$ 300000</p>
                                <p className="text-[#363636] text-center rounded px-4 py-2 border-[1px] border-[#000000] ">Bid Property</p>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#010101]">Property details</p>
                                <hr className="flex-1 h-[2px] text-[#E3E3E3]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center">

                                    <IoScanCircleSharp className="h-10 w-10 text-[#EE6611]" />

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Status</p>
                                        <p className="text-[#535353]">Ready to move</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>

                {/* 2nd */}
                <div className="h-[232px] rounded-lg p-6 flex gap-8 bg-[#F9FAFB]">
                    <div className="w-[152px] h-[184px]">
                        <img className="w-[152px] h-[184px] rounded" src="https://i.ibb.co/YQGnQ6s/pexels-hikaique-65438.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-[10px] justify-between">
                            <div className="w-[423px] flex flex-col gap-4">
                                <p className="font-semibold text-[18px] text-[#010101]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                                <div className="flex items-center gap-2 ">
                                    <FaLocationDot className="text-[#EE6611] h-[20px]" />
                                    <p className="text-[#606060] ">Meadowshire Park, Greenfield, USA</p>
                                </div>

                            </div>
                            <div className="w-[135px] flex flex-col justify-between">
                                <p className="text-[#010101] font-bold text-2xl">$ 300000</p>
                                <p className="text-[#363636] text-center rounded px-4 py-2 border-[1px] border-[#000000] ">Bid Property</p>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#010101]">Property details</p>
                                <hr className="flex-1 h-[2px] text-[#E3E3E3]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center">

                                    <IoScanCircleSharp className="h-10 w-10 text-[#EE6611]" />

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Status</p>
                                        <p className="text-[#535353]">Ready to move</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>


                {/* 3rd */}
                <div className="h-[232px] rounded-lg p-6 flex gap-8 bg-[#F9FAFB]">
                    <div className="w-[152px] h-[184px]">
                        <img className="w-[152px] h-[184px] rounded" src="https://i.ibb.co/YQGnQ6s/pexels-hikaique-65438.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-[10px] justify-between">
                            <div className="w-[423px] flex flex-col gap-4">
                                <p className="font-semibold text-[18px] text-[#010101]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                                <div className="flex items-center gap-2 ">
                                    <FaLocationDot className="text-[#EE6611] h-[20px]" />
                                    <p className="text-[#606060] ">Meadowshire Park, Greenfield, USA</p>
                                </div>

                            </div>
                            <div className="w-[135px] flex flex-col justify-between">
                                <p className="text-[#010101] font-bold text-2xl">$ 300000</p>
                                <p className="text-[#363636] text-center rounded px-4 py-2 border-[1px] border-[#000000] ">Bid Property</p>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#010101]">Property details</p>
                                <hr className="flex-1 h-[2px] text-[#E3E3E3]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center">

                                    <IoScanCircleSharp className="h-10 w-10 text-[#EE6611]" />

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Status</p>
                                        <p className="text-[#535353]">Ready to move</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>


                {/* 4th */}
                <div className="h-[232px] rounded-lg p-6 flex gap-8 bg-[#F9FAFB]">
                    <div className="w-[152px] h-[184px]">
                        <img className="w-[152px] h-[184px] rounded" src="https://i.ibb.co/YQGnQ6s/pexels-hikaique-65438.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-[10px] justify-between">
                            <div className="w-[423px] flex flex-col gap-4">
                                <p className="font-semibold text-[18px] text-[#010101]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                                <div className="flex items-center gap-2 ">
                                    <FaLocationDot className="text-[#EE6611] h-[20px]" />
                                    <p className="text-[#606060] ">Meadowshire Park, Greenfield, USA</p>
                                </div>

                            </div>
                            <div className="w-[135px] flex flex-col justify-between">
                                <p className="text-[#010101] font-bold text-2xl">$ 300000</p>
                                <p className="text-[#363636] text-center rounded px-4 py-2 border-[1px] border-[#000000] ">Bid Property</p>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#010101]">Property details</p>
                                <hr className="flex-1 h-[2px] text-[#E3E3E3]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center">

                                    <IoScanCircleSharp className="h-10 w-10 text-[#EE6611]" />

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Status</p>
                                        <p className="text-[#535353]">Ready to move</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>

                {/* 5th */}

                <div className="h-[232px] rounded-lg p-6 flex gap-8 bg-[#F9FAFB]">
                    <div className="w-[152px] h-[184px]">
                        <img className="w-[152px] h-[184px] rounded" src="https://i.ibb.co/YQGnQ6s/pexels-hikaique-65438.jpg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-[10px] justify-between">
                            <div className="w-[423px] flex flex-col gap-4">
                                <p className="font-semibold text-[18px] text-[#010101]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                                <div className="flex items-center gap-2 ">
                                    <FaLocationDot className="text-[#EE6611] h-[20px]" />
                                    <p className="text-[#606060] ">Meadowshire Park, Greenfield, USA</p>
                                </div>

                            </div>
                            <div className="w-[135px] flex flex-col justify-between">
                                <p className="text-[#010101] font-bold text-2xl">$ 300000</p>
                                <p className="text-[#363636] text-center rounded px-4 py-2 border-[1px] border-[#000000] ">Bid Property</p>

                            </div>

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="font-medium text-[#010101]">Property details</p>
                                <hr className="flex-1 h-[2px] text-[#E3E3E3]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center">

                                    <IoScanCircleSharp className="h-10 w-10 text-[#EE6611]" />

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Status</p>
                                        <p className="text-[#535353]">Ready to move</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">

                                    <div className="h-10 w-10 bg-[#EE6611] rounded-lg flex items-center justify-center">
                                        <PiRectangleDashedLight className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-[#303030]">Total Area</p>
                                        <p className="text-[#535353]">891 sqft</p>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>


            </div>


            {/* pagination */}
            <div className="flex gap-2 mt-6">
                <p className="bg-[#0059B1] px-[10px] py-2 rounded text-[#ECF5FF] text-[18px]">01</p>
                <p className="bg-[#ECF5FF] px-[10px] py-2 rounded text-[#4B5563] text-[18px]">02</p>
                <p className="bg-[#ECF5FF] px-4 py-2 rounded text-[#4B5563] text-[18px]">Next</p>


            </div>





            <div className="w-[1008px] h-[148px] rounded-lg p-8 flex gap-8 bg-[#ECF5FF] mt-20">


                <div className="w-[286px]">
                    <p className="font-semibold text-[28px] text-[#010101]">Need a Home Loan?</p>
                    <p className="text-[#535353]">Select How much Home loan you can take</p>
                </div>
                <div className="flex-1 flex flex-col  justify-center">

                    <div>
                        <div className="flex ">
                            <p className="bg-[#0051A1] h-[19px] w-[18px] rounded-full z-20" ></p>
                            <div className="relative">
                                <div className="flex h-[13px] w-[620px] bg-[#8AB3DB] -ml-1 rounded-tr-[10px] rounded-br-[10px] mt-[2px]">

                                </div>

                                <div className="flex -mt-5">
                                    <p></p>
                                    <p className="ml-[160px] text-[#ECF5FF]">|</p>
                                    <p className="ml-[140px] text-[#ECF5FF]">|</p>
                                    <p className="ml-[140px] text-[#ECF5FF]">|</p>
                                    <p className="ml-[140px] text-[#ECF5FF]">|</p>
                                </div>


                                <div className="flex justify-between mt-3">
                                    <p>$20K</p>
                                    <p>$30K</p>
                                    <p>$40K</p>
                                    <p>$50K</p>
                                    <p>$60K</p>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>

            </div>


            <Testimonial></Testimonial>





        </div>
    );
};

export default AllProperty;