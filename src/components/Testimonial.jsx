
const Testimonial = () => {
    return (
        <div className="max-w-7xl md:px-8 mx-auto mt-20">

            <div className="flex flex-col gap-[35px] text-center">
                <h3 className="text-[#181818] text-[40px] font-bold text-center pb-8">Testimonials</h3>
                <div className="lg:flex pl-6 md:ml-0 gap-8 ">

                    <div className="bg-[#ECF5FF] py-8 w-[330px] h-[420px] md:w-[592px] md:h-[364px]  p-8">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px] text-[#818181] my-7">"The level Of the secuirity provided by Cypherplay is
                            unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace
                            of mind I wos looking for."</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/Hz0jFN0/pexels-italo-melo-881954-2379004.jpg" alt="" />
                            </div>

                            <h3 className="text-[#111827] text-[20px] font-semibold">Tony Stark</h3>
                            <p className="text-[#6B7280]">MArketing Manager, XYZ</p>
                        </div>
                    </div>
                    <div className="bg-[#ECF5FF] py-8 w-[330px] h-[420px] md:w-[592px] md:h-[364px]  p-8 mt-10 lg:mt-0">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px] text-[#818181] py-7 ">"The level Of the secuirity provided by Cypherplay is
                            unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace
                            of mind I wos looking for."</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/wwQ4nGW/pexels-nkhajotia-1516680.jpg" alt="" />
                            </div>

                            <h3 className="text-[#111827] text-[20px] font-semibold">Tony Stark</h3>
                            <p className="text-[#6B7280]">Marketing Manager, XYZ</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 justify-center mt-5 ">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                </div>
            </div>




        </div>
    );
};

export default Testimonial;