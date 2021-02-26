import React, { useState } from "react";
import { Col, Row } from "shards-react";
import "./style.scss";
import DataTableComponent from "./fragment/DataTable";
import CreditCard from "./fragment/CreditCard";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import visa from "./../../Images/visa-new.png";

export default function Real({ userData }) {
    const { _id } = userData && userData.userId;
    let history = useHistory();
    const [apidata, setapidata] = useState("");
    const {
        account_number = "",
        account_type = "",
        isSuspended = "",
        first_name = "",
        last_name = "",
        amount = "",
        card_details = "",
    } = apidata && apidata;

    useEffect(() => {
        axios
            .post(process.env.REACT_APP_URL + "/getUserData", { id: _id })
            .then((res) => {
                if (res.status === 200) {
                    setapidata(res.data);
                }
            })
            .catch((err) => history.push("/login"));
    }, []);
    return (
        <div className="dashboard">
            <Row>
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div className="account-info card">
                        <div className="balance">
                            <span>Available Balance</span>
                            <span>$ {amount} USD</span>
                        </div>
                        <div className="info mt-4">
                            <div>
                                Account Number :{" "}
                                <span>
                                    {" "}
                                    {account_number.toString().slice(0, 3) +
                                        " " +
                                        account_number.toString().slice(3, 6) +
                                        " " +
                                        account_number.toString().slice(6, 9) +
                                        " " +
                                        account_number.toString().slice(9, 12)}
                                </span>
                            </div>
                            <div>
                                Account Type: <span>{account_type}</span>
                            </div>
                            <div>
                                Account Status:{" "}
                                <span>
                                    {userData && userData.isSuspended
                                        ? "Active"
                                        : "InActive"}
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
                <CreditCard
                    isSuspended={isSuspended}
                    first_name={first_name}
                    last_name={last_name}
                    cardNumber={card_details ? card_details.number : ""}
                />
            </Row>
            <div className="data-table">
                <DataTableComponent id={_id} />
            </div>
        </div>
    );
}
