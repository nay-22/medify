import { useContext, useEffect, useState } from "react";
import styles from "./BookingList.module.css";
import SearchResult from "../searchresult/SearchResult";
import HospitalContext from "../../contexts/HospitalContext";

const BookingList = ({hospitals}) => {
    

    return <>
        <SearchResult data={hospitals} booked />
    </>;
};

export default BookingList;