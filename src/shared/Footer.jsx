import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { PiHandPeace } from "react-icons/pi";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#ECF5FF] mt-16">
                <div className="footer text-base-content p-10">
                    <aside>
                        {/* <img  src="./imgs/Rectangle.png" alt=""> */}
                        <img className="h-[80px] w-[55px] rounded-lg object-cover" src="https://i.ibb.co/YbMd8tG/Screenshot-2024-09-03-184139.png" alt="" />

                            <p>
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
                <hr className=" bg-[#C5E2FF]"/>

                    <div className="container mx-auto flex justify-between items-center py-8">
                        <p className="text-sm text-[#111827]">&copy; 2024 Heritage- Nest. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#1DA1F2]"><IoLogoTwitter /></a>
                            <a href="#" className="text-[#0077B5]"><FaLinkedin /></a>
                            <a href="#" className="text-[#1877F2]"><IoLogoFacebook /></a>
                            <a href="#" className="text-[#0044FF]"><PiHandPeace /></a>
                        </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;