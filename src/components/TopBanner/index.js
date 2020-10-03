import React from "react";
import "./style.css"

function TopBanner() {
    return (
        <div className="jumbotron jumbotron-fluid bg-info">
            <div className="container">
                <h1 className="display-4 text-center font-weight-bold">Employee Directory</h1>
                <p className="lead text-center"></p>
            </div>
        </div>
    )
}

export default TopBanner;