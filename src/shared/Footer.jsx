import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { PiHandPeace } from "react-icons/pi";

const Footer = () => {
    return (
        <div className="bg-[#ECF5FF]">
            <div className="max-w-7xl mx-auto ">
                <footer className=" mt-16 ">
                    <div className="footer text-base-content px-8 py-12">
                        <aside className="w-[320px] items-center">
                            {/* <img  src="./imgs/Rectangle.png" alt=""> */}
                            <img className="h-[80px] w-[55px] rounded-lg object-cover" src="https://i.ibb.co/YbMd8tG/Screenshot-2024-09-03-184139.png" alt="" />

                            <p className="text-[16px] text-[#475467] py-2">
                                Design amazing digital expriences that create more happy in the world.
                            </p>
                        </aside>
                        <nav className="font-semibold text-[#475467] ">
                            <h6 className="text-[14px] text-[#667085]">Product</h6>
                            <a className="link link-hover">overview</a>
                            <a className="link link-hover">Features</a>
                            <a className="link link-hover">Solutions</a>
                            <a className="link link-hover">Tutorials</a>
                            <a className="link link-hover">Pricing</a>
                            <a className="link link-hover">Releases</a>
                        </nav>
                        <nav className="font-semibold text-[#475467]">
                            <h6 className="text-[14px] text-[#667085]">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Press</a>
                            <a className="link link-hover">News</a>
                            <a className="link link-hover">Media kit</a>
                            <a className="link link-hover">Contact</a>
                        </nav>
                        <nav className="font-semibold text-[#475467]">
                            <h6 className="text-[14px] text-[#667085]">Resourecs</h6>
                            <a className="link link-hover">Blog</a>
                            <a className="link link-hover">Newsletter</a>
                            <a className="link link-hover">Event</a>
                            <a className="link link-hover">Help Center</a>
                            <a className="link link-hover">Tutorials</a>
                            <a className="link link-hover">Support</a>
                        </nav>
                        <nav className="font-semibold text-[#475467]">
                            <h6 className="text-[14px] text-[#667085]">Social</h6>
                            <a className="link link-hover">Twitter</a>
                            <a className="link link-hover">LinkedIn</a>
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Github</a>
                            <a className="link link-hover">AngelList</a>
                            <a className="link link-hover">Dribble</a>
                        </nav>
                        <nav className="font-semibold text-[#475467]">
                            <h6 className="text-[14px] text-[#667085]">Legal</h6>
                            <a className="link link-hover">Terms </a>
                            <a className="link link-hover">Privacy</a>
                            <a className="link link-hover">Cookie</a>
                            <a className="link link-hover">Licenses</a>
                            <a className="link link-hover">Setting</a>
                            <a className="link link-hover">Contact</a>
                        </nav>

                    </div>
                    <div className="px-8">
                        <hr className=" bg-[#C5E2FF] h-1" />

                    </div>
                    <div className=" flex justify-between items-center p-8">
                        <p className="text-sm text-[#667085]">&copy; 2024 Heritage- Nest. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#0059B1]"><IoLogoTwitter /></a>
                            <a href="#" className="text-[#0059B1]"><FaLinkedin /></a>
                            <a href="#" className="text-[#0059B1]"><FaFacebook /></a>
                            <a href="#" className="text-[#0059B1]"><PiHandPeace /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;