import React from "react";

const Line = (props) => {

    return (
        <div className="row border">
            <div className=" col-2 bg-danger">
                <i className={props.icon}></i>
            </div>
            <div className="col-8 py-2">
                <p>{props.contenu}</p>
            </div>
        </div>
    );
}
 
export default Line;