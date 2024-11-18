import React from "react";

function Input(props) {
    return<input className="border-0 border-bottom border-primary-subtle" placeholder={props.p} type={props.t} name={props.n} onChange={props.oC} />
}
export default Input 