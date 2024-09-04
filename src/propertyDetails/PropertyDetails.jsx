import { AiTwotoneFilter } from "react-icons/ai";
import { BsFlower1 } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaIntercom, FaLocationDot, FaUmbrellaBeach, FaWifi } from "react-icons/fa6";
import { GiCaveman, GiFurnace, GiGasPump, GiKidSlide, GiRunningShoe, GiTap } from "react-icons/gi";
import { GrHostMaintenance, GrUserPolice } from "react-icons/gr";
import { IoBedOutline } from "react-icons/io5";
import { LiaFilePdf } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { MdBalcony, MdForklift, MdLocalLaundryService, MdOutlineBathtub, MdOutlineWarehouse, MdSportsTennis } from "react-icons/md";
import { PiParkDuotone, PiTelevisionBold } from "react-icons/pi";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { TbBedOff, TbParkingOff } from "react-icons/tb";

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


                    <div className="mt-8 bg-[#F9FAFB] h-[356px] rounded-lg p-6 flex flex-col gap-8 border border-[#E5E7EB]">
                        <p className="font-semibold text-[24px] text-[#000000]">Overview</p>

                        <div className="bg-[#FFFFFF] h-[56px] flex gap-8 border border-[#CAC7C7] border-t-0 border-r-0 border-l-0">
                            <div className="p-4 gap-2 flex items-center">
                                <IoBedOutline className="h-5 w-5 " />
                                <p className="text-[#303030]"><span className="font-bold">2</span> Beds</p>

                            </div>
                            <div className="p-4 gap-2 flex items-center">
                                <MdOutlineBathtub className="h-5 w-5 " />
                                <p className="text-[#303030]"><span className="font-bold">2</span> Bath</p>

                            </div>
                            <div className="p-4 gap-2 flex items-center">
                                <MdBalcony className="h-5 w-5 " />
                                <p className="text-[#303030]"><span className="font-bold">2</span> Balcony</p>

                            </div>
                            <div className="p-4 gap-2 flex items-center">
                                <GiFurnace className="h-5 w-5 " />
                                <p className="text-[#303030]">Fully Furnished</p>

                            </div>

                        </div>

                        <div className=" flex flex-col gap-6">
                            <div className="flex gap-8 justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#5C5C5C]">Carpet Area</p>
                                    <p className="text-[#101010] font-medium">2000 sqft</p>
                                    <p className="text-[#535353] text-[14px]">$ 225/sqft</p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-[#5C5C5C]">Floor</p>
                                    <p className="text-[#101010] font-medium">Second (Out of 6th floor)</p>

                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#5C5C5C]">Transaction Type</p>
                                    <p className="text-[#101010] font-medium">Ready to move</p>

                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#5C5C5C]">Lift</p>
                                    <p className="text-[#101010] font-medium">1</p>

                                </div>


                            </div>
                            <div className="flex gap-8 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#5C5C5C]">Facing</p>
                                    <p className="text-[#101010] font-medium">North - East</p>

                                </div>
                                <div className="flex flex-col gap-1 ml-20">
                                    <p className="text-[#5C5C5C]">Additional Rooms</p>
                                    <p className="text-[#101010] font-medium">1 servant room & 1 gust room</p>

                                </div>
                                <div className="flex flex-col gap-1 ml-12">
                                    <p className="text-[#5C5C5C]">Age of construction</p>
                                    <p className="text-[#101010] font-medium">Age of construction</p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className=" flex-1 mt-10 ">
                    <div className="bg-[#ECF5FF]">
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

                    <div className="relative mt-8">
                        <img className="rounded-lg h-[422px] w-[396px]" src="https://i.ibb.co/Cz2x5MG/Screenshot-2024-09-04-204835.png" alt="" />
                        <div className="absolute top-0 left-0 w-full h-full rounded-lg" style={{ background: 'linear-gradient(#00000033, #00000033)' }}></div>
                    </div>


                </div>
            </div>


            <div className="rounded-lg border border-[#E5E7EB] mt-10 p-6 flex flex-col gap-8">
                <div>
                    <p className="font-semibold text-[24px] text-[#000000]">Amenities </p>
                </div>

                {/* row 1 done */}
                <div className="flex  gap-6">
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <RiBattery2ChargeLine className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Power Back Up</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <MdForklift className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Lift</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <MdOutlineWarehouse className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Club House</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <CgGym className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Gymnasium</p>
                    </div>

                </div>

                {/* row 2 done  */}
                <div className="flex  gap-6">
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <PiParkDuotone className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Park</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <TbParkingOff className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Reserved Parking</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <GrUserPolice className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Security</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <AiTwotoneFilter className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Water Storage</p>
                    </div>

                </div>

                {/* row 3 done  */}
                <div className="flex  gap-6">
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <FaUmbrellaBeach className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Private Terrace/Garden</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <LiaFilePdf className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Vaastu Compliant</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <GiCaveman className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Service/Goods Lift</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <TbBedOff className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Visitor Parking</p>
                    </div>

                </div>

                {/* row 4 done  */}
                <div className="flex  gap-6">
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <FaIntercom className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Security</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <GrHostMaintenance className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Maintenance Staff</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <GiTap className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Waste Disposal</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <MdLocalLaundryService className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Laundry Service</p>
                    </div>

                </div>


                {/* row 5 done  */}
                <div className="flex  gap-6">
                    <div className="w-[265px] h-[72px] p-4 flex gap-2 items-center">
                        <FaWifi  className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Internet/Wi-Fi Connectivity</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <PiTelevisionBold  className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">DTH Television Facility</p>
                    </div>
                    <div className="w-[245px] h-[72px] p-4 flex gap-2 items-center">
                        <GiGasPump  className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Piped Gas</p>
                    </div>
                    <div className="w-[265px] h-[72px] p-4 flex gap-2 items-center">
                        <GiRunningShoe  className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Jogging and Strolling Track</p>
                    </div>

                </div>


                  {/* row 6 do  */}
                  <div className="flex  gap-6">
                    <div className="w-[265px] h-[72px] p-4 flex gap-2 items-center">
                        <MdSportsTennis   className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Outdoor Tennis Courts</p>
                    </div>
                    <div className="w-[256px] h-[72px] p-4 flex gap-2 items-center">
                        <LuGraduationCap   className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Early Learning Centre</p>
                    </div>
                    <div className="w-[245px] h-[72px] p-4 flex gap-2 items-center">
                        <GiKidSlide   className="text-[24px]" />
                        <p className="text-[#101010] font-medium ">Kids Play Area</p>
                    </div>
                    <div className="w-[265px] h-[72px] p-4 flex gap-2 items-center">
                        <BsFlower1   className="text-[24px]" />
                        <p className="text-[#101010] font-medium "></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;