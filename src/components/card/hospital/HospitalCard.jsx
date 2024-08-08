import styles from "./HospitalCard.module.css";
import Hospi from "../../../assets/Hospi.png";
import { Button } from "@mui/material";

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const HospitalCard = ({name, type, zip, city, state, phone, rating}) => {
    console.log(zip);
    return <>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={Hospi} alt={name} />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    <p>{name}</p>
                </div>
                <div className={styles.location}>
                    <div className={styles.city}>
                        <p>{city}, </p>
                    </div>
                    <div className={styles.state}>
                        <p>{state}, </p>
                    </div>
                    <div className={styles.zip}>
                        <p>ZIP: {zip}</p>
                    </div>
                </div>
                <div className={styles.type}>
                    <p>{type}</p>
                </div>
                <div className={styles.phone}>
                    <p>Ph: {phone}</p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.rating}>
                    <ThumbUpAltIcon sx={{color: "white"}}/><p>{rating}</p>
                </div>
            </div>
            <div className={styles.bookBtn}>
                <Button sx={{backgroundColor: "#2AA7FF", textTransform: "none", fontSize: "1em"}} variant="contained">Book FREE Center Visit</Button>
            </div>
        </div>
    </>;
};

export default HospitalCard;