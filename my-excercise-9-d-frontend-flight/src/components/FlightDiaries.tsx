import { NonSensitiveDiaryEntry } from "../types";

interface FlightDiariesProps {
  diaries: NonSensitiveDiaryEntry[];
}

const FlightDiaries = (props: FlightDiariesProps): JSX.Element => {
  console.log("the flight diaries entered");
  return (
    <div>
      {props.diaries.map((diary, index) => {
        return (
          <div key={index}>
            <strong>{diary.date}</strong>
            <p>{"visibility:" + diary.visibility}</p>
            <p>{"weather:" + diary.weather}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlightDiaries;
