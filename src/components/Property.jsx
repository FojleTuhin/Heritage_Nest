import Title from "./Title";

const Property = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-20 ">
            <div className="md:flex gap-5">
                <div className="md:w-[50%] relative h-[504px]">
                    <img src="https://i.ibb.co/gym2JvR/nastuh-abootalebi-Jdc-Jn85x-D2k-unsplash.jpg" className="w-[452px] h-[400px] bg-cover rounded-lg" alt="" />
                    <img src="https://i.ibb.co/Lh10ngF/kara-eads-L7-Ew-Hkq1-B2s-unsplash.jpg" className="w-[448px] h-[240px] absolute bottom-0 right-0 rounded-lg" alt="" />

                    <div className="w-[72px] h-[72px] bg-[#0059B1] rounded-full flex items-center justify-center absolute top-[42%] left-[70%]">
                        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent 
                        border-l-[30px] border-l-white ml-2"></div>
                    </div>
                </div>
                <div className="md:w-[50%] h-[504px]">
                    <Title></Title>
                </div>
            </div>

            {/* 2nd  */}
            <div className="md:flex gap-5 mt-32">

                <div className="md:w-[50%] h-[504px]">
                    <Title></Title>
                </div>
                <div className="md:w-[50%]  relative h-[504px]">
                    <img src="https://i.ibb.co/VDwDB0J/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg" className="w-[452px] h-[400px]  bg-cover rounded-lg absolute bottom-0" alt="" />


                    

                    <img src="https://i.ibb.co/3yTbZCV/pexels-houzlook-3797991.jpg" className="w-[448px] h-[240px] absolute top-0 right-0 rounded-lg" alt="" />

                    <div className="w-[72px] h-[72px] bg-[#0059B1] rounded-full flex items-center justify-center absolute top-[12%] left-[18%]">
                        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent 
                        border-l-[30px] border-l-white ml-2">
                        </div>

                    </div>
                </div>
            </div>


            {/* 3rd */}

            <div className="md:flex gap-5 mt-32">
                <div className="md:w-[50%] relative h-[504px]">
                    <img src="https://i.ibb.co/VDwDB0J/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg" className="w-[452px] h-[400px] bg-cover rounded-lg" alt="" />
                    <img src="https://i.ibb.co/3yTbZCV/pexels-houzlook-3797991.jpg" className="w-[448px] h-[240px] absolute bottom-0 right-0 rounded-lg" alt="" />

                    <div className="w-[72px] h-[72px] bg-[#0059B1] rounded-full flex items-center justify-center absolute top-[42%] left-[70%]">
                        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent 
                        border-l-[30px] border-l-white ml-2"></div>
                    </div>
                </div>
                <div className="md:w-[50%] h-[504px]">
                    <Title></Title>
                </div>
            </div>
        </div>
    );
};

export default Property;