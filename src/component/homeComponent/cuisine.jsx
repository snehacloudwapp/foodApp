
import { Row, Col, Button, Container } from "react-bootstrap"
import bengali from "../../assets/cuisine/Bengali.webp"
import chinese from "../../assets/cuisine/Chinese.webp"
import italian from "../../assets/cuisine/Italian.webp"
import japanese from "../../assets/cuisine/Japanese.webp"
import spanish from "../../assets/cuisine/Spanish.webp"
let Cuisine = () => {
    return (<>
        <div className="cuisine">
            <div className="container">
                <Row className="mb_25px">
                    <Col xxl="10" sm="8">
                        <h2 className="titel">Select Cuisine</h2>
                    </Col>
                    <Col xxl="2" sm="4" className="d-flex justify-content-end">
                        <Button className="thm-btn_two ">View More</Button>
                    </Col>
                </Row>

                <Row className="">
                    <Col xxl="12" >
                        <div className="cuisine_item_main d-flex justify-content-between align-items-center">
                            <div className="cuisine_item">
                                <div className="cuisine_item_thumb_main d-flex justify-content-center align-items-center">
                                    <div className="cuisine_item_thumb">'
                                        <img src={bengali}></img>
                                    </div>
                                </div>
                                <div className="cuisine_item_txt_main">'
                                    <h4 className="cuisine_item_txt">Bengali</h4>
                                    <p className="d-flex justify-content-center align-items-center"><span></span>
                                        6 Restaurants
                                    </p>
                                </div>

                            </div>
                            <div className="cuisine_item">
                                <div className="cuisine_item_thumb_main">
                                    <div className="cuisine_item_thumb">'
                                        <img src={chinese}></img>
                                    </div>
                                </div>
                                <div className="cuisine_item_txt_main">'
                                    <h4 className="cuisine_item_txt">Chinese</h4>
                                    <p className="d-flex justify-content-center align-items-center"><span></span>
                                        6 Restaurants
                                    </p>
                                </div>

                            </div>
                            <div className="cuisine_item">
                                <div className="cuisine_item_thumb_main">
                                    <div className="cuisine_item_thumb">'
                                        <img src={italian}></img>
                                    </div>
                                </div>
                                <div className="cuisine_item_txt_main">'
                                    <h4 className="cuisine_item_txt">Italian</h4>
                                    <p className="d-flex justify-content-center align-items-center"><span></span>
                                        6 Restaurants
                                    </p>
                                </div>

                            </div>
                            <div className="cuisine_item">
                                <div className="cuisine_item_thumb_main">
                                    <div className="cuisine_item_thumb">'
                                        <img src={japanese}></img>
                                    </div>
                                </div>
                                <div className="cuisine_item_txt_main">'
                                    <h4 className="cuisine_item_txt">Japanese</h4>
                                    <p className="d-flex justify-content-center align-items-center"><span></span>
                                        6 Restaurants
                                    </p>
                                </div>

                            </div>
                            <div className="cuisine_item">
                                <div className="cuisine_item_thumb_main">
                                    <div className="cuisine_item_thumb">'
                                        <img src={spanish}></img>
                                    </div>
                                </div>
                                <div className="cuisine_item_txt_main">'
                                    <h4 className="cuisine_item_txt">Spanish</h4>
                                    <p className="d-flex justify-content-center align-items-center"><span></span>
                                        6 Restaurants
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>


    </>)
}

export default Cuisine;