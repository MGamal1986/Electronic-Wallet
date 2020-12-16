import React from "react";
import Classes from "./Bill.module.scss";
function Bill({ bill }) {
    // console.log(bill.title);
    return (
        <div className={Classes.Bill}>
            <div className={Classes.Title}>{bill.title}</div>
            <div className={Classes.Amount}>{bill.amount}</div>
            <div className={Classes.DueDate}>{bill.due_date}</div>
        </div>
    );
}

export default Bill;
