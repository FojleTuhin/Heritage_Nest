import { FaLocationDot } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="relative">
            <div className="flex gap-8 justify-between">

                {/* 1st */}
                <Link to='/propertyDetails'>
                    <div className="w-[325px] md:w-[385px] h-[388px] bg-[#F9FAFB]">
                        <div className="h-[200px] w-full relative">
                            <img className="h-[200px] bg-contain w-full" src="https://i.ibb.co/Lh10ngF/kara-eads-L7-Ew-Hkq1-B2s-unsplash.jpg" alt="" />

                            <div className="w-[55px] h-[28px] bg-[#FDF0E7] flex gap-2 rounded p-1 items-center absolute bottom-5 left-5">
                                <RiGalleryFill className="text-[#EE6611]" />
                                <p className="font-semibold">20</p>

                            </div>

                        </div>
                        <div className="p-4">
                            <div className=" gap-6 flex justify-between">
                                <p className="text-[#00254A] bg-[#C5E2FF] rounded py-1 px-2">Apartment </p>

                                <div className="flex gap-2 items-center">
                                    <hr className="w-2 bg-[#EE6611] text-[#EE6611] h-2" />
                                    <p className="text-[#111827] font-medium">Ready to Move</p>
                                </div>

                            </div>
                            <div className="">
                                <hr className="mt-2" />
                                <p className="font-semibold text-xl text-[#111827] mt-2">SunnySlope Suites</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <FaLocationDot className="text-[#EE6611] text-xl" />
                                    <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-2xl mt-4">$ 250000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* 2nd */}
                <Link to='/propertyDetails'>
                    <div className="w-[325px] md:w-[385px] h-[388px] bg-[#F9FAFB] hidden md:block">
                        <div className="h-[200px] w-full relative">
                            <img className="h-[200px] bg-contain w-full" src="https://i.ibb.co/2MTCL5n/cody-weiss-h-EMYw-IE6-GEY-unsplash.jpg" alt="" />

                            <div className="w-[55px] h-[28px] bg-[#FDF0E7] flex gap-2 rounded p-1 items-center absolute bottom-5 left-5">
                                <RiGalleryFill className="text-[#EE6611]" />
                                <p className="font-semibold">20</p>

                            </div>

                        </div>
                        <div className="p-4">
                            <div className=" gap-6 flex justify-between">
                                <p className="text-[#00254A] bg-[#C5E2FF] rounded py-1 px-2">Apartment </p>

                                <div className="flex gap-2 items-center">
                                    <hr className="w-2 bg-[#EE6611] text-[#EE6611] h-2" />
                                    <p className="text-[#111827] font-medium">Ready to Move</p>
                                </div>

                            </div>
                            <div className="">
                                <hr className="mt-2" />
                                <p className="font-semibold text-xl text-[#111827] mt-2">SunnySlope Suites</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <FaLocationDot className="text-[#EE6611] text-xl" />
                                    <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-2xl mt-4">$ 250000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>


                {/* 3rd */}
                <Link to='/propertyDetails'>
                    <div className="w-[385px] h-[388px] bg-[#F9FAFB] hidden md:block">
                        <div className="h-[200px] w-full relative">
                            <img className="h-[200px] bg-contain w-full" src="https://i.ibb.co/3yTbZCV/pexels-houzlook-3797991.jpg" alt="" />

                            <div className="w-[55px] h-[28px] bg-[#FDF0E7] flex gap-2 rounded p-1 items-center absolute bottom-5 left-5">
                                <RiGalleryFill className="text-[#EE6611]" />
                                <p className="font-semibold">20</p>

                            </div>

                        </div>
                        <div className="p-4">
                            <div className=" gap-6 flex justify-between">
                                <p className="text-[#00254A] bg-[#C5E2FF] rounded py-1 px-2">Apartment </p>

                                <div className="flex gap-2 items-center">
                                    <hr className="w-2 bg-[#EE6611] text-[#EE6611] h-2" />
                                    <p className="text-[#111827] font-medium">Ready to Move</p>
                                </div>

                            </div>
                            <div className="">
                                <hr className="mt-2" />
                                <p className="font-semibold text-xl text-[#111827] mt-2">SunnySlope Suites</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <FaLocationDot className="text-[#EE6611] text-xl" />
                                    <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-2xl mt-4">$ 250000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="absolute -left-5 -right-5 top-1/4 flex -translate-y-1/4 transform justify-between">
                <a className="btn btn-circle text-white bg-[#5490CB]">❮</a>
                <a className="btn btn-circle text-white bg-[#5490CB]">❯</a>
            </div>
        </div>



    );
};

export default Card;