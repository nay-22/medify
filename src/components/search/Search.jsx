import { Box, Button, List, ListItem, ListItemText, Snackbar, TextField } from "@mui/material";
import styles from "./Search.module.css";
import { LocationOn } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import SearchImg from "../../assets/Search.png";
import Doctor from "../../assets/Doctor.png";
import Hospital from "../../assets/Hospital.png";
import Capsule from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import Drugstore from "../../assets/Drugstore.png";
import IconCard from "../card/icon/IconCard";
import HospitalContext from "../../contexts/HospitalContext";
import BookedContext from "../../contexts/BookedContext";
import { useSnackbar } from "notistack";

const SearchIcon = () => {
    return <>
        <img src={SearchImg} alt="search" />
    </>;
};

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [hospitals, setHospitals] = useContext(HospitalContext);
    const [booked, setBooked] = useContext(BookedContext);

    const { enqueueSnackbar } = useSnackbar()

    const [query, setQuery] = useState({
        city: '', state: ''
    });

    const [cityInput, setCityInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [filterInput, setFilterInput] = useState('');

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [filteredStates, setfilteredStates] = useState([]);
    const [filteredCities, setfilteredCities] = useState([]);

    const [cityDropdown, setCityDropdown] = useState(false);


    useEffect(() => {
        const callgetAllStates = async () => {
            await getAllStates();
        }
        callgetAllStates();
    }, []);

    const getAllStates = async () => {
        const url = "https://meddata-backend.onrender.com/states";
        const response = await fetch(url);
        const data = await response.json();
        setStates(data);
    };

    const getAllCities = async (state) => {
        const url = `https://meddata-backend.onrender.com/cities/${state}`;
        const response = await fetch(url);
        const data = await response.json();
        setCities(data.map(city => `${city.charAt(0)}${city.slice(1).toLowerCase()}`));
    }

    const processState = (val) => {
        setfilteredStates(states.filter(state => state.toLowerCase().includes(val.toLowerCase())));
    }

    const processCity = (val) => {
        setfilteredCities(cities.filter(city => city.toLowerCase().includes(val.toLowerCase())));
    }

    const handleStateInput = (e) => {
        setCityInput('');
        setCities([]);
        setfilteredCities([]);
        const value = e.target.value;
        if (value === '') {
            setQuery({ state: '', city: '' });
        }
        setStateInput(value);
        processState(value);
    }

    const handleCityInput = (e) => {
        const value = e.target.value;
        if (value === '') setQuery({ state: query.state, city: '' });
        setCityInput(value);
        processCity(value);
    }

    const stateListItemToInput = async (state) => {
        setStateInput(state);
        setfilteredStates([]);
        setQuery(prev => ({
            ...prev,
            state: state
        }));
        await getAllCities(state);
    }

    const cityListItemToInput = (city) => {
        setCityInput(city);
        setfilteredCities([]);
        setQuery(prev => ({
            ...prev,
            city: city
        }));
    }

    const handleSearch = async () => {
        setHospitals([]);
        const url = `https://meddata-backend.onrender.com/data?state=${query.state}&city=${query.city.toUpperCase()}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.length == 0) {
            enqueueSnackbar("No medical centers found in the selected region", {variant: "info"});
            setHospitals([]);
            if (location.pathname === "/search") navigate("/");
        } else {
            setHospitals(data);
            navigate(`/search`);
        }
    }

    useEffect(() => {
        if (filterInput === '') setBooked(JSON.parse(localStorage.getItem("bookings")) || []);
    }, [filterInput]);

    const handleFilterHospital = (value) => {
        setFilterInput(value);
    }

    const handleBookedFilter = () => {
        setBooked(prev => prev.filter(item => item && item.name.includes(filterInput)));
    }

    return (
        <>
            {location.pathname === "/bookings" && <h1 className={styles.title}>My Bookings</h1>}
            <div className={`${styles.search} ${location.pathname === "/" && styles.searchAtHome} ${location.pathname === "/bookings" && styles.searchAtBookings}`}>
                <div className={styles.main}>
                    {location.pathname === "/bookings" ?
                        <TextField
                            id="hospital"
                            onChange={(e) => handleFilterHospital(e.target.value)}
                            className={styles.input}
                            placeholder="Search By Hospital"
                        /> :
                        <>
                            <div className={styles.inputWrapper}>
                                <TextField
                                    id="state"
                                    value={stateInput}
                                    onChange={handleStateInput}
                                    className={styles.input}
                                    InputProps={{ startAdornment: <LocationOn sx={{ color: "rgb(161, 161, 161)" }} /> }}
                                    placeholder="State"
                                    onBlur={() => setTimeout(() => setfilteredStates([]), 200)}
                                    onFocus={() => {
                                        setfilteredStates(states);
                                        setCityInput('');
                                    }}
                                />
                                {filteredStates.length !== 0 && (
                                    <Box className={styles.inputDropdown}>
                                        <List>
                                            {filteredStates.map(state =>
                                                <ListItem
                                                    className={styles.stateItem}
                                                    key={state}
                                                    onClick={() => stateListItemToInput(state)}
                                                >
                                                    <ListItemText primary={state} />
                                                </ListItem>)
                                            }
                                        </List>
                                    </Box>
                                )}
                            </div>
                            <div className={styles.inputWrapper}>
                                <TextField
                                    disabled={!query.state}
                                    id="city"
                                    value={cityInput}
                                    onChange={handleCityInput}
                                    onFocus={() => {
                                        processCity(cityInput);
                                        setTimeout(setCityDropdown(true), 1000);
                                    }}
                                    onBlur={() => setTimeout(() => setCityDropdown(false), 200)}
                                    className={styles.input}
                                    InputProps={{ startAdornment: <LocationOn sx={{ color: "rgb(161, 161, 161)" }} /> }}
                                    placeholder="City"
                                />
                                {cityDropdown && (
                                    <Box className={styles.inputDropdown}>
                                        <List>
                                            {filteredCities.map(city =>
                                                <ListItem
                                                    className={styles.stateItem}
                                                    key={city}
                                                    onClick={() => cityListItemToInput(city)}
                                                >
                                                    <ListItemText primary={city} />
                                                </ListItem>)
                                            }
                                        </List>
                                    </Box>
                                )}
                            </div>
                        </>
                    }
                    <Button
                        disabled={location.pathname === "/bookings" ? false : !query.state || !query.city}
                        startIcon={<SearchIcon sx={{ fontSize: 40 }} />}
                        sx={{ padding: ".65em 4em", backgroundColor: "#2AA8FF", borderRadius: ".5em", textTransform: "none", fontSize: "1.2em" }}
                        className={styles.button}
                        size="large"
                        variant="contained"
                        onClick={location.pathname === "/bookings" ? handleBookedFilter : handleSearch}
                    >
                        Search
                    </Button>
                </div>
                {location.pathname === "/" && (
                    <div className={styles.homeSelector}>
                        <h4>You may be looking for</h4>
                        <div className={styles.categories}>
                            <NavLink><IconCard imgWidth="50%" isActive img={Doctor} name={'Doctors'} /></NavLink>
                            <IconCard imgWidth="50%" img={Drugstore} name={'Labs'} />
                            <IconCard imgWidth="50%" img={Hospital} name={'Hospitals'} />
                            <IconCard imgWidth="50%" img={Capsule} name={'Medical Store'} />
                            <IconCard imgWidth="50%" img={Ambulance} name={'Ambulance'} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
