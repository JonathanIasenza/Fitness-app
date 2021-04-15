/* eslint-disable jsx-a11y/alt-text */
import React from "react";
/*Components*/
import ExercisesList from "../components/ExercisesList";
import Welcome from "../components/Welcome";
import Add from "../components/Add";
import Loading from "../components/Loading";
import FatalError from "./500";
import ArrowUp from "../components/ArrowUp";
import FooterPage from "../components/FooterPage";
import useFetch from '../hooks/useFetch'
import url from '../config'

const Exercises = () => {
  const {data,loading,error} = useFetch(`${url}/exercises`);

  if (loading) return <Loading />;
  if (error) return <FatalError />;

  return <React.Fragment className="main">
      <Welcome />
      <ExercisesList exercises={data} />
      <Add />
      <ArrowUp />
      <FooterPage />
    </React.Fragment>
}

export default Exercises;