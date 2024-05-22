import React, { useEffect, useState } from "react";
import SymptomsContext from "./SymptopsContext";

const SymptomsState = (props) => {
  const [Symptoms, set_Symptoms] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const send_symptoms = async () => {
    try {
      console.log(Symptoms)
      const response = await fetch("http://localhost:5000/api", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          "Symptoms": Symptoms,
        }),
      });
      const data = await response.json();
      setPredictions(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SymptomsContext.Provider value={{ Symptoms, set_Symptoms ,predictions,send_symptoms}}>
      {props.children}
    </SymptomsContext.Provider>
  );
};

export default SymptomsState;
