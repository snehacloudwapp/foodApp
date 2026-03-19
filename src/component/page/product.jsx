import Footer from "../layout/footer";
import Header from "../layout/header";
import { Row, Col, Form, Button, Tab, Nav } from "react-bootstrap"
import { CiSearch } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import Beeftacoswithromaine from "../../assets/featured_food/Beeftacoswithromaine.webp"
import Friedchickenwingsandfish from "../../assets/featured_food/Friedchickenwingsandfish.webp"
import Friedmacaroniandsausage from "../../assets/featured_food/Friedmacaroniandsausage.webp"
import GrilledChickenpiecescarrots from "../../assets/featured_food/GrilledChickenpiecescarrots.png"
import Pennepastaintomatosauce from "../../assets/featured_food/Pennepastaintomatosauce.webp"
import RoastedTurkeyPotatoes from "../../assets/featured_food/RoastedTurkeyPotatoes.webp"
import { IoIosHeartEmpty } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import restaurantlogo from "../../assets/featured_food/restaurant-logo.webp"
import { BiCartAdd } from "react-icons/bi";
import React, { useState } from "react";
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

import Slider from "@mui/material/Slider";

let Product = () => {
    const [value, setValue] = useState([20, 80]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // form data 
    const foodData = [
        {
            id: 1,
            img: Beeftacoswithromaine,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Friedchickenwingsandfish,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 3,
            img: Friedmacaroniandsausage,
            price: "$30.00",
            rating: 1,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 1,
            img: GrilledChickenpiecescarrots,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Pennepastaintomatosauce,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 3,
            img: RoastedTurkeyPotatoes,
            price: "$30.00",
            rating: 1,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 1,
            img: Beeftacoswithromaine,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Friedchickenwingsandfish,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 1,
            img: Beeftacoswithromaine,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Friedchickenwingsandfish,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 3,
            img: Friedmacaroniandsausage,
            price: "$30.00",
            rating: 1,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 1,
            img: GrilledChickenpiecescarrots,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Pennepastaintomatosauce,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 3,
            img: RoastedTurkeyPotatoes,
            price: "$30.00",
            rating: 1,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 1,
            img: Beeftacoswithromaine,
            price: "$30.00",
            rating: 5,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },
        {
            id: 2,
            img: Friedchickenwingsandfish,
            price: "$30.00",
            rating: 0,
            title: "Spicy pork minced tomatoes",
            items: ["4 Chicken", "Sauce", "Spicy"],
            company: "Retro Chef",
        },

    ];
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // per page 6 cards

    // Index calculate
    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;

    // Slice cards
    const currentCards = foodData.slice(firstIndex, lastIndex);

    // Total pages
    const totalPages = Math.ceil(foodData.length / cardsPerPage);

    return (

        <>
            <Header />
            <div className="inner_banner ">
                <div className="container">
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="offer">
                <div className="container">
                    <Row>
                        <Col xxl="3" lg="3">
                            <div className="filter">
                                <div className="filter_txt">
                                    <h6>Filters</h6>
                                </div>
                                <div className="filter_item">
                                    <Form>
                                        <div className="filter_inner">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Short By</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Most Recent
                                                            </Form.Label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                        <div className="filter_inner">
                                            <Accordion defaultActiveKey="1" >
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Select Cuisine</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Bengali
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Check type="checkbox" />
                                                            <Form.Label className="" >
                                                                Chinese
                                                            </Form.Label>                                                  Bengali
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Check type="checkbox" />
                                                            <Form.Label className="" >
                                                                Japanese
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Check type="checkbox" />
                                                            <Form.Label className="" >
                                                                Italian
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Check type="checkbox" />
                                                            <Form.Label className="" >
                                                                Spanish
                                                            </Form.Label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>

                                        </div>
                                        <div className="filter_inner">
                                            <Accordion defaultActiveKey="2">
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        Categories
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Cookie
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Burger
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Pizza
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Donut
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <Form.Group className="">
                                                                <Form.Check required className='' />
                                                            </Form.Group>
                                                            <Form.Label className="" >
                                                                Skewer
                                                            </Form.Label>
                                                        </div>
                                                        <a>See More</a>

                                                    </Accordion.Body>

                                                </Accordion.Item>

                                            </Accordion >
                                        </div>
                                        {/* price range start */}
                                        <div className="filter_item">
                                            <div className="filter_inner">
                                                <Accordion defaultActiveKey="3">
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>Price Range</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Slider
                                                                value={value}
                                                                onChange={handleChange}

                                                                min={0}
                                                                max={100}
                                                            />

                                                            <span class="example-val_item d-flex justify-content-between align-items-center">
                                                                <span class="example-val" id="slider-margin-value-min">${value[0]}</span>
                                                                <span class="example-val" id="slider-margin-value-max">${value[1]}</span>
                                                            </span>


                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>

                                            </div>
                                        </div>
                                        {/* price range end */}
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col xxl="9" lg="9">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                                <div className="offer_top_bar">
                                    <Nav variant="pills" className="d-flex gap-3">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className="d-flex justify-content-center">Food
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className="d-flex justify-content-center">Restaurants
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                </div>

                                <Tab.Content>
                                    <Tab.Pane eventKey="first"> {/* featured food start */}

                                        <Row className="g-5">
                                            {
                                                currentCards.map((item, index) => (
                                                    <Col xxl="4" lg="4" sm="6" key={index}>
                                                        <div className="food_card_item">
                                                            <div className="food_card_item_thumb_main">
                                                                <div className="food_card_item_thumb">
                                                                    <img src={item.img} />
                                                                </div>
                                                                <div className="food_card_item_thumb_overlay ">
                                                                    <div className="wishlist_icon d-flex justify-content-center align-items-center">
                                                                        <IoIosHeartEmpty color="red" size="22" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="food_card_item_inner">
                                                                <div className="food_card_item_inner_top d-flex justify-content-between align-items-center">
                                                                    <h5 className="">{item.price}</h5>
                                                                    <p className="">
                                                                        <span className="d-flex align-items-center">
                                                                            <GoStarFill color="#f9c200" size={18} />
                                                                        </span>
                                                                        0<span className="">({item.rating}+)</span>
                                                                    </p>
                                                                </div>
                                                                <div className=""><h5>{item.title}</h5></div>
                                                                <ul className="food_card_list d-flex align-items-center">
                                                                    {item.items.map((itm, i) => (
                                                                        <li key={i}>{itm}</li>
                                                                    ))}
                                                                </ul>
                                                                <div className="food_card_btm_item">
                                                                    <div className="food_card_company d-flex align-items-center">
                                                                        <div >
                                                                            <img src={restaurantlogo} className="food_card_company_thumb" />
                                                                        </div>
                                                                        <div className="food_card_company_name">{item.company}</div>
                                                                    </div>
                                                                    <div className="food_card_btn d-flex align-items-center">
                                                                        <Button className="thm-btn_four d-flex align-items-center justify-content-center"> <BiCartAdd size={22} />
                                                                            "Add to Cart"</Button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                        <Row>
                                            <Col>{/* Pagination Buttons */}
                                                <div className="pagination_box d-flex justify-content-center mt-4">
                                                    {Array.from({ length: totalPages }).map((_, index) => (
                                                        <button
                                                            key={index}
                                                            className={currentPage === index + 1 ? "active_page_btn" : "page_btn"}
                                                            onClick={() => setCurrentPage(index + 1)}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    ))}
                                                </div></Col>
                                        </Row>
                                        {/* featured food end */}

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="restaurant">
                                            <div className="container">

                                                <Row className="g-4">
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                    <Col xxl="4" lg="4" sm="6">
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
                                                </Row>
                                            </div>
                                        </div >

                                    </Tab.Pane>
                                </Tab.Content>


                            </Tab.Container>

                        </Col>
                    </Row >
                </div >
            </div >
            <Footer />
        </>)
}
export default Product;