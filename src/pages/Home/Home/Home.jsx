import Banner from "../Banner/Banner";
import Benifit from "../Benifit/Benifit";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <Benifit />
        </div>
    );
};

export default Home;