import React, { useEffect, useState } from "react";
import SymptomsContext from "./SymptopsContext";

const SymptomsState = (props) => {
 const [Symptoms,set_Symptoms]=useState([]);
  return (
    <SymptomsContext.Provider value={{Symptoms,set_Symptoms}}>
      {props.children}
    </SymptomsContext.Provider>
  );
};

export default SymptomsState;
