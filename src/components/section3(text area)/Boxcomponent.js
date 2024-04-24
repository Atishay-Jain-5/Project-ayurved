import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SymptomsContext from "../../context/SymptopsContext";
import { Typography } from "@mui/material";
export default function Boxcomponent() {
  const { Symptoms } = useContext(SymptomsContext);
  return (
    <Box
      sx={{
       
        display: "flex", alignItems: "center", justifyContent: "center",
        flexWrap: 'wrap',
        marginTop:"50px",
       
        '& > :not(style)': {
          m: 1,
          width: 1280,
          height: 350,
        },
      }}
    >
      
      <Paper elevation={4} sx={{ backgroundColor:"whitesmoke", display: "flex", alignItems: "flex-start", justifyContent: "flex-start",flexDirection:"column",  }}>
      {Symptoms.map((symptom, index) => (
        <div>
          <Paper elevation={3} sx={{borderRadius:"20px",marginLeft:"8px",marginTop:"15px"}}>
          <Typography variant="h4" gutterBottom key={index} style={{fontFamily: "Courier New",padding:"5px"}}>
      {symptom}

      </Typography>
      </Paper>
        </div>
     
      ))}
        </Paper>
    </Box>
  );
}