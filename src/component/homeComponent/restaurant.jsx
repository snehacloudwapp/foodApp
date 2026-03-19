import { Row, Col, Button, Card } from "react-bootstrap"
import restaurantbanner1 from "../../assets/restaurant/restaurantbanner1.jpg"
import restaurantbanner2 from "../../assets/restaurant/restaurantbanner2.jpg"
import antonio from "../../assets/restaurant/antonio.webp"
import barisalfood from "../../assets/restaurant/barisalfood.webp"
import bogers from "../../assets/restaurant/bogers.webp"
import brazilfood from "../../assets/restaurant/brazilfood.webp"
import burgerxpress from "../../assets/restaurant/burgerxpress.webp"
import kombucha from "../../assets/restaurant/kombucha.webp"
import pigga from "../../assets/restaurant/pigga.webp"
import retrochef from "../../assets/restaurant/retrochef.webp"
import antoniologo from "../../assets/restaurant/antoniologo.webp"
import bogerslogo from "../../assets/restaurant/bogerslogo.webp"
import brazilfoodlogo from "../../assets/restaurant/brazilfoodlogo.webp"
import burgerlogo from "../../assets/restaurant/burgerlogo.webp"
import pizzalogo from "../../assets/restaurant/pizzalogo.webp"
import retrocheflogo from "../../assets/restaurant/retrocheflogo.webp"
import { CiLocationOn } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";

let Restaurants = () => {
    return (
        <>
            <div className="restaurant">
                <div className="container">
                    <Row className="g-4 mb_80px">
                        <Col xxl="6" sm="6">
                            <div className="resturant_thum1">
                                <img src={restaurantbanner1} className="restaurant_ads" />
                            </div>
                        </Col>
                        <Col xxl="6" sm="6">
                            <div className="resturant_thum1">
                                <img src={restaurantbanner2} className="restaurant_ads" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb_25px">
                        <Col xxl="10" sm="8">
                            <h2 className="titel">All Restaurant</h2>
                        </Col>
                        <Col xxl="2" sm="4" className="d-flex justify-content-end">
                            <Button className="thm-btn_two ">View More</Button>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={antonio} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={burgerlogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="d-flex align-items-center">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={barisalfood} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={burgerlogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={bogers} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={pizzalogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={brazilfood} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={bogerslogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={burgerxpress} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={burgerlogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={kombucha} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={brazilfoodlogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={pigga} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={antoniologo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col xxl="3" lg="4" sm="6">
                            <div>

                                <div className="food_card_item ">
                                    <div className="food_card_item_thumb_main">
                                        <div className="food_card_item_thumb d-flex ">
                                            <img src={retrochef} />
                                        </div>
                                        <div className="food_card_item_thumb_overlay">
                                            <div className="badge">
                                                <h6>Featured</h6>

                                            </div>
                                            <a href="#" className="open_btn">Open</a>
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_logo_main d-flex justify-content-center align-items-center">
                                        <div className="food_card_restaurant_logo d-flex justify-content-center align-items-center">
                                            <img src={retrocheflogo} />
                                        </div>
                                    </div>
                                    <div className="food_card_restaurant_name d-flex justify-content-center align-items-center">
                                        <h5> Barisal Food
                                            <span></span>
                                        </h5>
                                    </div>
                                    <div className="food_card_item_inner">
                                        <div className="food_card_btm_item d-flex justify-content-between align-items-center">
                                            <p className="food_card_company_location d-flex align-items-center">
                                                <span>
                                                    <CiLocationOn size={22} />
                                                </span>
                                                Barishal
                                            </p>
                                            <span className="dot"></span>
                                            <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                <p className="d-flex align-items-center">
                                                    <span  className="d-flex align-items-center">
                                                        <GoStarFill color="#f9c200" size={18} />
                                                    </span>
                                                    0

                                                    <span>(0)</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    )

}

export default Restaurants;