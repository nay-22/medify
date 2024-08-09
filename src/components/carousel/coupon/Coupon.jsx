import styles from "./Coupon.module.css";
import C1 from "../../../assets/coupon1.png";
import C2 from "../../../assets/coupon2.png";
import C3 from "../../../assets/coupon3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Coupon = () => {
    return <>
        <div className={styles.container}>
            <Swiper
                className={styles.swiperContainer}
                slidesPerView={4}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C1} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C2} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C3} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C1} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C2} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C3} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C1} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C2} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C3} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C1} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C2} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={C3} />
                </SwiperSlide>
                
            </Swiper>
        </div>
    </>;
};

export default Coupon;