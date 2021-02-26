import React from "react";
import { Row, Col } from "shards-react";

export default function AccountInfo({ userdata }) {
    return (
        <Row>
            <Col sm={12} md={6} lg={6}>
                <div className="user-info">
                    <h3>User Information</h3>
                    <table className="table table-bordered">
                        <tr>
                            <td>First Name</td>
                            <td>{userdata.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{userdata.last_name}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{userdata.phone_number}</td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>{userdata.email}</td>
                        </tr>
                        <tr>
                            <td> Address</td>
                            <td>{userdata.address}</td>
                        </tr>
                    </table>
                </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
                <div className="user-info">
                    <h3>Account Information</h3>
                    <table className="table table-bordered">
                        <tr>
                            <td>Account Number</td>
                            <td>
                                {userdata.card_details.number + 1613023031714}
                            </td>
                        </tr>
                        <tr>
                            <td>Date Of Join</td>
                            <td>
                                {new Date(userdata.join_date).getDay()}-
                                {new Date(userdata.join_date).getMonth() + 1}-
                                {new Date(userdata.join_date).getFullYear()}
                            </td>
                        </tr>
                        <tr>
                            <td>Expire Date</td>
                            <td>
                                {new Date(
                                    userdata.card_details.expires
                                ).getDay()}
                                -
                                {new Date(
                                    userdata.card_details.expires
                                ).getMonth() + 1}
                                -
                                {new Date(
                                    userdata.card_details.expires
                                ).getFullYear()}
                            </td>
                        </tr>
                    </table>
                </div>
            </Col>
        </Row>
    );
}
