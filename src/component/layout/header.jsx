import { Navbar, Container, Modal, Nav, Button, NavDropdown, Form } from "react-bootstrap";
import { LuMapPin } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
let Header = () => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* top header start */}
            <div className="header">
                <Navbar className="bgorange">
                    <Container className="px-0">
                        <div className="location">

                            <Button className="locationtext fontPlusJakarta" onClick={handleShow}>
                                <LuMapPin className="me-2 " color="white" size={22} />
                                Select Location
                                <RiArrowDropDownLine size={35} />
                                
                            </Button>
                        </div>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className="opectionbtn">
                                <div className="dropdown">
                                    <Button className="counbtn dropdown-toggle counbtn" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                        $ USD
                                        <RiArrowDropDownLine size={35} />
                                    </Button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >

                                        <li><a href="#" className="dropdown-item" > USD</a></li>
                                        <li><a className="dropdown-item" href="#"> BDT</a></li>
                                        <li><a className="dropdown-item" href="#"> INR</a></li>
                                        <li><a className="dropdown-item" href="#"> NGN</a></li>

                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Button className="counbtn dropdown-toggle counbtn" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                        <MdLanguage size={25} className="me-2" />
                                        EN
                                        <RiArrowDropDownLine size={35} />
                                    </Button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">English</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Bangla</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="menu nav-bg">
                    <Navbar expand="lg" className="">
                        <Container className="p-0">
                            <Navbar.Brand href="#" className="d-flex align-items-center logimg p-0" onClick={() => navigate("/")}><img src="https://risuvo.com/foodigo/uploads/website-images/logo-2025-04-29-08-20-19-6442.svg" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto d-flex  align-items-center memu_bg_left" >
                                    <Nav.Link className="menua  pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/")}>Home</Nav.Link>
                                    <Nav.Link className="menua pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/product")}>Product</Nav.Link>
                                    <Nav.Link className="menua pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/about")}>About</Nav.Link>
                                    <Nav.Link className="menua pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/offer")}>Offer</Nav.Link>
                                    <Nav.Link className="menua pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/contactus")}>Contact Us</Nav.Link>
                                    <Nav.Link className="menua pe-4 pb-0 d-flex  align-items-center" onClick={() => navigate("/blog")}>Blog</Nav.Link>
                                </Nav>
                                <div className="righticon d-flex justify-content-center align-items-center gap-4">
                                    <div className="addtocard circle1 d-flex justify-content-center align-items-center"><IoIosHeartEmpty size={20} />
                                    </div>
                                    <div className="addtocard circle1 d-flex justify-content-center align-items-center"><PiShoppingCart size={20} />
                                    </div>
                                    <Button className="signinbtn text-black py-3 px-5 fontPlusJakarta d-flex align-items-center" onClick={() => navigate("/login")}><CiUser size={22} color="black" /> Sign In</Button>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            {/* location modal start */}
            <Modal show={show} onHide={handleClose}>
                <div className="hederlocation">
                    <Modal.Header closeButton className="locationmodalheader">
                        <h5 className="modal-title" id="staticBackdropLabel">Set Location</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter a Location"
                                    id="searchMapInput"
                                />

                            </Form.Group>
                        </Form>
                        <div className="">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29438.66601022888!2d75.890688!3d22.7344384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764680615310!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="location_modal-btn">
                            <button type="submit" class="thm-btn w-100">Save</button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
            {/* location modal end */}

            {/* top header end */}
        </>
    )
}

export default Header;