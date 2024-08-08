import Search from "../../components/search/Search";
import FAQs from "../../components/faq/FAQs"
import SearchResult from "../../components/searchresult/SearchResult"

import styles from "./SearchPage.module.css";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import HospitalContext from "../../contexts/HospitalContext";

import Static from "../../assets/static.png"

const SearchPage = () => {
    const [hospitals, setHospitals] = useContext(HospitalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (hospitals.length === 0) navigate("/");
    }, []);

    return <>
        <div className={styles.containerOuter}>
            <Search />
            <div className={styles.containerInner}>
                {hospitals.length !== 0 ? <SearchResult data={hospitals}  /> : <h3>Loading...</h3>}
                <img className={styles.static} src={Static} alt="" />
            </div>
        </div>
        <FAQs />
    </>
};

export default SearchPage;