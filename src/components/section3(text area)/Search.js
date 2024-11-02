import React, { useState } from "react";
import { Button } from "@mui/material";
import "@fontsource/courier-prime";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import SymptomsContext from "../../context/SymptopsContext";
import { useContext } from 'react';
import { items } from "../../Contants";
function Search() {
  const symptomsContext = useContext(SymptomsContext);
  const { set_Symptoms } = symptomsContext;
  


  const [indi, setIndi] = useState("");

  const changer = (event) => {
    setIndi(event.target.value);
  };

  const oc = () => {
    if (indi.trim() !== "") {
      if (!symptomsContext.Symptoms.includes(indi)) {
        set_Symptoms(prevSymptoms => [...prevSymptoms, indi]);
      }
      setIndi("");
    }
  };
  

  const handle_select = (item) => {
    setIndi(item.name);
  };

  const formatResult = (item) => {
    return (
      <div key={item.name}>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </div>
    );
  };

  return (
    <div className="App" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
      <div style={{ width: 400, marginRight: 10 }}>
        <ReactSearchAutocomplete
          items={items}
          onSelect={handle_select}
          autoFocus
          formatResult={formatResult}
          value={indi}
          onChange={changer}
          styling={{ fontSize: "22px", fontFamily: "Courier New" }}
        />
      </div>
      <div>
        <Button variant="contained" color="success" onClick={oc}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default Search;
