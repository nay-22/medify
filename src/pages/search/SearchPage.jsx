import Search from "../../components/search/Search";
import FAQs from "../../components/faq/FAQs"
import SearchResult from "../../components/searchresult/SearchResult"

import styles from "./SearchPage.module.css";

const SearchPage = () => {
    return <>
        <Search />
        <SearchResult />
        <FAQs />
    </>
};

export default SearchPage;