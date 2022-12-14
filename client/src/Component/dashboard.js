import React from "react";
function Dashboard(){
    return <>
        <h1>Welcome to your dashboard</h1>
        <p>{localStorage.getItem("user")}</p>
    </>
}

export default Dashboard;