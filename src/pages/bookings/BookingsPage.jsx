import Search from "../../components/search/Search";
import BookingList from "../../components/bookings/BookingList"

import styles from "./BookingsPage.module.css";

const BookingsPage = () => {
    return <>
        <Search />
        <BookingList />
    </>
};

export default BookingsPage;