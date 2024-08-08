import { Button, TextField } from "@mui/material";
import styles from "./Search.module.css";
import { LocationOn } from "@mui/icons-material";
import { useState, useEffect } from "react";

import SearchImg from "../../assets/Search.png"
import Doctor from "../../assets/Doctor.png"
import Hospital from "../../assets/Hospital.png"
import Capsule from "../../assets/Capsule.png"
import Ambulance from "../../assets/Ambulance.png"
import Drugstore from "../../assets/Drugstore.png"
import IconCard from "../card/icon/IconCard";
import { NavLink, useLocation } from "react-router-dom";

const SearchIcon = () => {
    return <>
        <img src={SearchImg} alt="search" />
    </>;
};

const Search = () => {
    const location = useLocation();

    const [query, setQuery] = useState({
        city: '', state: ''
    });

    useEffect(() => {
        const callGetStates = async () => {
            await getStates();
        }
        console.log(query);
        callGetStates();
    }, [query]);

    const getStates = async () => {
        const url = "https://meddata-backend.onrender.com/cities/Alaska";
        const response = await fetch(url);
        const data = response.json();
        console.log(response);
    };


    const handleQuery = (target) => {
        if (target.id == "city") setQuery(prev => ({ ...prev, city: target.value }));
        else if (target.id == "state") setQuery(prev => ({ ...prev, state: target.value }));
    }

    const handleSearch = () => {
        console.log(query);
    }

    const handleFilterHospital = () => {

    }
    return <>
        {location.pathname === "/bookings" && <h1 className={styles.title}>My Bookings</h1>}
        <div className={`${styles.search} ${location.pathname === "/" && styles.searchAtHome} ${location.pathname === "/bookings" && styles.searchAtBookings}`}>
            <div className={styles.main}>
                {location.pathname === "/bookings" ?
                    <TextField
                        id="hospital"
                        onChange={handleFilterHospital}
                        className={styles.input}
                        placeholder="Search By Hospital"
                    /> :
                    <>
                        <TextField
                            id="state"
                            onChange={(e) => handleQuery(e.target)}
                            className={styles.input}
                            InputProps={{ startAdornment: <LocationOn sx={{ color: "rgb(161, 161, 161)" }} /> }}
                            placeholder="State"
                        />
                        <TextField
                            id="city"
                            onChange={(e) => handleQuery(e.target)}
                            className={styles.input}
                            InputProps={{ startAdornment: <LocationOn sx={{ color: "rgb(161, 161, 161)" }} /> }}
                            placeholder="City"
                        />
                    </>
                }
                <Button
                    startIcon={<SearchIcon sx={{ fontSize: 40 }} />}
                    sx={{ padding: ".65em 4em", backgroundColor: "#2AA8FF", borderRadius: ".5em", textTransform: "none", fontSize: "1.2em" }}
                    className={styles.button}
                    size="large"
                    variant="contained"
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>
            {location.pathname === "/" && <div className={styles.homeSelector}>
                <h4>You may be looking for</h4>
                <div className={styles.categories}>
                    <NavLink><IconCard imgWidth="50%" isActive img={Doctor} name={'Doctors'} /></NavLink>
                    <IconCard imgWidth="50%" img={Drugstore} name={'Labs'} />
                    <IconCard imgWidth="50%" img={Hospital} name={'Hospitals'} />
                    <IconCard imgWidth="50%" img={Capsule} name={'Medical Store'} />
                    <IconCard imgWidth="50%" img={Ambulance} name={'Ambulance'} />
                </div>
            </div>}
        </div>
    </>;
};

export default Search;