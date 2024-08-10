import styles from "./BlogCard.module.css";

const BlogCard = ({img, type, date, title, authorName, authorImg}) => {
    return <>
        <div className={styles.container}>
            <div className={styles.top}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.meta}>
                    <div className={styles.type}>{type}</div>
                    <p>|</p>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.author}>
                    <img classname={styles.authImg} src={authorImg} alt={authorName} />
                    <p className={styles.authName}>{authorName}</p>
                </div>
            </div>
        </div>
    </>;
};

export default BlogCard;