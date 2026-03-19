import { Row, Col, Button, Card } from "react-bootstrap"
import Beeftacoswithromaine from "../../assets/featured_food/Beeftacoswithromaine.webp"
import Friedchickenwingsandfish from "../../assets/featured_food/Friedchickenwingsandfish.webp"
import Friedmacaroniandsausage from "../../assets/featured_food/Friedmacaroniandsausage.webp"
import GrilledChickenpiecescarrots from "../../assets/featured_food/GrilledChickenpiecescarrots.png"
import Pennepastaintomatosauce from "../../assets/featured_food/Pennepastaintomatosauce.webp"
import RoastedTurkeyPotatoes from "../../assets/featured_food/RoastedTurkeyPotatoes.webp"
import restaurantlogo from "../../assets/featured_food/restaurant-logo.webp"
import { IoIosHeartEmpty } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { BiCartAdd } from "react-icons/bi";
let PopularItem = () => {
    return (<>

        <div className="popular" >
            <div className="container">
                <Row className="mb_25px">
                    <Col xxl="10" sm="8">
                        <h2 className="titel">Most Popular Items</h2>
                    </Col>
                    <Col xxl="2" sm="4" className="d-flex justify-content-end">
                        <Button className="thm-btn_two">View More</Button>
                    </Col>
                </Row>
                <Row className="g-5">
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className="">
                                    <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                    </a>
                                </div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className=""> <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                </a></div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className=""> <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                </a></div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className=""> <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                </a></div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className=""> <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                </a></div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xxl="4" lg="4" sm="6">
                        <div className="food_card_item d-flex">
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
                                            <GoStarFill color="#f9c200" />
                                        </span>
                                        0<span className="">(0+)</span>
                                    </p>
                                </div>
                                <div className=""> <a className="food_card_modal_btn">  <h5>Spicy pork minced tomatoes</h5>
                                </a></div>
                                <ul className="food_card_list d-flex align-items-center">
                                    <li>4 Chicken</li>
                                    <li>Sauce </li>

                                </ul>
                                <div className="food_card_btm_item d-flex">
                                    <div className="food_card_company d-flex align-items-center">
                                        <div >
                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                        </div>
                                        <div className="food_card_company_name"> Retro Chef</div>
                                    </div>
                                    <div className="food_card_btn d-flex align-items-center">
                                        <Button className="thm-btn_three  d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                            Add </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    </>)
}
export default PopularItem;

