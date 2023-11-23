import React from "react";

const Line = (props) => {

    return (
        <div className="row bg-white rounded shadow mx-0 my-3 myLine">
            <div 
                className="col-2 d-flex justify-content-center align-items-center " 
                id={props.colorIcone}
            >
                <i className={props.icon} id={props.iconID}></i>
            </div>
            <div className="col-10 my-auto" >{props.contenu}</div>
        </div>
    );
}
 
export default Line;