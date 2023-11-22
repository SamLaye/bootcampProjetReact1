import React from "react";

const Line = (props) => {

    return (
        <div className="row shadow-sm">
            <div className="col-2 d-flex justify-content-center align-items-center bg-danger">
                <i className={props.icon}></i>
            </div>
            <div className="col-8 py-2">
                <p>{props.contenu}</p>
            </div>
        </div>
    );
}
 
export default Line;