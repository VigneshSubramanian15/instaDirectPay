import React, { useState } from "react";
import { Row, Col } from "shards-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Alert, Fade } from "shards-react";
import "./style.scss";
export default function Login() {
    let history = useHistory();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [alertInfo, setAlertInfo] = useState(false);
    const loginUser = (e) => {
        e.preventDefault();
        axios
            .post(process.env.REACT_APP_URL + "/login", { email, password })
            .then((res) => {
                sessionStorage.setItem(
                    "userData",
                    JSON.stringify({ userId: res.data })
                );
                if (res.data.documents) {
                    if (
                        res.data.documents.address_proof &&
                        res.data.documents.id_proof &&
                        res.data.documents.signature_photo &&
                        res.data.documents.profile_photo
                    ) {
                        history.push("/app");
                    } else {
                        history.push("/upload");
                    }
                } else {
                    history.push("/upload");
                }
            })
            .catch((err) => {
                setAlertInfo(true);
                setTimeout(() => {
                    setAlertInfo(false);
                }, 2000);
            });
    };
    return (
        <React.Fragment>
            <div className="Login-Page">
                <div>
                    <Row>
                        <Col md="3" lg="4" className="login-left">
                            <div className="action-button">
                                <button className="active-btn">Sign In</button>

                                <button
                                    onClick={() => history.push("/register")}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="login-copyright">
                                &copy; {new Date().getFullYear()} Direct Insta
                                Pay, All Rights Reserved.
                            </p>
                        </Col>
                        <Col md="9" lg="8" className="login-right">
                            <div className="form-holder">
                                <Fade in={alertInfo}>
                                    <Alert
                                        className="login-error"
                                        theme="danger"
                                    >
                                        The password that you've entered is
                                        incorrect.
                                    </Alert>
                                </Fade>
                                <div className="form-holder-inner">
                                    {/* <img
                                        src={logo}
                                        alt=""
                                        className="d-flex login-logo"
                                    /> */}
                                    <div className="form-inner">
                                        <form onSubmit={loginUser}>
                                            <div className="grey-text">
                                                <div className="input-wrapper">
                                                    <label htmlFor="email">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        onChange={({
                                                            target: { value },
                                                        }) => setemail(value)}
                                                        id="email"
                                                    />
                                                </div>
                                                <div className="input-wrapper">
                                                    <label htmlFor="password">
                                                        Password
                                                    </label>
                                                    <input
                                                        name="password"
                                                        onChange={({
                                                            target: { value },
                                                        }) =>
                                                            setPassword(value)
                                                        }
                                                        type="password"
                                                        id="password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <span
                                                // onClick={() =>
                                                //     setModal(true)
                                                // }
                                                >
                                                    Forgot Password
                                                </span>
                                                <button
                                                    type="submit"
                                                    color="primary"
                                                    onClick={loginUser}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <div className="end-design">
                                                <span></span>
                                            </div>
                                            <div className="google-signin">
                                                <button className="yellow">
                                                    View Demo
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}
