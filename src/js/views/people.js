import React from "react";
import useStore from "../store/zustand";
import { Link, useParams } from "react-router-dom";
import Debug from "../component/debug";

export const People = () => {
  const store = useStore();
  const params = useParams();
  let person = store.people[params.peopleId - 1];

  return (<div>
    <Debug
      message={person ? person.name : ""} // if person exists, then we use the person's name, else we have an empty string.
      object={person} // The object that we are pretty printing, this is the colorful text.
    />

    {/* This links to the homeworld of the person. */}
    <Link
      to={{
        pathname: person ? store.convertURL(person.homeworld) : "", // This line sets the href attribute of the link.
        // if person existst, then convert the url from that data object, else leave the link empty.
      }}
    >{
      person ? person.name : "" // if person exists, then we use the person's name, else we have an empty string.
    }'s homeworld.</Link>
  </div>);
};
