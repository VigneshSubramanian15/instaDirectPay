import React from "react";
import { Card, Col, Row } from "shards-react";
import "./style.scss";
export default function CardStatus() {
    return (
        <div className="card-category">
            <h1>Purchase a Plan to activate card</h1>
            <Row>
                <Col
                    className="reduce-margin"
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={3}
                >
                    <Card>
                        <div className="content-card">
                            <h1>Pawns</h1>
                            <div className="amt">5,000 USD</div>
                            <small>
                                This card is worldwide acceptable with all the
                                World Rookie VisaCard Perks
                            </small>
                            <strong>USD 500 per day Withdrawal</strong>
                            <div className="bold">Till 10,000 USD</div>
                            <small>
                                To get world Rookie Visacard you have to pay
                                1,000 USD .
                            </small>
                            <button>Continue </button>
                        </div>
                    </Card>
                </Col>
                <Col
                    className="reduce-margin"
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={3}
                >
                    <Card>
                        <div className="content-card">
                            <h1>Bishops</h1>
                            <div className="amt">10,000 USD</div>
                            <small>
                                This card is worldwide acceptable with all the
                                World Rookie VisaCard Perks
                            </small>
                            <strong>USD 1000 per day Withdrawal</strong>
                            <div className="bold">Till 20,000 USD</div>
                            <small>
                                To get world Rookie Visacard you have to pay
                                1,000 USD .
                            </small>
                            <button>Continue </button>
                        </div>
                    </Card>
                </Col>
                <Col
                    className="reduce-margin"
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={3}
                >
                    <Card>
                        <div className="content-card">
                            <h1>Queen </h1>
                            <div className="amt">1 BTC</div>
                            <small>
                                This card is worldwide acceptable with all the
                                World Rookie VisaCard Perks
                            </small>
                            <strong>USD 10,000 per day Withdrawal</strong>
                            <div className="bold">No Limit Withdrawal</div>
                            <small>
                                To get world Rookie Visacard you have to pay 1
                                BTC.
                            </small>
                            <button>Continue </button>
                        </div>
                    </Card>
                </Col>
                <Col
                    className="reduce-margin"
                    xs={12}
                    sm={6}
                    md={3}
                    lg={3}
                    xl={3}
                >
                    <Card>
                        <div className="content-card">
                            <h1>King </h1>
                            <div className="amt">2 BTC</div>
                            <small>
                                This card is worldwide acceptable with all the
                                World Rookie VisaCard Perks
                            </small>
                            <strong>Premium Customer</strong>
                            <div className="bold">No Limit Withdrawal</div>
                            <small>
                                To get world Rookie Visacard you have to pay 2
                                BTC.
                            </small>
                            <button>Continue </button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
