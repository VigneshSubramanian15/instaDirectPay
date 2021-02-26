import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { Row, Col } from "shards-react";
import swal from "sweetalert";
import "../style.scss";
import "./style.scss";
export default function UserData() {
    const history = useHistory();
    const { userId } = useParams();
    const [fundDetails, setFundDetails] = useState({
        reciver_id: "",
        sender_id: "admin",
        wallet_id: "",
        method: "manual",
        is_credit: "",
        description: "",
        amount: {
            value: "",
            currency: "",
        },
    });
    const [userdata, setUser] = useState(null);
    useEffect(() => {
        axios
            .post(process.env.REACT_APP_URL + "/admin/getuser", { id: userId })
            .then((res) => {
                if (res.status === 200) {
                    const { _id, wallet_id } = res.data.user;
                    setUser(res.data.user);
                    setFundDetails((fundDetails) => ({
                        ...fundDetails,
                        reciver_id: _id,
                        wallet_id,
                    }));
                }
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const addFundDetails = (e) => {
        if (e.target.name === "date") {
            setFundDetails((fundDetails) => ({
                ...fundDetails,
                [e.target.name]: new Date(e.target.value),
            }));
        } else {
            setFundDetails((fundDetails) => ({
                ...fundDetails,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const fundApiCall = (is_credit) => {
        if (fundDetails.description && fundDetails.amount.value) {
            axios
                .post(process.env.REACT_APP_URL + "/addFund", {
                    ...fundDetails,
                    is_credit,
                })
                .then((res) => {
                    if (res.status === 200) {
                        setFundDetails({
                            reciver_id: "",
                            sender_id: "admin",
                            wallet_id: "",
                            method: "manual",
                            is_credit: "",
                            description: "",
                            amount: {
                                value: "",
                                currency: "",
                            },
                        });
                        setUser((userdata) => ({
                            ...userdata,
                            amount: res.data.amount,
                        }));
                        swal(
                            "Success!",
                            "Fund added Successfully !",
                            "success"
                        );
                    }
                })
                .catch((err) => {
                    alert("transcation error");
                });
        } else {
            swal("Oops!", "Fill all the fields !", "warning");
        }
    };

    return (
        <div className="admin userData">
            <div className="content">
                <span onClick={() => history.push("/admin")} className="close">
                    <AiFillCloseCircle />
                </span>
                <h2>User Information</h2>
                <Row>
                    <Col className="coll" sm={12} md={6} lg={6}>
                        <table className="table">
                            <tr>
                                <td>First Name :</td>
                                <td className="bold">
                                    {userdata && userdata.first_name}
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name :</td>
                                <td className="bold">
                                    {userdata && userdata.last_name}
                                </td>
                            </tr>
                            <tr>
                                <td>Contact Number :</td>
                                <td className="bold">
                                    {userdata && userdata.phone_number}
                                </td>
                            </tr>
                            <tr>
                                <td>Email Address :</td>
                                <td className="bold">
                                    {userdata && userdata.email}
                                </td>
                            </tr>
                            <tr>
                                <td> Address :</td>
                                <td className="bold">
                                    {userdata && userdata.address}
                                </td>
                            </tr>
                        </table>
                    </Col>
                    <Col sm={12} md={5} lg={5}>
                        <table className="table">
                            <tr>
                                <td>Account Number :</td>
                                <td className="bold">
                                    {userdata && userdata.card_details.number}
                                </td>
                            </tr>
                            <tr>
                                <td>Date Of Join :</td>
                                <td className="bold">
                                    {userdata &&
                                        new Date(userdata.join_date).getDate()}
                                    -
                                    {userdata &&
                                        new Date(
                                            userdata.join_date
                                        ).getMonth() + 1}
                                    -
                                    {userdata &&
                                        new Date(
                                            userdata.join_date
                                        ).getFullYear()}
                                </td>
                            </tr>
                            <tr>
                                <td>Expire Date :</td>
                                <td className="bold">
                                    {userdata &&
                                        new Date(
                                            userdata.card_details.expires
                                        ).getDate()}
                                    -
                                    {userdata &&
                                        new Date(
                                            userdata.card_details.expires
                                        ).getMonth() + 1}
                                    -
                                    {userdata &&
                                        new Date(
                                            userdata.card_details.expires
                                        ).getFullYear()}
                                </td>
                            </tr>
                        </table>
                        <div className="amount-balance">
                            <span>Total Amount Balance: </span>
                            <span>{userdata && userdata.amount}</span>
                            <div
                                className={`fund-btn ${
                                    userdata && userdata.card_details.isenabled
                                        ? "danger"
                                        : ""
                                }`}
                            >
                                <button>
                                    {userdata && userdata.card_details.isenabled
                                        ? "Suspend User"
                                        : "Activate User"}
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div className="add-fund">
                            <div className="title">Add Fund</div>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="input-fied">
                                        <input
                                            type="number"
                                            placeholder="Amount"
                                            id="amount"
                                            value={fundDetails.amount.value}
                                            name="amount"
                                            onChange={(e) => {
                                                setFundDetails(
                                                    (fundDetails) => ({
                                                        ...fundDetails,
                                                        amount: {
                                                            value: parseInt(
                                                                e.target.value
                                                            ),
                                                            currency: "INR",
                                                        },
                                                    })
                                                );
                                            }}
                                        />
                                    </div>
                                    {/* <div className="input-fied">
                                        <input
                                            type="date"
                                            onChange={addFundDetails}
                                            name="date"
                                            id="Date"
                                        />
                                    </div> */}
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="input-fied">
                                        <input
                                            placeholder="Description"
                                            type="text"
                                            value={fundDetails.description}
                                            onChange={addFundDetails}
                                            id="Description"
                                            name="description"
                                        />
                                    </div>
                                    <div className="fund-btn mt-4">
                                        <button
                                            onClick={() => fundApiCall(true)}
                                        >
                                            Credit Fund
                                        </button>
                                        <button
                                            onClick={() => fundApiCall(false)}
                                            className="warning"
                                        >
                                            Debit Fund
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
