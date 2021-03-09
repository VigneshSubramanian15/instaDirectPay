import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Col, Row } from "shards-react";
import "./style.scss";
import { ImHome3 } from "react-icons/im";
import { HiCash } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { BiTransfer, BiCreditCard } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";

export const Layout = ({ component: Component, ...res }) => {
    const path = window.location.pathname.split("/")[1];
    let history = useHistory();
    let userdata = JSON.parse(sessionStorage.getItem("userData"));
    if (!userdata) {
        history.push("/login");
    }
    if (res.title) {
        document.title = res.title;
    } else {
        document.title = "Element Vape";
    }
    return (
        <React.Fragment>
            <Router></Router>
            <Route
                {...res}
                render={(props) => {
                    return (
                        <div className="app">
                            <div className="content">
                                <Row>
                                    <Col sm={12} md={2} lg={2}>
                                        <div className="nav">
                                            <ul>
                                                <li
                                                    className={
                                                        path === "app"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push("/app")
                                                    }
                                                >
                                                    <span>
                                                        <ImHome3 />
                                                    </span>
                                                    Dashboard
                                                </li>
                                                <li
                                                    className={
                                                        path === "addfund"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push("/addfund")
                                                    }
                                                >
                                                    <span>
                                                        <HiCash />
                                                    </span>
                                                    Add Fund
                                                </li>
                                                <li
                                                    className={
                                                        path === "transfer"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push(
                                                            "/transfer"
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <BiTransfer />
                                                    </span>
                                                    Transfer
                                                </li>
                                                <li>
                                                    <span>
                                                        <BiCreditCard />
                                                    </span>
                                                    Withdrawal
                                                </li>
                                                <li
                                                    className={
                                                        path === "transaction"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push(
                                                            "/transaction"
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <BiTransfer />
                                                    </span>
                                                    Transcation
                                                </li>
                                                <li
                                                    className={
                                                        path ===
                                                        "cardactivation"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push(
                                                            "/cardactivation"
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <BsCreditCard />
                                                    </span>
                                                    Card Activation
                                                </li>
                                                <li
                                                    className={
                                                        path === "settings"
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        history.push(
                                                            "/settings"
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <MdSettings />
                                                    </span>
                                                    Account Settings
                                                </li>
                                            </ul>
                                            <div className="logout">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <AiOutlineLogout />
                                                        </span>{" "}
                                                        Logout
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={10} lg={10}>
                                        {userdata && (
                                            <Component
                                                userData={userdata}
                                                {...props}
                                            />
                                        )}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};
