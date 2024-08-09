import Search from "../../components/search/Search";
import BookingList from "../../components/bookings/BookingList"
import Static from "../../assets/static.png";

import styles from "./BookingsPage.module.css";
import { useContext, useEffect, useState } from "react";
import BookedContext from "../../contexts/BookedContext";
import { useScrollTrigger } from "@mui/material";

const BookingsPage = () => {

    const [booked, setBooked] = useContext(BookedContext);
    useEffect(() => {
        setBooked(JSON.parse(localStorage.getItem("bookings")) || []);
    }, []);
    

    return <>
        <div className={styles.containerOuter}>
            <Search />
            <div className={styles.containerInner}>
                <BookingList hospitals={booked} />
                <img className={styles.static} src={Static} alt="" />
            </div>
        </div>
    </>
};

export default BookingsPage;