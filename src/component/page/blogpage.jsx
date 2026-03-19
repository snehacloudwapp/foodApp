import Blogsection from "../homeComponent/blog";
import GetMobileapp from "../homeComponent/getmobileapplicatin";
import Footer from "../layout/footer";
import Header from "../layout/header";

let Blogpage = () => {
    return (
        <>
            <Header />
            <div className="paddingtop169">
                <Blogsection />
            </div>

            <GetMobileapp />
            <Footer />
        </>
    )
}
export default Blogpage;