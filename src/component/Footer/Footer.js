import React from "react";
import Classes from "./Footer.module.scss";
import { FaHome, FaWallet } from "react-icons/fa";
import { IoStar, IoTimerOutline } from "react-icons/io5";
function Footer() {
    return (
        <div className={Classes.Footer + " d-flex justify-content-around align-items-center"}>
            <div className={Classes.Active}>
                <FaHome />
                <span className={Classes.Title}>home</span>
            </div>
            <div>
                <IoStar />
                <span className={Classes.Title}>my favorites</span>
            </div>
            <div>
                <FaWallet />
                <span className={Classes.Title}>my wallet</span>
            </div>
            <div>
                <IoTimerOutline />
                <span className={Classes.Title}>my transactions</span>
            </div>
        </div>
    );
}
export default Footer;
