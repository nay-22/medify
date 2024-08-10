import styles from "./FAQs.module.css";
import FaqImg from "../../assets/faqimg.png";
import Plus from "../../assets/plus.png";

const FAQs = () => {
    return <>
        <div className={styles.top}>
                <div className={styles.cmt}>Get Your Answer</div>
                <div className={styles.title}>Frequently Asked Questions</div>
        </div>
        <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.faqimg}>
                        <img src={FaqImg} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li>Why choose our medical for your family? <img src={Plus} alt="" /></li>
                        <li>Why we are different from others? <img src={Plus} alt="" /></li>
                        <li>Trusted & experience senior care & love <img src={Plus} alt="" /></li>
                        <li>How to get appointment for emergency case? <img src={Plus} alt="" /></li>
                    </ul>
                </div>
        </div>
    </>;
};

export default FAQs;
