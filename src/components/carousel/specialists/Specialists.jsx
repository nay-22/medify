import styles from "./Specialists.module.css";
import Doc1 from "../../../assets/doc1.png";
import Doc2 from "../../../assets/doc2.png";
import Doc3 from "../../../assets/doc3.png";
import Doc4 from "../../../assets/doc4.png";
import Doc5 from "../../../assets/doc5.png";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import DoctorCard from "../../card/doc/DoctorCard";

const Specialists = () => {
    return <>
        <div className={styles.container}>
            <h1 className={styles.title}>Our Medical Specialists</h1>
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
                    <DoctorCard img={Doc1} name={"Dr. Lesley Hull"} specialization={"Medicine"} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <DoctorCard img={Doc2} name={"Dr. Ahmad Khan"} specialization={"Neurologist"} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <DoctorCard img={Doc3} name={"Dr. Heena Sachdeva"} specialization={"Orthopadics"} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <DoctorCard img={Doc4} name={"Dr. Ankur Sharma"} specialization={"Medicine"} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <DoctorCard img={Doc5} name={"Dr. Ahmad Stevens"} specialization={"Neurologist"} />
                </SwiperSlide>

            </Swiper>
        </div>
    </>;
};

export default Specialists;