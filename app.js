const express = require("express");
require("dotenv").config();
require("express-async-errors");
// const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const main = require("./routes/main");

const app = express();

const PORT = process.env.PORT || 3000;
// const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(express.static("./public"));
app.use(express.json());

// ROUTE HANDLER
app.use("/api/v1", main);

// FOR INVALID ROUTES
app.use(notFound);

// GLOBAL ERROR HANDLER
app.use(errorHandler);

// const startApp = async () => {
//   try {
//     console.log(`connecting to db using ${MONGO_DB_URI}`);
//     await connectDB(MONGO_DB_URI);
//     console.log("connected to db...");
//     app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
//
// startApp();

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
