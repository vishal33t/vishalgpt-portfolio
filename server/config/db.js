const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

let db;

async function connectDB() {
  try {
    await client.connect();

    db = client.db("vishalgpt_portfolio");

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connectDB,
  getDB,
};