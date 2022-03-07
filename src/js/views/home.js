import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { GenericCard } from "../component/card.jsx";
import useStore from "../store/zustand";

let ref = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

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
