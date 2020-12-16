import React from "react";
import Bill from "../Bill/Bill";
import Classes from "./Bills.module.scss";
import bills from "../../data/bills";
import { FaRegClock } from "react-icons/fa";
import SubHeader from "../Utilities/SubHeader";
function Bills() {
    let billList = bills.map((bill, i) => <Bill key={bill.id} bill={bill} />);
    let noBillsMsg = <h4>no bills found</h4>;
    return (
        <div className={Classes.Bills}>
            <SubHeader icon={<FaRegClock />} title="due bills" />
            {bills.length === 0 ? (
                noBillsMsg
            ) : (
                <div>
                    <div className={Classes.HeaderTitle}>
                        <span>bill</span>
                        <span>amount</span>
                        <span>due date</span>
                    </div>
                    {billList}
                </div>
            )}
        </div>
    );
}

export default Bills;
