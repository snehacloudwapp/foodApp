import { Row, Col, Button, Form } from "react-bootstrap"
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { FiTwitter } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import footerimg1 from "../../assets/footer/footerimg1.webp"
import footerimg2 from "../../assets/footer/footerimg2.webp"
import footerimg3 from "../../assets/footer/footerimg3.webp"
import footerimg4 from "../../assets/footer/footerimg4.webp"
import footerimg5 from "../../assets/footer/footerimg5.webp"
// import { a } from "react-router-dom"


let Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <Row>
                        <Col>

                            <div className="footer_top_circle_ani"></div>
                            <div className="footer_top_circle_ani two"></div>
                            <div className="footer_top_circle_ani three"></div>
                            <div className="footer_top_circle_ani four"></div>

                        </Col>
                    </Row>
                    <Row>
                        <Col xxl="3" lg="3">
                            <div className="footer_logo">
                                <img src="https://risuvo.com/foodigo/uploads/website-images/footer-logo-2025-04-29-08-25-22-1866.svg" />
                            </div>
                            <div className="footer_txt">
                                <p>Great platform for the food ordering platform passionate about food. Find your delicious food easier, passionate about food for you!. </p>
                            </div>
                            <ul className="footer_social_icon d-flex align-items-center">
                                <li>
                                    <a href="" target="blank">
                                        <span className="d-flex justify-content-center align-items-center"><CgFacebook size={25} className="footersocialicon" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank">
                                        <span className="d-flex justify-content-center align-items-center"><FiTwitter size={25} className="footersocialicon" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <BsInstagram size={25} className="footersocialicon" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank">
                                        <span className="d-flex justify-content-center align-items-center"><FaLinkedinIn size={25} className="footersocialicon" /></span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col xxl="9" lg="9">
                            <Row className="footer_ml">
                                <Col xxl="4" lg="4">
                                    <div className="footer_txt_item">
                                        <h5>Popular as</h5>
                                    </div>
                                    <ul className="footer_link">
                                        <li>
                                            <a href="#"> <span className="arrowicon"><IoIosArrowForward />
                                            </span>
                                                Terms & Conditions</a>

                                        </li>
                                        <li>
                                            <a href="#"> <span className="arrowicon"><IoIosArrowForward />
                                            </span>
                                                Privacy Policy</a>


                                        </li>
                                        <li>
                                            <a href="#"><span className="arrowicon"><IoIosArrowForward />
                                            </span>
                                                Our Blog</a>

                                        </li>
                                        <li>
                                            <a href="#"><span className="arrowicon"><IoIosArrowForward />
                                            </span>
                                                Contact us</a>

                                        </li>
                                    </ul>
                                </Col>
                                <Col xxl="4" lg="4" className="photo_gallery_ml">
                                    <div className="footer_txt_item">
                                        <h5>Photo Gallery</h5>
                                    </div>
                                    <div className="footer_photo_gallery_item">
                                        <div className="footer_photo_gallery_inner d-flex align-items-center ">
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg1} /></a>
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg2} /></a>
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg3} /></a>
                                        </div>
                                        <div className="footer_photo_gallery_inner two  d-flex align-items-center ">
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg4} /></a>
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg5} /></a>
                                            <a href="#" className="footer_photo_gallery_thumb "><img src={footerimg1} /></a>
                                        </div>
                                    </div>

                                </Col>
                                <Col xxl="4" lg="4">
                                    <div className="footer_txt_item">
                                        <h5> Newsletter</h5>
                                    </div>
                                    <Form className="footer_newsletter_form">
                                        <div className="footer_newsletter_form_item">
                                            <label className="form-label">Subscribe newsletter to get updates
                                            </label>
                                            <div className="footer_newsletter_form_inner d-flex align-items-center justify-content-between">
                                                <input type="email" className="form-control" placeholder="Email Address" />
                                                <Button type="submit" className="thm-btn d-flex justify-content-center align-items-center">Subscribe</Button>
                                            </div>
                                        </div>




                                    </Form>
                                    <div className="footer_payment">
                                        <div className="footer_payment_txt">
                                            <h5>We accept Payment methods:
                                            </h5>
                                        </div>
                                        <div className="footer_payment_thumb">
                                            <img src="https://risuvo.com/foodigo/uploads/custom-images/intro-two--2025-04-21-06-55-52-5612.webp" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <Row>
                        <Col xxl="6" lg="6" md="7">
                            <div className="copyright_left_txt">
                                <a><span>Copyright 2025, QuomodoSoft. All Rights Reserved.</span></a>
                            </div>
                        </Col>
                        <Col xxl="6" lg="6" md="5">
                            <ul className="copyright_rigth_txt  d-flex justify-content-end align-items-center">
                                <li>
                                    <a>Privacy Policy</a>
                                </li>
                                <li>
                                    <a>Terms & Conditions</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Footer;