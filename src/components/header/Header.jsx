import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

import Logo from "../../assets/logo.png";

const Header = () => {
    return <>
        <header className={styles.header}>
            <p className={styles.quote}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <div className={styles.tabs}>
                <div className={styles.logo}>
                    <NavLink className={`${styles.link} ${styles.inactive} ${styles.logo}`} to="/"><img src={Logo} alt="" /></NavLink>
                </div>
                <div className={styles.links}>
                    <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`} to="/">Find Doctors</NavLink>
                    <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`} to="/search">Hospitals</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/search">Medicines</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/search">Surgeries</NavLink>
                    <NavLink className={`${styles.link} ${styles.inactive}`} to="/search">Software For Providers</NavLink>
                    <NavLink className={`${styles.booking} ${styles.inactive}`} to="/bookings">My Bookings</NavLink>
                </div>
            </div>
        </header>
    </>
};

export default Header;