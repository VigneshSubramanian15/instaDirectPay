import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useHistory } from "react-router-dom";
import { Alert, Fade } from "shards-react";
import { Col, Row } from "shards-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
export default function Register() {
    let history = useHistory();
    const [alertInfo, setAlertInfo] = useState(false);
    const [body, setBody] = useState({
        account_type: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        email: "",
        password: "",
    });
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState(false);

    const setDataToBody = ({ target: { value, name } }) => {
        setBody((body) => ({ ...body, [name]: value }));
        if (value) {
            try {
                document
                    .querySelector(`input[name="${name}"]`)
                    .classList.remove("error");
            } catch (error) {
                if (name === "account_type") {
                    document.getElementById(name).classList.remove("error");
                }
            }
        } else {
            try {
                document
                    .querySelector(`input[name="${name}"]`)
                    .classList.add("error");
            } catch (error) {
                if (name === "account_type") {
                    document.getElementById(name).classList.add("error");
                }
            }
        }
    };

    const confirmPassword = ({ target: { value } }) => {
        if (password === value) {
            setConfirmpass(true);
        } else {
            setConfirmpass(false);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        let canExecute = true;
        let temp = body;
        temp = { ...temp, password };
        Object.keys(temp).map((key) => {
            if (temp[key] === "") {
                if (key !== "password") {
                    canExecute = false;
                    try {
                        document
                            .querySelector(`input[name="${key}"]`)
                            .classList.add("error");
                    } catch (error) {
                        console.log({ error: key });
                        if (key === "account_type") {
                            document.getElementById(key).classList.add("error");
                        }
                    }
                }
            }
        });
        if (confirmpass) {
            if (canExecute) {
                axios
                    .post(process.env.REACT_APP_URL + "/register", temp)
                    .then((res) => {
                        if (res.status === 200) {
                            sessionStorage.setItem(
                                "userData",
                                JSON.stringify({ userId: res.data })
                            );
                            history.push("/upload");
                        } else {
                            setAlertInfo(true);
                            setTimeout(() => {
                                setAlertInfo(false);
                            }, 2000);
                        }
                        console.log({ status: "success", res });
                    })
                    .catch((err) => {
                        setAlertInfo(true);
                        setTimeout(() => {
                            setAlertInfo(false);
                        }, 2000);
                    });
            }
        }
    };
    return (
        <React.Fragment>
            <div className="register">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="3" lg="3" xl={4} className="login-left">
                            <div className="action-button">
                                <MDBBtn onClick={() => history.push("/login")}>
                                    Sign In
                                </MDBBtn>
                                <MDBBtn className="active-btn">Sign Up</MDBBtn>
                            </div>
                            <p className="login-copyright">
                                &copy; {new Date().getFullYear()} Direct Insta
                                Pay, All Rights Reserved.
                            </p>
                        </MDBCol>
                        <MDBCol md="9" lg="9" xl={8} className="login-right">
                            <Fade in={alertInfo}>
                                <Alert className="login-error" theme="danger">
                                    Error Creating Account
                                </Alert>
                            </Fade>
                            <form action="" onSubmit={formSubmit}>
                                <div className="form-holder">
                                    <div className="form-holder-inner">
                                        {/* <MDBMedia
                                        object
                                        center
                                        src={logo}
                                        alt=""
                                        className="d-flex login-logo"
                                    /> */}
                                        <div className="form-inner">
                                            <form
                                                class="needs-validation"
                                                novalidate
                                            >
                                                <div className="grey-text">
                                                    <Row>
                                                        <Col
                                                            sm={12}
                                                            md={12}
                                                            lg={12}
                                                        >
                                                            <div className="input-wrapper">
                                                                <select
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                    className="browser-default custom-select"
                                                                    required
                                                                    name="account_type"
                                                                    id="account_type"
                                                                >
                                                                    <option
                                                                        disabled
                                                                        selected
                                                                    >
                                                                        Choose
                                                                        your
                                                                        Account
                                                                        Type
                                                                    </option>
                                                                    <option value="personal">
                                                                        Personal
                                                                    </option>
                                                                    <option value="business">
                                                                        Business
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={6}
                                                            lg={6}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="fname">
                                                                    First Name
                                                                </label>
                                                                <input
                                                                    required
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                    name="first_name"
                                                                    type="text"
                                                                    id="fname"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={6}
                                                            lg={6}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="lname">
                                                                    Last Name
                                                                </label>
                                                                <input
                                                                    name="last_name"
                                                                    required
                                                                    type="text"
                                                                    id="lname"
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={12}
                                                            lg={12}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="phone-number">
                                                                    Phone Number
                                                                </label>
                                                                <input
                                                                    name="phone_number"
                                                                    required
                                                                    type="number"
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                    id="phone-number"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={12}
                                                            lg={12}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="address">
                                                                    Address
                                                                </label>
                                                                <input
                                                                    required
                                                                    name="address"
                                                                    type="text"
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                    id="address"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={12}
                                                            lg={12}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="email">
                                                                    Email
                                                                    Address
                                                                </label>
                                                                <input
                                                                    name="email"
                                                                    required={
                                                                        true
                                                                    }
                                                                    type="email"
                                                                    onChange={
                                                                        setDataToBody
                                                                    }
                                                                    id="email"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={6}
                                                            lg={6}
                                                            className="mb-3"
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="password">
                                                                    Password
                                                                </label>
                                                                <input
                                                                    required
                                                                    name="password"
                                                                    onChange={({
                                                                        target: {
                                                                            value,
                                                                        },
                                                                    }) => {
                                                                        confirmPassword(
                                                                            {
                                                                                target: {
                                                                                    value,
                                                                                },
                                                                            }
                                                                        );
                                                                        setPassword(
                                                                            value
                                                                        );
                                                                    }}
                                                                    type="password"
                                                                    id="password"
                                                                />
                                                                {/* <small>
                                                                    Password
                                                                    should
                                                                    contain at
                                                                    least One
                                                                    Uppercase ,
                                                                    One
                                                                    Lowercase
                                                                    Letter and
                                                                    Should be
                                                                    alpha
                                                                    Numeric
                                                                </small> */}
                                                            </div>
                                                        </Col>
                                                        <Col
                                                            sm={12}
                                                            md={6}
                                                            lg={6}
                                                        >
                                                            <div className="input-wrapper">
                                                                <label htmlFor="cpassword">
                                                                    Confirm
                                                                    Password
                                                                </label>
                                                                <input
                                                                    name="cpassword"
                                                                    required
                                                                    onChange={
                                                                        confirmPassword
                                                                    }
                                                                    type="password"
                                                                    id="cpassword"
                                                                />
                                                                {confirmpass && (
                                                                    <span>
                                                                        <AiOutlineCheckCircle />
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        color="primary"
                                                        type="submit"
                                                        onSubmit={formSubmit}
                                                        onClick={formSubmit}
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </React.Fragment>
    );
}
