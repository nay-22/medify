import Docs from "../../assets/docs.png";
import { Button } from "@mui/material";

import styles from "./Hero.module.css";

const Hero = () => {
    return <>
        <div className={styles.hero}>
            <div className={styles.content}>
                <h2>Skip the travel! Find Online</h2>
                <h1>Medical <span>Centers</span></h1>
                <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor</p>
                <Button
                    sx={{ margin: "1em 0 0 0", padding: ".65em 4em", backgroundColor: "#2AA8FF", borderRadius: ".8em", textTransform: "none", fontSize: "1.1em" }}
                    className={styles.button}
                    size="large"
                    variant="contained"
                    onClick={() => { }}
                >
                    Find Centers
                </Button>
            </div>
            <div className={styles.img}>
                <img src={Docs} width="100%" alt="doctors" />
            </div>

        </div>
    </>;
};

export default Hero;