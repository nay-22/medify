import styles from "./Caring.module.css";
import Care1 from "../../../assets/care1.png";
import Care2 from "../../../assets/care2.png";
import FreeConsult from "../../../assets/freeconsult.png";  
import CareCheck from "../../../assets/CareCheck.png";  



const Caring = () => {
    return <>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={`${styles.imgContainer} ${styles.care1}`}>
                    <img className={styles.img} src={Care1} alt="" />
                </div>
                <div className={`${styles.imgContainer} ${styles.care2}`}>
                    <img className={styles.img} src={Care2} alt="" />
                </div>
                <div className={`${styles.fc}`}>
                    <img className={styles.fc} src={FreeConsult} alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cmt1}>
                    <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                </div>
                <div className={styles.title}>
                    <h1>Patient <span className={styles.color}>Caring</span></h1>
                </div>
                <div className={styles.cmt2}>
                    <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><img src={CareCheck} alt="" /> Stay Updated About Your Health</li>
                        <li><img src={CareCheck} alt="" /> Check Your Results Online</li>
                        <li><img src={CareCheck} alt="" /> Manage Your Appointments</li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
};

export default Caring;