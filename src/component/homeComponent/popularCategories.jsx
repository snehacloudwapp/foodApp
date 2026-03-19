
import { Row, Col, Button, Card } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { IoIosHeartEmpty } from "react-icons/io";
import { GoStarFill } from "react-icons/go";

import cake from "../../assets/categoryfolder/chicken.svg"
import chicken from "../../assets/categoryfolder/cake.svg"
import cutlery from "../../assets/categoryfolder/cutlery.svg"
import donut from "../../assets/categoryfolder/donut.svg"
import drink from "../../assets/categoryfolder/drink.svg"
import noodles from "../../assets/categoryfolder/noodles.svg"
import pizza from "../../assets/categoryfolder/pizza.svg"
import rice from "../../assets/categoryfolder/rice.svg"
import skewer from "../../assets/categoryfolder/cake.svg"
import hotdog from "../../assets/categoryfolder/hotdog.svg"
import { BiCartAdd } from "react-icons/bi";
import restaurantlogo from "../../assets/featured_food/restaurant-logo.webp"
import Beeftacoswithromaine from "../../assets/featured_food/Beeftacoswithromaine.webp"
import Friedchickenwingsandfish from "../../assets/featured_food/Friedchickenwingsandfish.webp"
import Friedmacaroniandsausage from "../../assets/featured_food/Friedmacaroniandsausage.webp"
import GrilledChickenpiecescarrots from "../../assets/featured_food/GrilledChickenpiecescarrots.png"
import Pennepastaintomatosauce from "../../assets/featured_food/Pennepastaintomatosauce.webp"
import RoastedTurkeyPotatoes from "../../assets/featured_food/RoastedTurkeyPotatoes.webp"
let PopularCategories = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="categories">
                <div className="container">
                    {/* populer categories start */}
                    <Row>
                        <Col xxl="10" sm="8">
                            <h2 className="titel"> Popular Categories</h2>
                        </Col>
                        <Col xxl="2" sm="4" className="d-flex justify-content-end">
                            <Button className="thm-btn_two ">View More</Button>
                        </Col>
                    </Row>
                    <Row className="categoriessilk">

                        <Swiper
                            slidesPerView={6}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,      // 2.5 sec delay
                                disableOnInteraction: false,
                            }} modules={[Pagination, Autoplay]}
                            className="mySwiper" >
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={cake} />
                                </div>
                                <h4>Cake</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={chicken} />
                                </div>
                                <h4>Chicken</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={cutlery} />
                                </div>
                                <h4>Cutlery</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={donut} />
                                </div>
                                <h4>Donut</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={drink} />
                                </div>
                                <h4>Drink</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={noodles} />
                                </div>
                                <h4>Noodles</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={pizza} />
                                </div>
                                <h4>Pizza</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={rice} />
                                </div>
                                <h4>Rice</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={skewer} />
                                </div>
                                <h4>Skewer</h4>
                            </SwiperSlide>
                            <SwiperSlide className="categories_item ">
                                <div className="categoryimg">
                                    <img src={hotdog} />
                                </div>
                                <h4>Hotdog</h4>
                            </SwiperSlide>
                        </Swiper>

                    </Row>
                    {/* populer categories start */}
                    {/* featured food start */}
                    <Row className="mb_25px ">
                        <Col xxl="10" sm="8">
                            <h2 className="titel"> Featured Foods
                            </h2>
                        </Col>
                        <Col xxl="2" sm="4" className="d-flex justify-content-end">
                            <Button className="thm-btn_two ">View More</Button>
                        </Col>
                    </Row>
                    <Row className="g-5">
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Beeftacoswithromaine} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(5+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center" onClick={handleShow}> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Friedchickenwingsandfish} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Friedmacaroniandsausage} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>
                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(1+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={GrilledChickenpiecescarrots} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Pennepastaintomatosauce} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={RoastedTurkeyPotatoes} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Beeftacoswithromaine} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div className="food_card_item">
                                <div className="food_card_item_thumb_main">
                                    <div className="food_card_item_thumb">
                                        <img src={Beeftacoswithromaine} />
                                    </div>
                                    <div className="food_card_item_thumb_overlay ">
                                        <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                            <IoIosHeartEmpty color="red" size="22" />
                                        </div>

                                    </div>
                                </div>

                                <div className="food_card_item_inner">
                                    <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                        <h5 className="">$30.00</h5>
                                        <p className="">
                                            <span className="d-flex align-items-center">
                                                <GoStarFill color="#f9c200" size={18} />
                                            </span>
                                            0<span className="">(0+)</span>
                                        </p>
                                    </div>
                                    <div className=""><h5>Spicy pork minced tomatoes</h5></div>
                                    <ul className="food_card_list d-flex align-items-center">
                                        <li>4 Chicken</li>
                                        <li>Sauce </li>
                                        <li>Spicy</li>
                                    </ul>
                                    <div className="food_card_btm_item">
                                        <div className="food_card_company d-flex align-items-center">
                                            <div >
                                                <img src={restaurantlogo} className="food_card_company_thumb" />
                                            </div>
                                            <div className="food_card_company_name"> Retro Chef</div>
                                        </div>
                                        <div className="food_card_btn d-flex align-items-center">
                                            <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                "Add to Cart"</Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>

                    </Row>

                    {/* featured food end */}
                </div>
            </div>
            {/* item detail modal start */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* item detail modal end */}

        </>

    )
}
export default PopularCategories;