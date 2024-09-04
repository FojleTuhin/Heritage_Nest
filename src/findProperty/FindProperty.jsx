import Properties from "../components/Properties";
import SearchBar from "../components/SearchBar";
import Staticks from "../components/Staticks";
import Testimonial from "../components/Testimonial";

const FindProperty = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <Staticks></Staticks>
            <Properties></Properties>
            <Testimonial></Testimonial>
        </div>
    );
};

export default FindProperty;