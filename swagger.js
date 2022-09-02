const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "test",
    description: "test applcation",
  },
  tags: [
    {
      name: "create user",
      description: "create user",
    },
    {
      name: "fetch users",
      description: "fetch users",
    },
    {
      name: "fetch single user",
      description: "fetch single user",
    },
    {
      name: "update single user",
      description: "update single user",
    },
    {
      name: "delete single user",
      description: "delete single user",
    },
    {
      name: "login user",
      description: "login user",
    },
  ],
  host: "localhost:8000",
  schemes: ["http"],
};

const outputFile = "./api_json.json";
const endpointsFiles = ["./index.js"];
swaggerAutogen(outputFile, endpointsFiles, doc);
