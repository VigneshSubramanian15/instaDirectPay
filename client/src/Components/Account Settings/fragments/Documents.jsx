import React from "react";
import { Row, Col } from "shards-react";

export default function Documents({ userdata }) {
    return (
        <div className="documents">
            <Row>
                <Col sm={6} md={3} lg={3}>
                    <img
                        src={`${process.env.REACT_APP_URL}/${userdata.documents.address_proof}`}
                        alt=""
                    />
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <img
                        src={`${process.env.REACT_APP_URL}/${userdata.documents.id_proof}`}
                        alt=""
                    />
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <img
                        src={`${process.env.REACT_APP_URL}/${userdata.documents.profile_photo}`}
                        alt=""
                    />
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <img
                        src={`${process.env.REACT_APP_URL}/${userdata.documents.signature_photo}`}
                        alt=""
                    />
                </Col>
            </Row>
        </div>
    );
}
