import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Search from "./Search.js";
import Boxcomponent from "./Boxcomponent.js";
import { Button } from "@mui/material";

function Section3() {
 

  return (
    <div className="w-screen text-center -mt-32 ">
    

      <Typography variant="h1" gutterBottom >
        Add Your Symptoms
      </Typography>
     
      <Search />
      <Boxcomponent />
     
   
      <Button variant="contained" color="success" className="mt-2 w-32 h-10" >
      Next
    </Button>
      </div>
    
  );
}

export default Section3;
