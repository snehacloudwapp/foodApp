// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FcGoogle } from "react-icons/fc";



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import loginimg1 from "../../assets/login/loginbannerimg1.webp"
import loginimg2 from "../../assets/login/loginbannerimg2.webp"
import loginimg3 from "../../assets/login/loginbannerimg3.webp"
import { useNavigate } from 'react-router-dom';
import { MdOutlineFacebook } from "react-icons/md";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap"
let LoginPage = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="sign_up">

                <div className="sign_up_left_side">
                    <div className="s-logo" onClick={() => navigate("/")}>
                        <img src="https://risuvo.com/foodigo/uploads/website-images/logo-2025-04-29-08-20-19-6442.svg" />
                    </div>
                    <div className="sign_up_left_slider_main">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="sign_up_left_slider_thumb">
                                        <img src={loginimg1} />
                                    </div>
                                    <div className="sign_up_left_slider_txt">
                                        <h3>Effortless for Ordering your delectable Cuisine</h3>

                                        <p>Seize the moment and help shape the future by starting a career in blockchain now, the moment and help shape the future by starting</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="sign_up_left_slider_thumb">
                                        <img src={loginimg2} />
                                    </div>
                                    <div className="sign_up_left_slider_txt">
                                        <h3>Simple method for Choosing Your Location</h3>
                                        <p>Seize the moment and help shape the future by starting a career in blockchain now, the moment</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="sign_up_left_slider_thumb">
                                        <img src={loginimg3} />
                                    </div>
                                    <div className="sign_up_left_slider_txt">
                                        <h3>Simplified to delight in your Flavorful meals</h3>

                                        <p>Seize the moment and help shape the future by starting a career in blockchain now, the moment and help shape the future by starting</p>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
                <div className="sign_up_right_side">
                    <div className='sign-up-main'>
                        <div className='sign-up-text d-flex justify-content-center'>
                            <h2>Sign In</h2>
                        </div>
                        <div className='signup-df'>
                            <div className='sign-up-top-btn'>
                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                    <span><FcGoogle size={25} />
                                    </span>
                                    Sign In with Google
                                </a>
                            </div>
                            <div className='sign-up-top-btn'>
                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                    <span><MdOutlineFacebook size={25} color="blue" />
                                    </span>
                                    Sign In with Google
                                </a>
                            </div>
                        </div>
                        <div className="sign-up-top-btn-text d-flex align-items-center">
                            <p>Or sign In with email</p>
                        </div>
                        <Form className="sign-up-from">
                            <Row className="mb-3 sign-up-from-item" >
                                <div className="sign-up-from-inner">
                                    <Form.Group as={Col} md="12" >
                                        <Form.Label className='form-lable'>Email</Form.Label>
                                        <Form.Control required type="email" placeholder="Enter Email" className="form-control" />
                                    </Form.Group>
                                </div>
                                <div className="sign-up-from-inner">
                                    <Form.Group as={Col} md="12" >
                                        <Form.Label className='form-lable'>Password</Form.Label>
                                        <Form.Control required type="password" placeholder="enter password" />
                                    </Form.Group>
                                </div>
                                <div className='sign-up_df d-flex justify-content-between align-items-center'>
                                    <div className="form-check  d-flex align-items-center justify-content-center mb-0">
                                        <Form.Group className="">
                                            <Form.Check required className='' />
                                        </Form.Group>
                                        <Form.Label className="form-check-label pb-0 mb-0" >
                                            Agree to terms and conditions
                                        </Form.Label>
                                    </div>
                                    <a href='#' className="forgot_password_btn">
                                        Forgot Password
                                    </a>
                                </div>
                            </Row>
                            <Button type="submit" className="thm-btn w-100">Sign In</Button>
                        </Form>
                        <div className="sign_up_btm_txt">
                            <p>
                                Do not have an account?
                                <span onClick={() => navigate("/signup")}>
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}
export default LoginPage;