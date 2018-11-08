const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/BlogServer';

let database;
async function connect(url = "Posts", query = "") {

  await MongoClient.connect(MONGODB_URI)
    .then(function (db) {
      database = db;
    })
    .catch(function (err) { console.log(err); })
};

connect();

module.exports.searchInPosts = async function (query) {
  let returnedData;
  try {
    await database.collection("Posts").findOne(query)
      .then((val) => {
        if (val) returnedData = val;
        console.log(val);
      });

    return returnedData;
  } catch (e) {
    console.log("error searching for db query " + e);
  }
}


