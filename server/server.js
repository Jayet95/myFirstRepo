const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./development.env" });

const DATABASE_ENDPOINT = process.env.DATABASE_LOCAL_ENDPOINT;
async function connectToDatabase() {
    try {
      await mongoose.connect(DATABASE_ENDPOINT);
      console.log("Connect to mongo DB");
    } catch (error) {
      console.log("Failed to connect with mongo");
    }
  }
  connectToDatabase();


  const PORT = process.env.PORT;

app.listen(PORT, console.log(`Rock & Roll on ${PORT}`));