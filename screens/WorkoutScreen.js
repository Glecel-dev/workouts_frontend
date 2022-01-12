import React from "react";
import BodyPartsList from "../components/home/bodyPartsStatistics/BodyPartsList";
import WorkoutList from "../components/home/workoutList/WorkoutList";

export default function WorkoutScreen  ()  {
  return (
    <>
      <WorkoutList />
      <BodyPartsList />
    </>
  );
};

