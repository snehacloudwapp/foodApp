import PopularItem from "../homeComponent/popularitem";
import Footer from "../layout/footer";
import Header from "../layout/header";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Row, Col, Button } from "react-bootstrap"

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
let Offer = () => {
    return (
        <>
            <Header />
            <div className="paddingtop169">
                <PopularItem />
            </div>

            {/* top exclusive deals start*/}
            <div className="deals deals_two deals_res">
                <div className="container ">
                    <Row className="mb_25px">
                        <Col xxl="10" sm="8">
                            <h2 className="titel">Today exclusive deals</h2>
                        </Col>
                        <Col xxl="2" sm="4" className="d-flex justify-content-end">
                            <Button className="thm-btn_two">View More</Button>
                        </Col>
                    </Row>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        // freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1000,      // 2.5 sec delay
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="deals_slick_thumb"><img src="https://risuvo.com/foodigo/uploads/custom-images/-2025-07-15-08-45-50-1145.jpg" /></SwiperSlide>
                        <SwiperSlide className="deals_slick_thumb"><img src="https://risuvo.com/foodigo/uploads/custom-images/-2025-07-15-08-45-34-6418.jpg" /></SwiperSlide>
                        <SwiperSlide className="deals_slick_thumb"><img src="https://risuvo.com/foodigo/uploads/custom-images/-2025-07-15-08-46-10-4848.jpg" /></SwiperSlide>
                        <SwiperSlide className="deals_slick_thumb"><img src="https://risuvo.com/foodigo/uploads/custom-images/-2025-07-15-08-45-16-4740.jpg" /></SwiperSlide>
                        <SwiperSlide className="deals_slick_thumb"><img src="https://risuvo.com/foodigo/uploads/custom-images/-2025-07-15-08-46-28-7331.jpg" /></SwiperSlide>


                    </Swiper>
                </div>
            </div>

            {/* top exclusive deals end*/}
            <Footer />
        </>
    )
}
export default Offer;