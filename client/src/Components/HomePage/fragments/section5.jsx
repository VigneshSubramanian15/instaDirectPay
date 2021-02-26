import React from "react";
import { Row, Col } from "shards-react";
import acccountImg from "../../../Images/icons/create-account.png";
import paymentImg from "../../../Images/icons/make-payment.png";
import withdraw from "../../../Images/icons/withdraw.png";
export default function Section5() {
    return (
        <section className="section-5">
            <div className="part first">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="7" xl="7">
                        <Row className="complex-card">
                            <Col xs="2" sm="2" md="2" lg="2" xl="2"></Col>

                            <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                <div className="wrapper">
                                    <h4>
                                        Create Account{" "}
                                        <span>
                                            <img
                                                src={acccountImg}
                                                alt=""
                                                srcset=""
                                            />
                                        </span>
                                    </h4>{" "}
                                    <div className="card">
                                        It will take little bit of time to make
                                        Direct insta Pay Wallet nd it will take
                                        all your payments details in one place,
                                        you can also choose 30 currencies
                                    </div>
                                </div>
                            </Col>
                            <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                <div className="wrapper">
                                    <h4>
                                        Make Payment{" "}
                                        <span>
                                            <img
                                                src={paymentImg}
                                                alt=""
                                                srcset=""
                                            />
                                        </span>
                                    </h4>{" "}
                                    <div className="card">
                                        Stay in manage with simple, improvised
                                        and rappid payment methods, which
                                        includes save paying cards andyour
                                        account balance
                                    </div>
                                    <h4 className="mt-4">
                                        Withdraw Fund{" "}
                                        <span>
                                            <img
                                                src={withdraw}
                                                alt=""
                                                srcset=""
                                            />
                                        </span>
                                    </h4>{" "}
                                    <div className="card mb-4">
                                        MOVE FUNDS INCLUDING WINNINGS FROM
                                        DIRECT-INSTA PAY TO YOUR FINANCIAL
                                        INSTITUTION ACCOUNT IMMEDIATELY OR MAKE
                                        ATM WITHDRAWALS. Type a message
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="5" xl="5">
                        <div className="content">
                            <h2 className="mt-5">
                                Get Started <br /> Now
                            </h2>
                            <button className="mb-5">Account</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="part second">
                {/* <img src={bg} width="100%" alt="" srcset="" /> */}
                <div className="overlay">
                    <span>D</span>
                    <span>I</span>
                    <span>P</span>
                </div>
            </div>
        </section>
    );
}
