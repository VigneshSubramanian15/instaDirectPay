import React, { useEffect, useState } from "react";
import { Col, Row } from "shards-react";
import FileUpoload from "./fileUpoload";
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function UploadDocs() {
    let history = useHistory();
    const [
        { profile_photo, id_proof, address_proof, signature_photo },
        setdocuments,
    ] = useState({
        profile_photo: false,
        id_proof: false,
        address_proof: false,
        signature_photo: false,
    });
    useEffect(() => {
        profile_photo &&
            id_proof &&
            address_proof &&
            signature_photo &&
            history.push("/app");
    }, [{ profile_photo, id_proof, address_proof, signature_photo }]);
    return (
        <div className="wrapper">
            <div className="upload mt-5">
                <h1 className="mb-5">Upload your Documents to continue....</h1>
                <Row>
                    <Col sm={12} md={2} lg={2}></Col>
                    <Col sm={12} md={2} lg={2}>
                        <FileUpoload
                            state={profile_photo}
                            setdocuments={setdocuments}
                            apiName="profile_photo"
                            name="PROFILE PHOTO"
                        />
                    </Col>
                    <Col sm={12} md={2} lg={2}>
                        <FileUpoload
                            state={id_proof}
                            setdocuments={setdocuments}
                            apiName="id_proof"
                            name="ID PROOF"
                        />
                    </Col>
                    <Col sm={12} md={2} lg={2}>
                        <FileUpoload
                            state={address_proof}
                            setdocuments={setdocuments}
                            apiName="address_proof"
                            name="ADDRESS PROOF"
                        />
                    </Col>
                    <Col sm={12} md={2} lg={2}>
                        <FileUpoload
                            state={signature_photo}
                            setdocuments={setdocuments}
                            apiName="signature_photo"
                            name="SIGNATURE UPLOAD"
                        />
                    </Col>
                    <Col sm={12} md={2} lg={2}></Col>
                </Row>
            </div>
        </div>
    );
}
