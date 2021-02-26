import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UploadDocs from "./Components/UploadDocs";
import Dashboard from "./Components/Dashboard";
import { Layout } from "./Components/Layout";
import Settings from "./Components/Account Settings";
import AdminDashboard from "./Components/AdminPage/Dashboard";
import UserData from "./Components/AdminPage/UserInfo";
import Transaction from "./Components/Transaction";
import Transfer from "./Components/Transfer";
import CardStatus from "./Components/Card Status";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/upload" exact component={UploadDocs} />
                <Layout path="/app" exact component={Dashboard} />
                <Layout path="/settings" exact component={Settings} />
                <Layout path="/transaction" exact component={Transaction} />
                <Layout path="/cardstatus" exact component={CardStatus} />
                <Layout path="/transfer" exact component={Transfer} />
                <Route path="/admin" exact component={AdminDashboard} />
                <Route path="/admin/:userId" exact component={UserData} />
            </Switch>
        </Router>
    );
}

export default App;
