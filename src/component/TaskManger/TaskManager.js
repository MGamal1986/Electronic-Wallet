import React from "react";
import Task from "../Task/Task";
import { FaShoppingCart, FaCreditCard, FaQrcode } from "react-icons/fa";
function TaskManger() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Task title="purchase" icon={<FaShoppingCart />} />
            <Task title="loan payment" icon={<FaCreditCard />} />
            <Task title="scan qr" icon={<FaQrcode />} />
        </div>
    );
}

export default TaskManger;
