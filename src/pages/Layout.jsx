import { Outlet } from "react-router";

import Header from "../components/header/Header";
import Download from "../components/download/Download"
import Footer from "../components/footer/Footer"

import styles from "./Layout.module.css";

const Layout = () => {
    return <>
        <Header />
        <Outlet />
        <Download />
        <Footer />
    </>
};

export default Layout;