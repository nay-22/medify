import styles from "./IconCard.module.css";

const IconCard = ({img, name, imgWidth="100%", isActive=false}) => {
    return <>
        <div className={`${styles.card} ${isActive && styles.active}`}>
            <div className={styles.img}>
                <img src={img} alt={name} width={imgWidth} />
            </div>
            <p className={styles.name}>
                {name}
            </p>
        </div>
    </>;
};

export default IconCard;