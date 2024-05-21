import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SymptomsContext from "../../context/SymptopsContext";
import { Typography } from "@mui/material";
import section3img from "./ig.png"

export default function Boxcomponent() {
  const { Symptoms } = useContext(SymptomsContext);
  return (
    <div className="flex flex-row justify-between ">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      
        flexWrap: 'wrap',
        marginTop: "50px",
        marginLeft: "20px",
        '& > :not(style)': {
          m: 1,
          width: 460,
          height: 340,
        },
      }}
    >
      <Paper elevation={4} sx={{ backgroundColor: "#d1f1de", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
        {Symptoms.map((symptom, index) => (
          
            <Paper elevation={1} sx={{ borderRadius: "10px", marginLeft: "8px", marginTop: "15px" }}>
              <Typography variant="h5" gutterBottom style={{ fontFamily: "Courier New", padding: "3px" }}>
                {symptom}
              </Typography>
            </Paper>
        
        ))}
      </Paper>
    </Box>
      <img src={section3img} className=" rounded-xl mr-10 w-3/12 h-2/5 mt-16" alt="section3img" />

      </div>
  );
}
