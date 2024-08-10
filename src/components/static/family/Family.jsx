import styles from "./Family.module.css";
import Img from "../../../assets/family.png"

const Family = () => {
    return <>
        <div className={styles.container}>
            <img src={Img} alt="" />
        </div>
    </>;
};

export default Family;