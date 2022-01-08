import React from "react";
import BodyPartsList from "../components/home/bodyPartsStatistics/BodyPartsList";
import WorkoutList from "../components/home/workoutList/WorkoutList";

const WorkoutScreen = () => {
  return (
    <>
      <WorkoutList />
      <BodyPartsList />
    </>
  );
};

export default WorkoutScreen;
