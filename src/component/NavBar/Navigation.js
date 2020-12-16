import React from "react";
import Classes from "./NavBar.module.scss";
import Aux from "../../hoc/Auxilary";
import { FaBell, FaBars } from "react-icons/fa";
import { Navbar } from "react-bootstrap";

function Nvigation() {
    return (
        <Aux>
            <Navbar className={Classes.Navigation} expand="lg" variant="light">
                <div className={Classes.Bars}>
                    <FaBars />
                </div>
                <div className={Classes.Page}>home</div>
                <div className={Classes.Bell}>
                    <FaBell />
                </div>
            </Navbar>
        </Aux>
    );
}

export default Nvigation;
