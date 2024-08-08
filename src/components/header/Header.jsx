import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

import Logo from "../../assets/logo.png";
import Docs from "../../assets/docs.png";
import { Button } from "@mui/material";
import Hero from "../hero/Hero";

const Header = () => {
    const location = useLocation();

    return <>
        <header className={`${styles.header} ${location.pathname === "/" && styles.delBottomPadding}`}>
            <p className={styles.quote}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <div className={`${styles.tabs} ${location.pathname === "/" && styles.homeTabs}`}>
                <div className={styles.logo}>
                    <NavLink className={`${styles.link} ${styles.inactive} ${styles.logo}`} to="/"><img src={Logo} alt="" /></NavLink>
                </div>
                <div className={styles.links}>
                    <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`} to="/">Find Doctors</NavLink>
                    <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`} to="/search">Hospitals</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/">Medicines</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/">Surgeries</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/">Software For Providers</NavLink>
                    <NavLink className={`${styles.booking} ${styles.inactive}`} to="/bookings">My Bookings</NavLink>
                </div>
            </div>
            {location.pathname === "/" && <Hero />}
        </header>
    </>
};

export default Header;