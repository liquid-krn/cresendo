import React from "react";

function Input(props) {
    return<input className="border-0 border-primary-subtle" placeholder={props.p} value={props.v} type={props.t} name={props.n} onChange={props.oC} />
}
export default Input 