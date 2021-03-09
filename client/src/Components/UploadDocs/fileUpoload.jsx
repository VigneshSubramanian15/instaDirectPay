import React, { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { Container } from "shards-react";
import { MDBAlert } from "mdbreact";
export default function FileUpoload({ apiName, name, state, setdocuments }) {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dropHandler = (files) => {
        let formData = new FormData();
        let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);
        formData.append("data", JSON.stringify({ type: apiName, userId }));
        axios
            .post(process.env.REACT_APP_URL + "/docs/img", formData, config)
            .then((response) => {
                if (response.status === 200) {
                    setdocuments((doc) => ({ ...doc, [apiName]: true }));
                } else {
                    alert("Failed to save file.");
                }
            })
            .catch((err) => {
                setErrorMessage(err.response.data);
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 4000);
            });
    };
    return (
        <Container>
            {showError && <MDBAlert color="danger">{errorMessage}</MDBAlert>}
            {!state ? (
                <Dropzone
                    multiple={false}
                    accept={[".jpg", ".png", ".jpeg", ".pdf"]}
                    onDrop={dropHandler}
                    maxSizeBytes={2000000}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <section className="dd-Container">
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop to Upload your {name}</p>
                            </section>
                        </div>
                    )}
                </Dropzone>
            ) : (
                <div className="dd-Container">
                    <p className="success">{name} Uploader Successfully</p>
                </div>
            )}
        </Container>
    );
}
