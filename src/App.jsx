import Client from "fhir-kit-client"
import React, { useEffect, useState } from "react";
import './App.css';
import Questions from "./components/Questions";
import Table from "./components/Items/Table"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchQuestionList();
  },[])

  const fetchQuestionList = async () => {
    try {
      const client = new Client({ baseUrl: "https://hapi.fhir.org/baseR4" });
      const response = await client.search({
        resourceType: "Questionnaire",
        searchParams: {},
      });

      
      setData(response?.entry || []);
    } catch (error) {
      console.error("Veri çekme hatası!", error);
      setData([]); // Veri çekme hatası durumunda data state'ini boş bir dizi olarak güncelliyoruz.
    }
  };

  return (
    <div className="App">
      
          <Questions data={data}></Questions>
    </div>
  );
}

export default App;
