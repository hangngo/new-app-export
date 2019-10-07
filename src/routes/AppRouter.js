import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@gooddata/react-components/styles/css/main.css";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

import styles from "./AppRouter.module.scss";
import Welcome from "./Welcome";
import Page from "../components/Page";


const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
            </Router>
        </div>
    );
};

export default AppRouter;
