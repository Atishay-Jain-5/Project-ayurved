import React, { useEffect, useState } from "react";
import SymptomsContext from "./SymptopsContext";
import { useCookies } from "react-cookie";
const SymptomsState = (props) => {
  const [Symptoms, set_Symptoms] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [cureAndDesc,set_cureAndDesc] = useState()
  const [cookies, setCookie] = useCookies(["tokens"]);
  const send_symptoms = async () => {
    try {
    
      const response = await fetch("http://localhost:5000/api", {
        headers: {
          "Content-Type": "application/json",
          authorization: cookies.tokens,
        },
        method: "POST",
        body: JSON.stringify({ Symptoms }),
      });
  
      const data = await response.json();
      setPredictions(data);
      // console.log(data.Disease)
      if (data.Disease && data.Disease.length > 0) {
        console.log("here")
        const resCures = await fetch("http://localhost:5000/api/getdesc", {
          headers: {
            "Content-Type": "application/json",
            authorization: cookies.tokens,
          },
          method: "POST",
          body: JSON.stringify({ disease: data.Disease[0] }),
        });
  
        const cureAndD = await resCures.json();
        set_cureAndDesc(cureAndD);
        // console.log(cureAndD);
      } else {
        console.error("Disease information is missing in the response data.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <SymptomsContext.Provider
      value={{ Symptoms, set_Symptoms, predictions, send_symptoms,cureAndDesc }}
    >
      {props.children}
    </SymptomsContext.Provider>
  );
};

export default SymptomsState;
