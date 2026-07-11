const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contact API",
    description: "Contact API",
  },
  host: "localhost:3000",
  schemes: ["https", "http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
