import Hero from "../../components/hero/Hero";
import Search from "../../components/search/Search";
import Coupon from "../../components/carousel/coupon/Coupon";
import Specialists from "../../components/carousel/specialists/Specialists";
import Specialization from "../../components/specialization/Specialization";
import Caring from "../../components/static/caring/Caring";
import Family from "../../components/static/family/Family";
import BlogLinks from "../../components/bloglinks/BlogLinks";
import FAQs from "../../components/faq/FAQs"

import styles from "./HomePage.module.css";

const HomePage = () => {
    return <>
        <Hero />
        <Search />
        <Coupon />
        <Specialization />
        <Specialists />
        <Caring />
        <BlogLinks />
        <Family />
        <FAQs />
    </>
};

export default HomePage;