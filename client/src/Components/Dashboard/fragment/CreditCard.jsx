import React from "react";
import { Col, Row } from "shards-react";
import { useHistory } from "react-router-dom";
import { FcSimCardChip } from "react-icons/fc";
import chipImg from "../icons8-chip-card-30.png";
import visa from "./../../../Images/visa-1.png";
import Tilt from "react-parallax-tilt";

export default function CreditCard({
    last_name,
    first_name,
    isSuspended,
    cardNumber,
}) {
    return (
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Tilt gyroscope={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="info">
                            <img src={visa} alt="" />
                            <span className="chip">
                                {/* <FcSimCardChip /> */}
                                <img
                                    src={chipImg}
                                    alt=""
                                    width={50}
                                    srcset=""
                                />{" "}
                            </span>
                            <div className="card-no">
                                {" "}
                                {cardNumber &&
                                    cardNumber.toString().slice(0, 4) +
                                        " " +
                                        cardNumber.toString().slice(4, 8) +
                                        " " +
                                        cardNumber.toString().slice(8, 12) +
                                        " " +
                                        cardNumber.toString().slice(12, 16)}
                            </div>
                            <div className="cvv">
                                <span>CVV</span> <span>XXX</span>
                            </div>
                            <div className="expire">
                                <span>EXPIRES END</span>
                                <div className="date-label">
                                    <div className="upper-labels">
                                        MONTH/YEAR
                                    </div>
                                    <div className="date">XX/XX</div>
                                </div>
                            </div>
                            <div className="name">
                                {first_name} {last_name}
                            </div>
                            <div className="active-status">
                                {isSuspended ? "Active" : "Inactive"}
                            </div>
                        </div>
                        <div className="card-design one"></div>
                        <div className="card-design two"></div>
                    </div>
                </div>
            </Tilt>
        </Col>
    );
}
