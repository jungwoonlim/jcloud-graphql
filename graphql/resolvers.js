const jcloud = {
  name: "jcloud",
  age: 30,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => jcloud,
  },
};

export default resolvers;
