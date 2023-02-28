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
  const [notifications, setNotifications] = useState("");

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
      )
      .catch((error) => {
        setNotifications(error.response.data);
      });
  };

  return (
    <div>
      <h1>Add new entry</h1>
      {notifications === "" ? (
        notifications
      ) : (
        <p style={{ color: "red" }}>{notifications}</p>
      )}
      <form onSubmit={diaryCreation}>
        <label>
          date
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          visibility
          <>
            <input
              type="radio"
              name="poor"
              value="poor"
              checked={visibility === "poor"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label>poor</label>
            <input
              type="radio"
              value="great"
              checked={visibility === "great"}
              name="great"
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label>great</label>
            <input
              type="radio"
              value="ok"
              checked={visibility === "ok"}
              name="ok"
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label>ok</label>
            <input
              type="radio"
              value="good"
              name="good"
              checked={visibility === "good"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label>good</label>
          </>
        </label>
        <br />
        <label>
          weather{" "}
          <>
            <input
              type="radio"
              name="sunny"
              value="sunny"
              checked={weather === "sunny"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label>sunny</label>
            <input
              type="radio"
              value="cloudy"
              checked={weather === "cloudy"}
              name="cloudy"
              onChange={(event) => setWeather(event.target.value)}
            />
            <label>cloudy</label>
            <input
              type="radio"
              value="rainy"
              checked={weather === "rainy"}
              name="rainy"
              onChange={(event) => setWeather(event.target.value)}
            />
            <label>rainy</label>
            <input
              type="radio"
              value="stormy"
              name="stormy"
              checked={weather === "stormy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label>stormy</label>
            <input
              type="radio"
              value="windy"
              name="windy"
              checked={weather === "windy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label>windy</label>
          </>
        </label>

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
