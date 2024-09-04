import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { RiHomeSmile2Line } from "react-icons/ri";

const SearchBar = () => {
    return (
        <div className="relative h-[500px] max-w-7xl mx-auto">
            <div className="h-[309px]">
                <img src="https://i.ibb.co/6YjYCVs/City-Lights.png" className="bg-cover h-[309px] w-full" alt="" />
            </div>
            <div className="absolute top-20 left-[12%]  bg-[#FFFFFF] rounded-lg drop-shadow">
                <div className="w-[984px] h-[376px] mx-auto  p-8 gap-8 flex flex-col">
                    <div>
                        <div className="flex gap-5 font-medium text-[#4B5563]">
                            <p className="text-[#0059B1] ">Buy</p>
                            <p>Rent</p>
                            <p>PG</p>
                            <p>Plot</p>
                            <p>Commercial</p>
                        </div>
                        <div className="flex">
                            <hr className="w-[28px] h-[2px] bg-[#0059B1] " />
                            <hr className="bg-[#ECF5FF] flex-1 h-[2px]" />
                        </div>
                    </div>
                    <div className="flex items-center relative">

                        <IoMdSearch className="h-[19px] w-[19px] absolute left-6" />
                        <input type="text" className="border border-[#E5E7EB] w-full rounded py-3 px-12 placeholder:text-[#6B7280]" placeholder="Search Property" />
                    </div>

                    <div className="flex gap-8">
                        <div>
                            <div className="flex items-center gap-4">
                                <FaLocationDot className="text-[#EE6611] h-5 w-4" />
                                <p className="font-semibold text-[18px]">Your Location</p>
                            </div>
                            <div className="w-[285px] mt-4">
                                <select className="select  w-full max-w-xs bg-[#ECF5FF] text-[#EE6611] text-[18px] rounded">
                                    <option disabled selected></option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center gap-4">
                                <RiHomeSmile2Line className="text-[#EE6611] h-5 w-5" />
                                <p className="font-semibold text-[18px]">Property Type</p>
                            </div>
                            <div className="w-[285px] mt-4">
                                <select className="select  w-full max-w-xs bg-[#ECF5FF] text-[#EE6611] text-[18px] rounded">
                                    <option disabled selected></option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center gap-4">
                                <AiFillDollarCircle className="text-[#EE6611] h-5 w-4" />
                                <p className="font-semibold text-[18px]">Budget</p>
                            </div>
                            <div className="w-[285px] mt-4 bg-[#ECF5FF] text-[#EE6611] text-[18px]">
                               

                                <input type="text" name="" id="" className="w-full h-12 rounded bg-[#ECF5FF] text-[#EE6611] text-[18px]" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="py-4 px-6 rounded-md font-semibold text-center justify-center bg-[#0059B1]  text-white flex gap-3 items-center"><IoMdSearch className="h-[19px] w-[19px]" />Find Property</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchBar;