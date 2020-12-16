import React from "react";
import SubHeader from "../Utilities/SubHeader";
import CLasses from "./LastPay.module.scss";
import { IoTimerOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
function LastPay() {
    return (
        <div className={CLasses.LastPay}>
            <SubHeader icon={<IoTimerOutline />} title="last payment" />
            <div className={CLasses.Pay}>
                <div>
                    <span className={CLasses.Check}>
                        <FaCheck />
                    </span>
                    <span className={CLasses.Title}>vodafone</span>
                </div>
                <span className={CLasses.Amount}>
                    <span>20.00 egp</span>
                    <span>12-1-2020</span>
                </span>
            </div>
        </div>
    );
}

export default LastPay;
