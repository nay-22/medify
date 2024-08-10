import styles from "./Download.module.css";
import Img from "../../assets/download.png";
import Vector from "../../assets/Vector.png";
import AppStore from "../../assets/AppStore.png";
import PlayStore from "../../assets/PlayStore.png";
import { Button, TextField } from "@mui/material";
import { Google, Phone } from "@mui/icons-material";

const Download = () => {
    return <>
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={Img} alt="" />
            </div>
            <div className={styles.download}>
                <div className={styles.title}>
                    <h1>Download the </h1> <h1 className={styles.medify}> Medify </h1> <h1> App</h1>
                </div>
                <img className={styles.vector} src={Vector} alt="" />
                <div>
                    <p className={styles.cmt}>Get the link to download the app</p>
                    <div className={styles.linkform}>

                        <TextField sx={{width: "65%"}} InputProps={{ startAdornment: <Phone /> }} label="Phone Number" placeholder="Enter phone number" /> <Button sx={{ backgroundColor: "#2AA8FF", fontSize: "1em", padding: ".9em 2em" }} variant="contained">Send SMS</Button>
                    </div>
                </div>
                <div className={styles.store}>
                    <Button><img width="250px" src={PlayStore} alt="" /></Button>
                    <Button><img width="250px" src={AppStore} alt="" /></Button>
                </div>
            </div>
        </div>
    </>;
};

export default Download;