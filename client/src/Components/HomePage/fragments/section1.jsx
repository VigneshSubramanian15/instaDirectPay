import React, { useEffect, useState } from "react";
import heroImage from "../../../Images/Layer 1.webp";
import memberico from "../../../Images/icons/Layer 2.png";
import profitico from "../../../Images/icons/Layer 3.png";
import depositico from "../../../Images/icons/Layer 4.png";
import { Row, Col } from "shards-react";

export default function Section1() {
    const [navbg, setNavbg] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 150) {
                setNavbg(true);
            } else {
                setNavbg(false);
            }
        });
    });
    return (
        <section className="section-1">
            <img src={heroImage} width="100%" alt="" srcset="" />
            <div className={`nav ${navbg ? "hide" : ""}`}>
                <Row>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="logo">
                            <span>D</span>
                            <span>I</span>
                            <span>P</span>
                        </div>
                    </Col>
                    <Col
                        className="nav-list"
                        xs="8"
                        sm="8"
                        md="8"
                        lg="8"
                        xl="8"
                    >
                        <li>Home </li>
                        <li>Money Transfer</li>
                        <li>VISA Card</li>
                        <li>Fees</li>
                    </Col>
                </Row>
            </div>
            <div className="content">
                <div className="middle">
                    <h2>Send and Receive Money</h2>
                    <h3>Instantly</h3>
                    <div className="dec">
                        you can instantly send and receive money to almost
                        anyone anywhere in the world
                    </div>
                    <div className="button">
                        <button>Sing up</button>
                        <button>login</button>
                    </div>
                </div>
                <div className="info">
                    <div className="fragment">
                        <img src={memberico} alt="" srcset="" />
                        <div>
                            <span>5576</span>
                            <span>Total Members</span>
                        </div>
                    </div>
                    <div className="fragment">
                        <img src={depositico} alt="" srcset="" />
                        <div>
                            <span>5576</span>
                            <span>Total Deposit</span>
                        </div>
                    </div>
                    <div className="fragment">
                        <img src={profitico} alt="" srcset="" />
                        <div>
                            <span>5576</span>
                            <span>Total Profit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
