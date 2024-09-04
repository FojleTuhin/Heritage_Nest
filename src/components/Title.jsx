import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div>
            <div className="flex gap-5 items-center">
                <hr className="w-[51px] h-1 bg-[#F06711]" />
                <span className="font-semibold text-[18px] text-[#F06711]">Property buying</span>
            </div>
            <div>
                <p className="font-bold text-[40px] text-[#111827]">Efficient and Transparent
                    Home Buying Solutions</p>

                <p className="text-[#667085] mt-8 custom-filter-shadow">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>


                <Link to='/allProperty'>
                    <p ><span className="flex items-center gap-3 bg-[#ECF5FF] py-4 px-6 rounded w-[210px] text-[#0059B1] text-[18px] font-medium mt-10"><IoMdSearch className="h-[19px] w-[19px]" />Find Property</span></p>
                </Link>
            </div>
        </div>
    );
};

export default Title;