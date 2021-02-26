import React from "react";
import { Row, Col } from "shards-react";

export default function Tab({ setActiveItem, activeItem }) {
    return (
        <Row>
            <Col sm={12} md={11} lg={11} xl={11} className="tab-nav">
                <span
                    onClick={() => setActiveItem(1)}
                    className={activeItem === 1 && "active"}
                >
                    Info
                </span>
                <span
                    onClick={() => setActiveItem(2)}
                    className={activeItem === 2 && "active"}
                >
                    Documents
                </span>
                <span
                    onClick={() => setActiveItem(3)}
                    className={activeItem === 3 && "active"}
                >
                    Update Password
                </span>
                <span
                    onClick={() => setActiveItem(4)}
                    className={activeItem === 4 && "active"}
                >
                    Update Info
                </span>
            </Col>
        </Row>
    );
}
