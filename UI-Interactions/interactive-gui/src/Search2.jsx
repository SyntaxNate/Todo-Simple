import { Button, Stack } from '@mui/material';
import React, {useState} from "react";
import { motion } from 'framer-motion';


const MotionButton = motion(Button);

function Prac() {
    
    const [query, setQuery] =  useState("")
    const [search, setSearch] = useState("");


    function handleInputChange(e) {
        setQuery(e.target.value)
    }

    function handleSearch (e) {
        setSearch(e.target.value)
    }

    return(
        
        <div style={{ display: "flex", flexDirection: "column", gap:"15px", padding:"2rem" }}>

            <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ padding: "1rem" }}
                   type="text"
                   value={search}
                   placeholder='Search 1'
                   onChange={handleSearch}
            />

                <MotionButton style={{ marginLeft:"10px" }} 
                              variant="contained"
                              whileTap={{ scale:0.9 }}
                              whileHover={{ y: -4 }}
                              onClick={handleSearch}  >
                 Search
                </MotionButton>
            </div>

                <div style={{ display: "flex", gap: "10px" }}>
                <input
                    style={{ padding: "1rem" }}
                    type="text"
                    value={search}
                    placeholder='Search 2'
                    onChange={handleSearch}
                />

                <MotionButton 
                    variant="contained"
                    whileTap={{ scale:0.9 }}
                    whileHover={{ y: -4 }}
                    onClick={handleSearch}>
                    Search
                </MotionButton>
            </div>

    <div style={{ padding: "2rem" }}>
            <p>Search Demo</p>

            {/* Search Bar (controlled by react state)*/}
            <input type="text" 
                   placeholder='Search Something'
                   value={query}
                   onChange={handleInputChange}
            />

            {/* Button (triggers search handler)*/}
            <MotionButton spacing={6}
             variant="contained"
             whileTap={{ scale:0.9 }}
             whileHover={{ y: -4 }}
             onClick={handleInputChange}>
                Search
            </MotionButton>
    </div>
    
    </div>

    )
} 

export default Prac