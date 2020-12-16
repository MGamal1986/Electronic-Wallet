import React from "react";
import CLasses from "./Balance.module.scss";

function Balance() {
    return (
        <div className={CLasses.Balance}>
            <div className={CLasses.Wallet}>
                <div className={CLasses.Title}>wallet balance</div>
                <div className={CLasses.CurrentBalance}>20.2 EGP</div>
            </div>
            <button className={CLasses.LoadWallet + " btn"}>load wallet</button>
        </div>
    );
}

export default Balance;
