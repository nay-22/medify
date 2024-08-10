import styles from "./HospitalCard.module.css";
import Hospi from "../../../assets/hospi.png";
import { Button } from "@mui/material";

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useEffect, useState } from "react";

import BookingInterface from "../../interface/booking/BookingInterface";
import { v4 } from "uuid";
import { enqueueSnackbar } from "notistack";

const HospitalCard = ({ name, type, zip, city, state, phone, rating, bookingDetails, booked=false}) => {
    const [booking, setBooking] = useState({
        date: null, time: null
    });
    const [isOpenBooking, setIsOpenBooking] = useState(false);
    const [bookingSlots, setBookingSlots] = useState([]);
    const [timeSlots, setTimeSlots] = useState({});

    useEffect(() => {
        if (!booked) {
        setBookingSlots(generateWeek());
        setTimeSlots(generateTime());
    }
    }, []);

    const handleDateSelection = (value) => setBooking(prev => ({...prev, date: value}));

    const handleTimeSelection = (value) => setBooking(prev => ({...prev, time: value}));

    const generateWeek = () => {
        const date = new Date();
        
        const week = [];
        

        const limit = date.getDate() + 6;
        for (let i = date.getDate(); i < limit; i++) {
            week.push({id: v4(), date: toReadableDate(date)});
            date.setDate(date.getDate() + 1);
        }
        return week;
    }

    const generateTime = () => {
        const morning = [];
        const afternoon = [];
        const evening = [];
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        
        for (let hr = 10; hr <= 19; hr += 1) {
            if (hr >= 13 && hr <= 17) continue;
            let min = 0;
            for (let i = 0; i < 2; i++) {
                date.setHours(hr, min, 0, 0);
                let hourFormatted = hr === 12 ? '12' : hr > 12 ? `${hr - 12}` : `${hr}`;
                hourFormatted = hourFormatted.padStart(2, '0');
                let minuteFormatted = date.getMinutes() === 0 ? '00' : date.getMinutes();
                let timeString = `${hourFormatted}:${minuteFormatted} ${hr < 12 ? 'AM' : 'PM'}`;
                
                if (hr < 12) morning.push({id: v4(), time: timeString});
                else if (hr >= 12 && hr <= 16) afternoon.push({id: v4(), time: timeString});
                else if (hr > 16) evening.push({id: v4(), time: timeString});
                
                min = 30;
            }
        }
        
        return {
            morning: morning,
            afternoon: afternoon,
            evening: evening
        };
    }

    const toReadableDate = (dateString) => {
        const dateArray = String(dateString).split(" ");
        return `${dateArray[0]}, ${dateArray[2]} ${dateArray[1]}`
    }

    const confirmBooking = () => {
        let prevBookings = JSON.parse(localStorage.getItem('bookings'));
        if (!prevBookings) prevBookings = [];
        const curr = {
            name: name,
            city: city,
            state: state,
            zip: zip,
            type: type,
            phone: phone,
            rating: rating,
            booking: booking
        }
        localStorage.setItem("bookings", JSON.stringify([curr, ...prevBookings]));
        setIsOpenBooking(false);
        enqueueSnackbar(`Your appointment to ${name} has been successfully booked at ${booking.date.date}, ${booking.time.time}`, {variant: "success", autoHideDuration: 7000})
    }


    return <>
        <div className={styles.card}>
            <div className={styles.cardContent}>
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
                    {!isOpenBooking && <hr className={styles.hr} />}
                    <div className={styles.rating}>
                        <ThumbUpAltIcon sx={{ color: "white" }} /><p>{rating}</p>
                    </div>
                </div>
                {booked ? 
                    <div className={styles.bookedDetails}>
                        <div className={styles.bookedTime}>
                            {bookingDetails.time.time}
                        </div>
                        <div className={styles.bookedDate}>
                            {bookingDetails.date.date}
                        </div>
                    </div> : 
                    <div className={styles.bookBtn}>
                        <Button 
                            sx={{ backgroundColor: isOpenBooking ? "grey" : "#2AA7FF", textTransform: "none", fontSize: "1em" }} 
                            variant="contained"
                            onClick={() => {
                                setBooking({date: null, time: null});
                                setIsOpenBooking(prev => !prev);
                            }}
                        >
                            {isOpenBooking ? "Cancel" : "Book FREE Center Visit"}
                        </Button>
                        {isOpenBooking && <Button 
                            sx={{ backgroundColor: "#2AA7FF", textTransform: "none", fontSize: "1em" }}
                            variant="contained"
                            onClick={() => confirmBooking()}
                        >
                            Confirm
                        </Button>}
                    </div>
                }
            </div>
            {isOpenBooking && (
                <BookingInterface 
                    bookingSlots={bookingSlots} 
                    timeSlots={timeSlots}
                    booking={booking} 
                    handleDateSelection={handleDateSelection} 
                    handleTimeSelection={handleTimeSelection} 
                />
            )}
        </div>
    </>;
};

export default HospitalCard;