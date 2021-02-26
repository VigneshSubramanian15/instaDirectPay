import React from "react";
// import Navigation from "./fragments/nav";
import "./style.scss";
import Section1 from "./fragments/section1";
import Section3 from "./fragments/section3";
import Section4 from "./fragments/section4";
import Section5 from "./fragments/section5";
export default function HomePage() {
    return (
        <>
            {/* <Navigation /> */}
            <Section1 />
            <Section3 />
            <Section4 />
            <Section5 />
        </>
    );
}
