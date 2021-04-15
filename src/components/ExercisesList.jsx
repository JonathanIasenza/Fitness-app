import React from "react";
import Card from "./Card";

const ExercisesList = ({exercises}) => (
  <React.Fragment>
    {exercises.map((exercise) => (
      <Card
        key={exercise.id} 
        /*destructuring*/
        {...exercise}
      />
    ))}
  </React.Fragment>
);

export default ExercisesList;
