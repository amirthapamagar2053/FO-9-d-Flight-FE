import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FlightDiaries from "./components/FlightDiaries";
import NewFlightEntryDiary from "./components/NewFlightEntryDiary";
import { NonSensitiveDiaryEntry } from "./types";

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  useEffect(() => {
    console.log("the app effect entered");
    axios.get("http://localhost:3000/api/diaries").then((response) => {
      console.log("the respons e", response);
      setDiaries(response.data);
    });
  }, []);
  return (
    <>
      <NewFlightEntryDiary setDiaries={setDiaries} />
      <h1>Diary entries</h1>
      <FlightDiaries diaries={diaries} />
    </>
  );
}

export default App;
