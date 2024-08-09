// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import "./BookingInterfaceSwiper.css";

import styles from "./BookingInterface.module.css";

const BookingInterface = ({bookingSlots, timeSlots, handleDateSelection, handleTimeSelection, booking}) => {

    const validateTime = (time) => {
        const hrs = time.split(":")[0];
        const mins = time.split(":")[1].split(" ")[0]
        const now = new Date();
        if ((hrs) < now.getHours() || (mins) < now.getMinutes()) return true;
        return false;
    }

    return <>
        <div className={styles.bookingInterface}>
            <hr className={styles.hr} />
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                slidesPerGroupSkip={1}
                scrollbar={true}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}

            >
                {bookingSlots.map(slot => <>
                    <SwiperSlide key={slot.id}>
                        <button key={slot.id} onClick={() => handleDateSelection(slot)} className={`${styles.slot} ${booking.date && booking.date.id === slot.id && styles.slotSelected}`}>
                            {slot.date}
                        </button>
                    </SwiperSlide>
                </>)}
            </Swiper>
            <div className={styles.timeSlot}>
                <p>Morning</p>
                <div className={styles.times}>
                    {timeSlots.morning.map(item => <button  onClick={() => handleTimeSelection(item)} className={`${styles.time} ${booking.time && booking.time.id === item.id && styles.slotSelected}`}>{item.time}</button>)}
                </div>
            </div>
            <div className={styles.timeSlot}>
                <p>Afternoon</p>
                <div className={styles.times}>
                    {timeSlots.afternoon.map(item => <button  onClick={() => handleTimeSelection(item)} className={`${styles.time} ${booking.time && booking.time.id === item.id && styles.slotSelected}`}>{item.time}</button>)}
                </div>
            </div>
            <div className={styles.timeSlot}>
                <p>Evening</p>
                <div className={styles.times}>
                    {timeSlots.evening.map(item => <button  onClick={() => handleTimeSelection(item)} className={`${styles.time} ${booking.time && booking.time.id === item.id && styles.slotSelected}`}>{item.time}</button>)}
                </div>
            </div>
        </div>
    </>;
};

export default BookingInterface;