import { Box, Grid } from "@mui/material";
import styles from "./SearchResult.module.css";

import HospitalCard from "../card/hospital/HospitalCard";

const SearchResult = ({data}) => {
    return <>
        <div className={styles.results}>
            <h2>{data.length} medical centers available in {data[0]["State"]}</h2>
            {data.map(item => (
                <HospitalCard 
                key={item["Provider ID"]}
                name={item["Hospital Name"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")} 
                type={item["Hospital Type"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")} 
                city={item["City"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")} 
                state={item["State"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")} 
                zip={item["ZIP Code"]} 
                phone={item["Phone Number"]} 
                rating={item["Hospital overall rating"]}
                />
            ))}
        </div>
    </>;
};

export default SearchResult;