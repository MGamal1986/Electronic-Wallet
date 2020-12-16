import "./App.scss";
import Layout from "./component/Layout/Layout";
import Balance from "./component/Balance/Balance";
import TaskManager from "./component/TaskManger/TaskManager";
import Bills from "./component/Bills/Bills";
import LastPay from "./component/LastPay/LastPay";

function App() {
    return (
        <div className="App d-flex justify-content-center align-items-center">
            <Layout>
                <Balance />
                <TaskManager />
                <Bills />
                <LastPay />
            </Layout>
        </div>
    );
}

export default App;
