import { Row, Col } from "react-bootstrap"
import mobileimg from "../../assets/mobileapp/mobileappimg.webp"
import { PiAppleLogo } from "react-icons/pi";
import { BiLogoPlayStore } from "react-icons/bi";

let GetMobileapp = () => {
    return (

        <>
            <div className="mobile_app">
                <div className="container mobile_app_bg">

                    <Row>
                        <Col xxl="12" lg="12">
                            <div className="col-xxl-12">
                                <div className="mobile_app_animetion"></div>
                                <div className="mobile_app_animetion two"></div>
                                <div className="mobile_app_animetion three"></div>
                                <div className="mobile_app_animetion four"></div>
                            </div>
                        </Col>
                        <Col xxl="6" lg="6">
                            <div className="mobile_app_txt">
                                <h2>
                                    Get a Mobile Application Enjoy Food Experiences
                                </h2>
                                <p>
                                    We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                                </p>
                            </div>
                            <div className="mobile_app_btn d-flex align-items-center">
                                <div className="thm-btn_two two d-flex align-items-center">
                                    <span><BiLogoPlayStore size={25} />
                                    </span>
                                    Google Play
                                </div>
                                <div className="thm-btn_two two d-flex align-items-center ">
                                    <span><PiAppleLogo size={25} />
                                    </span>
                                    Apple Play
                                </div>
                            </div>
                        </Col>
                        <Col xxl="6" lg="6">
                            <div className="mobile_app_thum_main d-flex justify-content-center align-items-center" >
                                <div className="mobile_app_thum">
                                    <img src={mobileimg} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default GetMobileapp;