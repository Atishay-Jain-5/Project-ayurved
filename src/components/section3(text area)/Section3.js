import React, { useState } from "react";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import data from "./sample.JSON";
import Search from "./Search.js";
import '@fontsource/courier-prime'
function Section3() {

 
  
  

  // console.log(Symptoms);

  return (
    <div className="w-screen text-center -mt-20 ">
      <Typography variant="h1" gutterBottom >
        Tell Us about Your Symptoms
      </Typography>
     
   <Search></Search>
    </div>
  );
}

export default Section3;
