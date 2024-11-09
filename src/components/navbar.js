import React from "react";
import "./navbar.css"

function Navbar(){
    return(<div>
        <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav class="f6 fw6 ttu tracked">
    <a class="link dim white dib mr3" href="#" title="Home">Home</a>
    <a class="link dim white dib mr3" href="#" title="About">About</a>
    <a class="link dim white dib mr3" href="#" title="Store">Store</a>
    <a class="link dim white dib" href="#" title="Contact">Contact</a>
  </nav>
</header>
    </div>)
}
export default Navbar