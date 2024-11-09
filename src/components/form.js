import React from "react";
import Button from "./button";

function Forms(){
    return<form>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
   <Button />
  </form>
}

export default Forms