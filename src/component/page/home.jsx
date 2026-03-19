import Banner from "../homeComponent/banner";
import PopularCategories from '../homeComponent/popularCategories';
import Cuisine from '../homeComponent/cuisine';
import Restaurants from '../homeComponent/restaurant';
import PopularItem from '../homeComponent/popularitem';
import Fooddeliveryservice from '../homeComponent/fooddeliveryservic';
import Blogsection from '../homeComponent/blog';
import GetMobileapp from '../homeComponent/getmobileapplicatin';
import Header from "../layout/header";
import Footer from "../layout/footer"

let Homepage = () => {
    return (
        <>
            <Header />
            <Banner />
            <PopularCategories />
            <Cuisine />
            <Restaurants />
            <PopularItem />
            <Fooddeliveryservice />
            <Blogsection />
            <GetMobileapp />
            <Footer />
        </>
    )
}
export default Homepage;