import React from "react";
import "./style.scss";
import { Col, Row } from "shards-react";
import { useHistory } from "react-router-dom";

export default function AddFund() {
    const history = useHistory();
    return (
        <div className="addFund">
            <h1>Authorize.Net Payment Form</h1>
            <Row>
                <Col sm={12} md={6}>
                    <div className="supported-cards">
                        <img
                            src="https://www.authorize.net/content/dam/anet-redesign/slider/payment-brand-logos_0002_discover.png"
                            alt="logos_0002_discover"
                        />
                        <img
                            src="https://www.authorize.net/content/dam/anet-redesign/slider/payment-brand-logos_0003_amex.png"
                            alt="payment-brand-logos_0003_amex"
                        />
                        <img
                            src="https://www.authorize.net/content/dam/anet-redesign/slider/payment-brand-logos_0006_visa.png"
                            alt="payment-brand-logos_0006_visa"
                        />
                        <img
                            src="https://www.authorize.net/content/dam/anet-redesign/slider/payment-brand-logos_0000_paypallogo.png"
                            alt="payment-brand-logos_0000_paypallogo"
                        />
                    </div>
                </Col>
            </Row>
            <div className="input-form">
                <Row>
                    <Col sm={12} md={6}>
                        <div className="inputField">
                            <strong htmlFor="name">Card Holder Name</strong>
                            <input type="text" name="name" id="name" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="inputField">
                            <strong htmlFor="Number">Card Number</strong>
                            <input type="text" name="Number" id="Number" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="inputField">
                            <strong htmlFor="Code">Card Code</strong>
                            <input type="text" name="Code" id="Code" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="inputField">
                            <strong htmlFor="Expiry">Card Expiry</strong>
                            <input type="text" name="Expiry" id="Expiry" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="inputField">
                            <strong htmlFor="zipcode">Zip Code</strong>
                            <input type="text" name="zipcode" id="zipcode" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}></Col>
                </Row>
                <div className="inputField mb-1">
                    <strong htmlFor="Address">Billing Address</strong>
                    <input type="text" name="Address" id="Address" />
                </div>
                <div className="submit">Submit</div>
                <span className="Docs">
                    <span onClick={() => history.push("/required-documents")}>
                        Click Here
                    </span>{" "}
                    to View Documents Requirements
                </span>
            </div>
        </div>
    );
}
