export const people = [
  {
    id: "0",
    name: "japple",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "jbanana",
    age: 20,
    gender: "female",
  },
  {
    id: "2",
    name: "jcloud",
    age: 22,
    gender: "male",
  },
  {
    id: "3",
    name: "jdomain",
    age: 23,
    gender: "male",
  },
  {
    id: "4",
    name: "jedit",
    age: 24,
    gender: "male",
  },
  {
    id: "5",
    name: "jfire",
    age: 30,
    gender: "male",
  },
  {
    id: "6",
    name: "jgame",
    age: 60,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => people.id === id);
  return filteredPeople[0];
};
