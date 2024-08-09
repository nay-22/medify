import styles from "./HospitalCard.module.css";
import Hospi from "../../../assets/Hospi.png";
import { Button } from "@mui/material";

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import "./HospitalSwiper.css";

const HospitalCard = ({ name, type, zip, city, state, phone, rating }) => {
    const [booking, setBooking] = useState({
        date: '', time: ''
    });
    const [isOpenBooking, setIsOpenBooking] = useState(false);
    const [bookingSlots, setBookingSlots] = useState([]);

    useEffect(() => {
        setBookingSlots(generateWeek());
    }, [])

    const generateWeek = () => {
        const date = new Date();
        
        const week = [];
        const limit = date.getDate() + 6;
        for (let i = date.getDate(); i < limit; i++) {
            week.push({id: i, date: toReadableDate(date)});
            date.setDate(date.getDate() + 1);
        }
        // console.log(week);
        return week;
    }

    const toReadableDate = (dateString) => {
        const dateArray = String(dateString).split(" ");
        return `${dateArray[0]}, ${dateArray[2]} ${dateArray[1]}`
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
                    <hr className={styles.hr} />
                    <div className={styles.rating}>
                        <ThumbUpAltIcon sx={{ color: "white" }} /><p>{rating}</p>
                    </div>
                </div>
                <div className={styles.bookBtn}>
                    <Button 
                        sx={{ backgroundColor: "#2AA7FF", textTransform: "none", fontSize: "1em" }} 
                        variant="contained"
                        onClick={() => setIsOpenBooking(prev => !prev)}
                    >
                        Book FREE Center Visit
                    </Button>
                </div>
            </div>
            {isOpenBooking && <div className={styles.bookingInterface}>
                <hr className={styles.hr} />
                {/* <div className={styles.slots}>
                    {bookingSlots.map(slot => <div key={slot}>{slot}</div>)}
                </div> */}
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    slidesPerGroupSkip={1}
                    scrollbar={true}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className={styles.swiper}
                    
                >
                    {bookingSlots.map(slot => <>
                        <SwiperSlide>
                                <div key={slot.id} onClick={() => console.log(slot.id)} className={styles.slot}>
                                    {slot.date}
                                </div>
                        </SwiperSlide>
                    </>)}
                </Swiper>
            </div>}
        </div>
    </>;
};

export default HospitalCard;