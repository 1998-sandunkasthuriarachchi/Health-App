import React from "react";
import App from "../../App";
import DashboardSection from "../../components/admin/dashboard";

const Dashboard = () =>{
    return(
        <div>
            <App section={<DashboardSection/>} />
        </div>
    );
}

export default Dashboard;