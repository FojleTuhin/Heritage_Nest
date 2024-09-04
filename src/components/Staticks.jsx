import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Staticks = () => {
    return (
        <div className="max-w-7xl px-8 mx-auto flex gap-6 flex-wrap justify-between">
            <div className="bg-[#FDF0E7] p-6 flex flex-col justify-between gap-8 h-[185px] w-[280px]">
                <div>
                    <h3 className="text-[40px] font-bold text-[#D95D0F]">2k+</h3>
                    <p className="text-[#1F2937]">New Flat Listed</p>
                </div>
                <div className="flex justify-between">
                    <Link to='/allProperty'><a className="text-[#EE6611] underline">View all</a></Link>

                    {/* <i
                        className="fa-solid fa-arrow-down rounded-full ring-1 ring-[#EE6611] h-8 w-8 flex justify-center items-center text-[#EE6611]"></i> */}

                    <FaRegArrowAltCircleDown className="text-2xl text-[#EE6611]" />
                </div>
            </div>



            <div className="bg-[#ECF5FF] p-6 flex flex-col justify-between gap-8 h-[185px] w-[280px]">
                <div>
                    <h3 className="text-[40px] font-bold text-[#0059B1]">2k+</h3>
                    <p className="text-[#1F2937]">New Flat Listed</p>
                </div>
                <div className="flex justify-between">
                <Link to='/allProperty'><a className="text-[#0059B1] underline">View all</a></Link>

                    {/* <i
                        className="fa-solid fa-arrow-down rounded-full ring-1 ring-[#EE6611] h-8 w-8 flex justify-center items-center text-[#EE6611]"></i> */}

                    <FaRegArrowAltCircleDown className="text-2xl text-[#0059B1]" />
                </div>
            </div>



            <div className="bg-[#FDF0E7] p-6 flex flex-col justify-between gap-8 h-[185px] w-[280px]">
                <div>
                    <h3 className="text-[40px] font-bold text-[#D95D0F]">2k+</h3>
                    <p className="text-[#1F2937]">New Flat Listed</p>
                </div>
                <div className="flex justify-between">
                    <Link to='/allProperty'><a className="text-[#EE6611] underline">View all</a></Link>

                    {/* <i
                        className="fa-solid fa-arrow-down rounded-full ring-1 ring-[#EE6611] h-8 w-8 flex justify-center items-center text-[#EE6611]"></i> */}

                    <FaRegArrowAltCircleDown className="text-2xl text-[#EE6611]" />
                </div>
            </div>
            <div className="bg-[#ECF5FF] p-6 flex flex-col justify-between gap-8 h-[185px] w-[280px]">
                <div>
                    <h3 className="text-[40px] font-bold text-[#0059B1]">2k+</h3>
                    <p className="text-[#1F2937]">New Flat Listed</p>
                </div>
                <div className="flex justify-between">
                <Link to='/allProperty'><a className="text-[#0059B1] underline">View all</a></Link>

                    {/* <i
                        className="fa-solid fa-arrow-down rounded-full ring-1 ring-[#EE6611] h-8 w-8 flex justify-center items-center text-[#EE6611]"></i> */}

                    <FaRegArrowAltCircleDown className="text-2xl text-[#0059B1]" />
                </div>
            </div>


        </div>
    );
};

export default Staticks;