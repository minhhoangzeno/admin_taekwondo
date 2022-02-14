import React, { useEffect, useState } from "react";
// import { AppRoute, routes } from "../../AppRoutes";
import {
    Redirect, Route, Switch
} from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";
import { Routes } from "../routes";
import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navbars from "./components/Navbars";
import Navs from "./components/Navs";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Toasts from "./components/Toasts";
import Tooltips from "./components/Tooltips";
import DashboardOverview from "./dashboard/DashboardOverview";
import BootstrapTables from "./tables/BootstrapTables";
import Transactions from "./Transactions";



const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const localStorageIsSettingsVisible = () => {
        return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }

    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
        localStorage.setItem('settingsVisible', !showSettings);
    }
    return (
        <Route {...rest} render={props => (
            <>
                <Preloader show={loaded ? false : true} />
                <Sidebar />

                <main className="content">
                    <Navbar />
                    <Component {...props} />
                    <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
                </main>
            </>
        )}
        />
    );
};


export default function ProvideAuth() {
    return (
        <Switch>

           

            {/* pages */}
            <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
            <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
            <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

            {/* components */}
            <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
            <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
            <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
            <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
            <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
            <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
            <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
            <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
            <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
            <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
            <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
            <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
            <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
            <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
            <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
            <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />


            {/* components */}


            <Redirect from="/" to="/" />
        </Switch>

    )
}
