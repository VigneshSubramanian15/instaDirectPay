import React, { useState } from "react";
import { Row, Col } from "shards-react";
import AccountInfo from "./fragments/AccountInfo";
import Documents from "./fragments/Documents";
import Tab from "./fragments/tab";
import "./style.scss";

export default function Settings({ userData }) {
    const [activeItem, setActiveItem] = useState(1);
    const userdata = userData.userId;

    return (
        <div className="settings">
            <Tab activeItem={activeItem} setActiveItem={setActiveItem} />
            {activeItem === 1 && <AccountInfo userdata={userdata} />}
            {activeItem === 2 && <Documents userdata={userdata} />}
        </div>
    );
}
