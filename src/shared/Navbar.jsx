
const Navbar = () => {





    return (
        <div className="bg-[#ECF5FF]">
            <div className="max-w-7xl mx-auto flex justify-between text-[18px] px-8 items-center py-2">
                <div className="md:flex gap-8  hidden">
                    <p className="link link-hover">Buy</p>
                    <p className="link link-hover">Sell</p>
                    <p className="link link-hover">Services</p>
                </div>
                <div>
                    <img className="h-[80px] w-[55px] rounded-lg object-cover" src="https://i.ibb.co/YbMd8tG/Screenshot-2024-09-03-184139.png" alt="" />
                </div>
                <div className="flex gap-8">
                    <p className="hidden md:block link link-hover">Manage Rentals</p>
                    <p className="font-medium link link-hover">Sign in</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;