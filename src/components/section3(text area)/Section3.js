import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Search from "./Search.js";
import Boxcomponent from "./Boxcomponent.js";


function Section3() {
 

  return (
    <div className="w-screen text-center -mt-32 ">
      <Typography variant="h1" gutterBottom>
        Add Your Symptoms
      </Typography>
      <Search />
      <Boxcomponent />
      
    </div>
  );
}

export default Section3;
