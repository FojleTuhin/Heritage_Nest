import Staticks from "../components/Staticks";

const AboutUs = () => {
    return (
        <div>

            <img className="w-full h-[320px]" src="https://i.ibb.co/f83xXrg/gbb.png" alt="" />
            <div className="mt-10">
                <Staticks></Staticks>
            </div>

            <div className="max-w-7xl px-8 mx-auto h-[583px] relative">

                <div className="relative mt-20">
                    <img className="w-[904px] h-[455px]" src="https://i.ibb.co/vH67G3t/pexels-pixabay-271816.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-[904px] h-full" style={{ background: 'linear-gradient(0deg, #00000000 0%, #000000A6 65%, #000000CC 100%)' }}></div>
                </div>



                <div className="absolute bottom-0 right-8">
                    <div className="w-[592px] h-[270px] p-8 flex flex-col gap-6 bg-[#ECF5FF]">
                        <div className="h-[134px]">
                            <div className="flex gap-5 items-center">
                                <hr className="w-[51px] h-1 bg-[#F06711]" />
                                <span className="font-semibold text-[18px] text-[#F06711]">Our Story</span>
                            </div>

                            <p className="text-[#1F2937] font-bold text-[36px]">Efficient and Transparent Home Buying Solutions</p>
                        </div>

                        <p className="font-medium text-[#6B7280]">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>

                    </div>
                </div>

            </div>


            <div className="max-w-7xl px-8 mx-auto h-[583px] relative mt-10">

                <div className="relative mt-20 justify-end items-end flex flex-col">
                    <img className="w-[904px] h-[455px] " src="https://i.ibb.co/tmCkWmr/pexels-vo-thuy-tien-248787-2536970.jpg" alt="" />
                    <div className="absolute top-0 right-0 w-[904px] h-full" style={{ background: 'linear-gradient(0deg, #00000000 0%, #000000A6 65%, #000000CC 100%)' }}></div>
                </div>



                <div className="absolute bottom-0 left-8">
                    <div className="w-[592px] h-[294px] p-8 flex flex-col gap-6 bg-[#ECF5FF]">
                        <div className="h-[134px]">
                            <div className="flex gap-5 items-center">
                                <hr className="w-[51px] h-1 bg-[#F06711]" />
                                <span className="font-semibold text-[18px] text-[#F06711]">Our Story</span>
                            </div>

                            <p className="text-[#1F2937] font-bold text-[36px]">Efficient and Transparent Home Buying Solutions</p>
                        </div>

                        <p className="font-medium text-[#6B7280]">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>

                    </div>
                </div>

            </div>



            <div className="max-w-7xl px-8 mx-auto flex flex-col gap-16 mt-20">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-5 items-center">
                        <hr className="w-[51px] h-1 bg-[#F06711]" />
                        <span className="font-semibold text-[18px] text-[#F06711]">Our Teem</span>
                    </div>
                    <p className="text-[#111827] font-bold text-[40px]">Discover the Faces Behind Our Success</p>
                </div>
                <div className="h-[417px] relative">
                    <div className="flex gap-8">
                        <img className="h-[417px] w-[384px]" src="https://i.ibb.co/BzxZxKv/redd-f-pz-OUnvx9c1-E-unsplash.jpg" alt="" />

                        <img className="h-[417px] w-[384px]" src="https://i.ibb.co/RP50GBF/ali-morshedlou-WMD64t-Mfc4k-unsplash-1.jpg" alt="" />

                        <img className="h-[417px] w-[384px]" src="https://i.ibb.co/gvrX8Yv/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />

                    </div>
                    <div className="absolute -left-5 -right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a className="btn btn-circle text-white bg-[#5490CB]">❮</a>
                        <a className="btn btn-circle text-white bg-[#5490CB]">❯</a>
                    </div>
                </div>

            </div>



            <div className="max-w-7xl px-8 mx-auto mt-20">
                <div className="flex gap-[134px]">
                    <div className="flex flex-col gap-12  w-[696px]">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-5 items-center">
                                <hr className="w-[51px] h-1 bg-[#F06711]" />
                                <span className="font-semibold text-[18px] text-[#F06711]">Meet the Team For Book Consultation</span>
                            </div>
                            <p className="font-bold text-[40px] text-[#111827]">Meet the stewards of your heritage journey</p>
                            <p className="font-medium text-[#6B7280]">each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
                            </p>
                        </div>


                        <div className="flex">
                            <p className=" bg-[#0059B1] px-6 py-[14px] text-[#FFFFFF] font-semibold text-[18px] drop-shadow-lg">Book Consultation Now</p>
                        </div>

                    </div>
                    <div>
                        <img className="w-[384px] h-[330px]" src="https://i.ibb.co/fFBNgLM/pexels-pixabay-271795.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;