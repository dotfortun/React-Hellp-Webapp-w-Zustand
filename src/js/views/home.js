import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { GenericCard } from "../component/card.jsx";
import useStore from "../store/zustand";

export const Home = () => {
  const store = useStore();
  let people = store.people.map((person) => {
    return (
      <GenericCard
        cardTitle={person.name}
        cardText={[
			<li>Gender: {person.gender}</li>,
			<li>Hair color: {person.hair_color}</li>,
			<li>Eye color: {person.eye_color}</li>
		]}
		cardHREF={store.convertURL(person.url)}
      />
    );
  });

  return (
    <div className="text-center mt-5">
      <div className="card-group">{people}</div>
    </div>
  );
};
