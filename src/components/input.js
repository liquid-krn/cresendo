import React from "react";

function Input(props) {
    return<input className={props.className} placeholder={props.p} type={props.t} name={props.n} onChange={props.oC} />
}
export default Input 