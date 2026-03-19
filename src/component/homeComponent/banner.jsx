
import { Carousel, Form, Button, Row, Col } from "react-bootstrap"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerimg1 from "../../assets/bannerimg/bannerimg1.webp"
import bannerimg2 from "../../assets/bannerimg/bannerimg2.webp"
import { CiSearch } from "react-icons/ci";
import addtocardimg from "../../assets/workpeocessimg/addtocart.webp"
import enjoyfood from "../../assets/workpeocessimg/enjoyfood.webp"
import flexiblepayment from "../../assets/workpeocessimg/flexiblepayment.webp"
import searchproduct from "../../assets/workpeocessimg/searchproduct.webp";

let Banner = () => {
    return (
        <>
            <div className="bannersection paddingtop169">
                <div className="sliderimg">
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        fadeEffect={{ crossFade: true }}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,      // 2.5 sec delay
                            disableOnInteraction: false,
                        }} modules={[EffectFade, Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={bannerimg1} className="w-100" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bannerimg2} className="w-100" />
                        </SwiperSlide>

                    </Swiper>

                </div>
                <div className="sliderimgcontent">
                    <div className="maincontent text-center">
                        <h1>Buy or Sell your Delicious Food Effortlessly!</h1>
                    </div>
                    <div className="bannersearchbox mt-5  d-flex justify-content-center">
                        <Form >
                            <div className="bannerform d-flex">
                                <div className="inpsearch d-flex gap-2 align-items-center flex-grow-1">
                                    <CiSearch size={30} />

                                    <Form.Group controlId="validationFormik01" className="w-100">
                                        <Form.Control type="text" className="inputarea border-bottom w-100" name="firstName" placeholder="Food Title or key" />
                                    </Form.Group>
                                </div>

                                <Button type="submit" className="signinbtn px-5 py-3 fontPlusJakarta">Search Now</Button>
                            </div>


                        </Form>
                    </div>
                    <ul className="popular_link d-flex justify-content-center">
                        <li>Popular:</li>
                        <li>
                            <a href="#">pizza</a>,
                        </li>
                        <li>  <a href="#">chicken</a>,
                        </li>
                        <li>
                            <a href="#">chocolate</a>
                        </li>
                    </ul>
                </div>
                <div className="work_prosses">
                    <div className="container">
                        <Row className="g-4">
                            <Col lg="3" xxl="3" md="4" sm="6">
                                <div className="work_prosses_item d-flex ">
                                    <div className="work_process_thumb d-flex align-items-center"><img src={searchproduct} /></div>
                                    <div className="work_prosses_txt">
                                        <h4>
                                            Search Product
                                        </h4>
                                        <p>Unlocking you effect product searching</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" xxl="3" md="4" sm="6">
                                <div className="work_prosses_item d-flex ">
                                    <div className="work_process_thumb d-flex align-items-center"><img src={addtocardimg} /></div>
                                    <div className="work_prosses_txt">
                                        <h4>
                                            Add to Cart
                                        </h4>
                                        <p>Add to Cart for Instant Retail Gratification</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" xxl="3" md="4" sm="6">
                                <div className="work_prosses_item d-flex ">
                                    <div className="work_process_thumb d-flex align-items-center"><img src={enjoyfood} /></div>
                                    <div className="work_prosses_txt">
                                        <h4>

                                            Enjoy Food
                                        </h4>
                                        <p>A Journey to Enjoying Food’s Delights</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" xxl="3" md="4" sm="6">
                                <div className="work_prosses_item d-flex ">
                                    <div className="work_process_thumb d-flex align-items-center"><img src={flexiblepayment} /></div>
                                    <div className="work_prosses_txt">
                                        <h4>
                                            Flexible Payment
                                        </h4>
                                        <p>Pay online with Multiple credit Cards or Cash!</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner;