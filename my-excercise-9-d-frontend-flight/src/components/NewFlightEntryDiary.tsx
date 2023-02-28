import axios from "axios";
import React, { useState } from "react";
import { NonSensitiveDiaryEntry, Visibility, Weather } from "../types";

interface NewFlightEntryDiaryProps {
  setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewFlightEntryDiary = (props: NewFlightEntryDiaryProps): JSX.Element => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState<Visibility | string>();
  const [weather, setWeather] = useState<Weather | string>();
  const [comment, setComment] = useState("");

  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newFlightEntry = {
      date,
      visibility,
      weather,
      comment,
    };
    console.log("the newflight entery", newFlightEntry);
    axios
      .post("http://localhost:3000/api/diaries", newFlightEntry)
      .then((response) =>
        props.setDiaries((prev: NonSensitiveDiaryEntry[]) => [
          ...prev,
          response.data,
        ])
      );
  };

  return (
    <div>
      <h1>Add new entry</h1>
      <form onSubmit={diaryCreation}>
        <label>date</label>
        <input value={date} onChange={(event) => setDate(event.target.value)} />
        <br />
        <label>visibility</label>

        <input
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        />
        <br />
        <label>weather</label>

        <input
          value={weather}
          onChange={(event) => setWeather(event.target.value)}
        />
        <br />
        <label>comment</label>

        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewFlightEntryDiary;
