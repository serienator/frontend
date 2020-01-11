import React from "react";
import { Spinner } from 'react-bootstrap';


function Loading() {
    return <div className="page-container">
        <Spinner animation="border" role="status" size="lg" className="spinner">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
}

export default Loading;