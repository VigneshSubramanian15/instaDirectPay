import React from "react";
import { Container, Row, Col } from "shards-react";
import creditcard from "./../../../Images/creditcard.png";
import illustration from "./../../../Images/illustration 2.png";
export default function Section4() {
    return (
        <section className="section-4">
            <div className="part">
                <Row>
                    <Col xs="12" sm="12" md="8" lg="8" xl="8">
                        <div className="content mt-5">
                            <h2>Direct Insta Pay Visa Card</h2>
                            <p>
                                our cards offers you the security and flexibilit
                                you need - online or in person. DIP is Accepted
                                at site, store and ATM around the world
                            </p>
                            <button>EXPLORE</button>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <img
                            className="credit"
                            src={creditcard}
                            alt=""
                            srcset=""
                        />
                    </Col>
                </Row>
            </div>
            <div className="part second">
                <Row>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <img
                            className="illustration"
                            src={illustration}
                            alt=""
                            srcset=""
                        />
                    </Col>
                    <Col xs="12" sm="12" md="8" lg="8" xl="8">
                        <div className="content mt-5">
                            <h2>Send Money Fast and Secure</h2>
                            <p>
                                send and receive money to almost anyone anywhere
                                in the world. paying with direct insta pay is
                                always instant, secure, and free
                            </p>
                            <button>EXPLORE</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
