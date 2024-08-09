import styles from "./DoctorCard.module.css";

const DoctorCard = ({img, name, specialization}) => {
    return <>
        <div className={styles.card}>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <img className={styles.img} src={img} />
                </div>
            </div>
            <p className={`${styles.text} ${styles.name}`}>{name}</p>
            <p className={`${styles.text} ${styles.spec}`}>{specialization}</p>
        </div>
    </>
};

export default DoctorCard;