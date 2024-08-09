import { ArrowForwardIos, FacebookRounded, Pinterest, Twitter, YouTube } from "@mui/icons-material";
import styles from "./Footer.module.css";

import Logo from "../../assets/logo.png"

const Footer = () => {
    return <>
        <footer className={styles.container}>
            <div className={styles.top}>
                <div className={styles.social}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="medify" />
                    </div>
                    <div className={styles.handles}>
                        <FacebookRounded />
                        <Twitter />
                        <YouTube />
                        <Pinterest />
                    </div>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> About Us</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Our Pricing</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Our Gallery</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Appointment</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Orthology</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Neurology</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Dental Care</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Opthalmology</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Cardiology</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> About Us</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Our Pricing</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Our Gallery</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Appointment</li>
                        <li><ArrowForwardIos sx={{ color: "white" }} /> Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.bottom}>
                <p>Copyright ©2023 ___________________. All Rights Reserved</p>
            </div>
        </footer>
    </>;
};

export default Footer;