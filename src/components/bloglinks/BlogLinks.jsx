import styles from "./BlogLinks.module.css";
import BlogCard from "../card/blog/BlogCard";
import News from "../../assets/news.png";
import AuthImg from "../../assets/authimg.png";

const BlogLinks = () => {
    return <>
        <div className={styles.top}>
                <div className={styles.cmt}>Blog & News</div>
                <div className={styles.title}>Read Our Latest News</div>
        </div>
        <div className={styles.main}>
            <BlogCard 
                img={News} 
                authorImg={AuthImg} 
                authorName={"Rebecca Lee"} 
                date={"March 31, 2022"} 
                title={"6 Tips To Protect Your Mental Health When You’re Sick"}  
                type={"Medical"}
            />
            <BlogCard 
                img={News} 
                authorImg={AuthImg} 
                authorName={"Rebecca Lee"} 
                date={"March 31, 2022"} 
                title={"6 Tips To Protect Your Mental Health When You’re Sick"}  
                type={"Medical"}
            />
            <BlogCard 
                img={News} 
                authorImg={AuthImg} 
                authorName={"Rebecca Lee"} 
                date={"March 31, 2022"} 
                title={"6 Tips To Protect Your Mental Health When You’re Sick"}  
                type={"Medical"}
            />
        </div>
    </>;
};

export default BlogLinks;