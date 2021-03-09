import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import swal from "sweetalert";
import "./style.scss";
export default function Transfer({ userData }) {
    const [senderDetails, setsenderDetails] = useState(null);
    const [accountNumber, setAccountNumber] = useState(0);
    const [fundDetails, setFundDetails] = useState({
        reciver_id: "",
        sender_id: userData.userId._id,
        wallet_id: "",
        method: "manual",
        is_credit: true,
        description: "",
        amount: {
            value: "",
            currency: "INR",
        },
    });
    const getUserData = () => {
        if (accountNumber.length === 12) {
            axios
                .post(process.env.REACT_APP_URL + "/searchAccountNumber", {
                    account_number: accountNumber,
                })
                .then((res) => {
                    setsenderDetails(res.data);
                    console.log(res.data);
                    setFundDetails((fundDetails) => ({
                        ...fundDetails,
                        reciver_id: res.data._id,
                        wallet_id: res.data.wallet_id,
                    }));
                });
        } else {
            swal("Oops", "Enter Account Number Correctly ", "warning");
        }
    };

    const addFund = () => {
        if (fundDetails.description && fundDetails.amount.value) {
            if (fundDetails.amount.value < userData.userId.amount) {
                axios
                    .post(process.env.REACT_APP_URL + "/transferFund", {
                        ...fundDetails,
                        is_credit: true,
                    })
                    .then((res) => {
                        if (res.status === 200) {
                            setFundDetails({
                                reciver_id: senderDetails._id,
                                sender_id: userData.userId._id,
                                wallet_id: senderDetails.wallet_id,
                                method: "manual",
                                is_credit: true,
                                description: "",
                                amount: {
                                    value: "",
                                    currency: "INR",
                                },
                            });
                            swal(
                                "Success!",
                                "Fund added Successfully !",
                                "success"
                            ).then(() => setsenderDetails(null));
                        }
                    })
                    .catch((err) => {
                        alert("transcation error");
                    });
            } else {
                swal("Oops", "Insufficient Fund ", "warning");
            }
        } else {
            swal("Oops!", "Fill all the fields !", "warning");
        }
    };
    return (
        <div className="transfer">
            {!senderDetails ? (
                <div className="send">
                    <h1>Send To Wallet Account</h1>
                    <div className="input-field">
                        <strong>RECEIVER'S ACCOUNT NUMBER</strong>
                        <input
                            type="number"
                            onChange={({ target: { value } }) =>
                                setAccountNumber(value)
                            }
                        />
                        <button onClick={getUserData}>Proceed</button>
                    </div>
                </div>
            ) : (
                <div className="send sender">
                    <h3>User Information </h3>
                    <div>
                        First Name :<span> {senderDetails.first_name}</span>
                    </div>

                    <div>
                        Last Name :<span> {senderDetails.last_name}</span>
                    </div>
                    <div>
                        Email : <span>{senderDetails.email}</span>
                    </div>
                    <div>
                        Account Type : <span>{senderDetails.account_type}</span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            value={fundDetails.amount.value}
                            name="amount"
                            onChange={({ target }) => {
                                setFundDetails((fundDetails) => ({
                                    ...fundDetails,
                                    amount: {
                                        value: target.value,
                                        currency: "INR",
                                    },
                                }));
                            }}
                            max={userData.userId.amount}
                        />
                        <small>
                            Your Current Balance
                            <span> {userData.userId.amount}</span>
                        </small>
                        {/* <button className="mt-3">Add Fund</button> */}
                    </div>
                    <div className="input-field">
                        <label htmlFor="remark">Remarks</label>
                        <input
                            id="remark"
                            type="type"
                            value={fundDetails.description}
                            onChange={({ target }) => {
                                setFundDetails((fundDetails) => ({
                                    ...fundDetails,
                                    [target.name]: target.value,
                                }));
                            }}
                            name="description"
                            max={userData.userId.amount}
                        />

                        <button onClick={addFund} className="mt-3">
                            Add Fund
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
