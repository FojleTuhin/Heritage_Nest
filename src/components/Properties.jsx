import { Link } from "react-router-dom";
import Card from "./Card";

const Properties = () => {
    return (
        <div className="max-w-7xl px-8 mx-auto mt-20">
            <div className="flex flex-col pb-8 gap-6 h-[492px]  border border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-[#E3E3E3]">
                <div className="flex justify-between">
                    <p className="font-semibold text-[32px] text-[#101010]">Popular Properties </p>
                    <Link to='/allProperty'><p className="font-semibold text-[18px] text-[#0059B1] link">See all propeety</p></Link>
                </div>
                <Card></Card>
            </div>


            <div className="flex flex-col pb-8 gap-6 h-[492px]  mt-20">
                <div className="flex justify-between">
                    <p className="font-semibold text-[32px] text-[#101010]">New Listed Properties  </p>
                    <Link to='/allProperty'><p className="font-semibold text-[18px] text-[#0059B1] link">See all propeety</p></Link>
                </div>
                <Card></Card>
            </div>
        </div>
    );
};

export default Properties;