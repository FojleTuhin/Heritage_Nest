import Property from "../components/Property";
import Services from "../components/Services";
import Hero_Banner from "./Hero_Banner";

const Home = () => {
    return (
        <div>
            
            <Hero_Banner></Hero_Banner>
            <Property></Property>
            <div className="px-8">
            <Services></Services>
            </div>

            
        </div>
    );
};

export default Home;