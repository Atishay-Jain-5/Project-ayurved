import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SymptomsContext from "../../context/SymptopsContext";
import { Typography } from "@mui/material";
import section3img from "./ig.png";

export default function Boxcomponent() {
  const { Symptoms,predictions } = useContext(SymptomsContext);
  // const { , send_symptoms } = symptomsContext;
  return (
    <div className="flex flex-row">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "50px",
          marginLeft: "20px",
          gap:"31rem",
          "& > :not(style)": {
            m: 1,
            width: 460,
            height: 340,
          },
        }}
      >
        <Paper
          elevation={4}
          sx={{
            backgroundColor: "#7EBDC2",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginRight: "20px", 
          }}
        >
          <Typography
                variant="h3"
                gutterBottom
                style={{ fontFamily: "Courier New", padding: "4px" ,fontWeight: "500",color:"#EFE6DD"}}
              >
                
                Your Symptoms
                  
                  
              </Typography>
          {Symptoms.map((symptom, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                borderRadius: "10px",
                marginLeft: "8px",
                marginTop: "15px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ fontFamily: "Courier New", padding: "3px" }}
              >
                {symptom}
              </Typography>
            </Paper>
          ))}
        </Paper>

        <Paper
          elevation={4}
          sx={{
            backgroundColor: "#d1f1de",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginLeft: "20px",
          }}
        >
 
            <Paper
              
              elevation={1}
              sx={{
                borderRadius: "10px",
                marginLeft: "8px",
                marginTop: "15px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ fontFamily: "Courier New", padding: "3px" }}
              >
              {predictions && predictions.Disease&& (
        <h1>{predictions.Disease[0]}</h1>
      )}
              </Typography>
            </Paper>
         
        </Paper>
      </Box>
    </div>
  );
}
