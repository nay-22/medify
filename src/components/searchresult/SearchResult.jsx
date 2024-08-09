import { Box, Grid } from "@mui/material";
import styles from "./SearchResult.module.css";

import HospitalCard from "../card/hospital/HospitalCard";
import { v4 } from "uuid";

const SearchResult = ({ data, booked = false }) => {
    return <>
        <div className={styles.results}>
            {!data ?  <h2>No medical centers found</h2> :
            <h2>{data.length} medical centers {booked ? "booked" : `available in ${data[0]["State"]}`}</h2>}
            {data && data.map(item => (
                <HospitalCard
                    booked={booked}
                    key={booked ? v4() : item["Provider ID"]}
                    name={booked ? item.name : item["Hospital Name"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")}
                    type={booked ? item.type : item["Hospital Type"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")}
                    city={booked ? item.city : item["City"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")}
                    state={booked ? item.state : item["State"].split(" ").map(str => `${str.charAt(0)}${str.slice(1).toLowerCase()}`).join(" ")}
                    zip={booked ? item.zip : item["ZIP Code"]}
                    phone={booked ? item.phone : item["Phone Number"]}
                    rating={booked ? item.rating : item["Hospital overall rating"]}
                    bookingDetails={booked && item.booking}
                />
            ))}
        </div>
    </>;
};

export default SearchResult;