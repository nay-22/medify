import styles from "./Specialization.module.css";
import IconCard from "../card/icon/IconCard";

import DrugStore from "../../assets/Drugstore.png";
import Sethoscope from "../../assets/stethoscope.png";
import Cardiology from "../../assets/cardio.png";
import HrMonitor from "../../assets/hrmonitor.png";
import Blood from "../../assets/blood.png";
import Immune from "../../assets/immune.png";
import Xray from "../../assets/xray.png";
import { Button } from "@mui/material";

const Specialization = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Find By Specialization</h1>
        <div className={styles.innerContainer}>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={DrugStore} name={"Dentistry"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={Sethoscope} name={"Primary Care"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={Cardiology} name={"Cardiology"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={HrMonitor} name={"MRI Resonance"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={Blood} name={"Blood Test"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={Immune} name={"Pisologist"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={DrugStore} name={"Laboratory"} imgWidth="100px" />
            </div>
            <div className={styles.iconContainer}>
                <IconCard className={styles.icon} img={Xray} name={"X-Ray"} imgWidth="100px" />
            </div>
        </div>
        <div className={styles.btnContainer}>
            <Button size="large" variant="contained" sx={{padding: "1em 5em", fontSize: "1.2em", textTransform: "none", backgroundColor: "#2AA8FF"}}>View All</Button>
        </div>
    </div>
};

export default Specialization;