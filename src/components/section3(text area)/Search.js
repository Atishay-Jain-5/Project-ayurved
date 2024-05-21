import React, { useState } from "react";
import { Button } from "@mui/material";
import "@fontsource/courier-prime";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import SymptomsContext from "../../context/SymptopsContext";
import { useContext } from 'react';

function Search() {
  const symptomsContext = useContext(SymptomsContext);
  const { set_Symptoms } = symptomsContext;
  const items = [
    { name: "itching" },
    { name: "skin rash" },
    { name: "nodal skin eruptions" },
    { name: "continuous sneezing" },
    { name: "shivering" },
    { name: "chills" },
    { name: "joint pain" },
    { name: "stomach pain" },
    { name: "acidity" },
    { name: "ulcers on tongue" },
    { name: "muscle wasting" },
    { name: "vomiting" },
    { name: "burning micturition" },
    { name: "spotting urination" },
    { name: "fatigue" },
    { name: "weight gain" },
    { name: "anxiety" },
    { name: "cold hands and feets" },
    { name: "mood swings" },
    { name: "weight loss" },
    { name: "restlessness" },
    { name: "lethargy" },
    { name: "patches in throat" },
    { name: "irregular sugar level" },
    { name: "cough" },
    { name: "high fever" },
    { name: "sunken eyes" },
    { name: "breathlessness" },
    { name: "sweating" },
    { name: "dehydration" },
    { name: "indigestion" },
    { name: "headache" },
    { name: "yellowish skin" },
    { name: "dark urine" },
    { name: "nausea" },
    { name: "loss of appetite" },
    { name: "pain behind the eyes" },
    { name: "back pain" },
    { name: "constipation" },
    { name: "abdominal pain" },
    { name: "diarrhoea" },
    { name: "mild fever" },
    { name: "yellow urine" },
    { name: "yellowing of eyes" },
    { name: "acute liver failure" },
    { name: "fluid overload" },
    { name: "swelling of stomach" },
    { name: "swelled lymph nodes" },
    { name: "malaise" },
    { name: "blurred and distorted vision" },
    { name: "phlegm" },
    { name: "throat irritation" },
    { name: "redness of eyes" },
    { name: "sinus pressure" },
    { name: "runny nose" },
    { name: "congestion" },
    { name: "chest pain" },
    { name: "weakness in limbs" },
    { name: "fast heart rate" },
    { name: "pain during bowel movements" },
    { name: "pain in anal region" },
    { name: "bloody stool" },
    { name: "irritation in anus" },
    { name: "neck pain" },
    { name: "dizziness" },
    { name: "cramps" },
    { name: "bruising" },
    { name: "obesity" },
    { name: "swollen legs" },
    { name: "swollen blood vessels" },
    { name: "puffy face and eyes" },
    { name: "enlarged thyroid" },
    { name: "brittle nails" },
    { name: "swollen extremeties" },
    { name: "excessive hunger" },
    { name: "extra marital contacts" },
    { name: "drying and tingling lips" },
    { name: "slurred speech" },
    { name: "knee pain" },
    { name: "hip joint pain" },
    { name: "muscle weakness" },
    { name: "stiff neck" },
    { name: "swelling joints" },
    { name: "movement stiffness" },
    { name: "spinning movements" },
    { name: "loss of balance" },
    { name: "unsteadiness" },
    { name: "weakness of one body side" },
    { name: "loss of smell" },
    { name: "bladder discomfort" },
    { name: "foul smell of urine" },
    { name: "continuous feel of urine" },
    { name: "passage of gases" },
    { name: "internal itching" },
    { name: "toxic look (typhos)" },
    { name: "depression" },
    { name: "irritability" },
    { name: "muscle pain" },
    { name: "altered sensorium" },
    { name: "red spots over body" },
    { name: "belly pain" },
    { name: "abnormal menstruation" },
    { name: "dischromic patches" },
    { name: "watering from eyes" },
    { name: "increased appetite" },
    { name: "polyuria" },
    { name: "family history" },
    { name: "mucoid sputum" },
    { name: "rusty sputum" },
    { name: "lack of concentration" },
    { name: "visual disturbances" },
    { name: "receiving blood transfusion" },
    { name: "receiving unsterile injections" },
    { name: "coma" },
    { name: "stomach bleeding" },
    { name: "distention of abdomen" },
    { name: "history of alcohol consumption" },
    { name: "blood in sputum" },
    { name: "prominent veins on calf" },
    { name: "palpitations" },
    { name: "painful walking" },
    { name: "pus filled pimples" },
    { name: "blackheads" },
    { name: "scurring" },
    { name: "skin peeling" },
    { name: "silver like dusting" },
    { name: "small dents in nails" },
    { name: "inflammatory nails" },
    { name: "blister" },
    { name: "red sore around nose" },
    { name: "yellow crust ooze" },
    { name: "prognosis" },
  ];

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
