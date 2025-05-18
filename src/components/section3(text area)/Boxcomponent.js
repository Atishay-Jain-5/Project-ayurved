import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SymptomsContext from "../../context/SymptopsContext";
import { Typography } from "@mui/material";
import section3img from "./ig.png";

export default function Boxcomponent() {
  const { Symptoms, predictions,cureAndDesc } = useContext(SymptomsContext);
  let iter=1;
  console.log(cureAndDesc)
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
          gap: "31rem",
          "& > :not(style)": {
            m: 1,
            width: 460,
            height: 350,
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
            overflowY: "auto"
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{
              fontFamily: "Courier New",
              padding: "4px",
              fontWeight: "500",
              color: "#EFE6DD",
            }}
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
              marginTop: "8px",
              marginRight:"8px",
              width: "95%",
              height:"95%",
              overflowY: "auto",
              whiteSpace: "normal"
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{ fontFamily: "Courier New", padding: "3px",textAlign:"left",
                textJustify: "inter-word" }}
            >
              {predictions && predictions.Disease && (
                <div>

                <h1 className="font-extrabold">You Might Have - </h1>
                <h1 className="text-red-700 font-bold">{predictions.Disease[0]}</h1>
                </div>
              )}
              {
                cureAndDesc && cureAndDesc.description && cureAndDesc.cure.length>0 && (
                  <div>
                    
                  <h1 className="font-extrabold">Description -</h1>
                  <h4 className="text-sm">

                    {cureAndDesc.description}
                  </h4> 
                  <h3 className="font-extrabold">
                    Ayurvedic cures -
                  </h3>
                  {cureAndDesc.cure.map((i)=>(
                    // console.log(i)
                    
                    <h3 className="text-base">
                     {iter++} - {i}
                  </h3>
                  ))

                  }
                  </div>
                )
              }
            </Typography>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
}
