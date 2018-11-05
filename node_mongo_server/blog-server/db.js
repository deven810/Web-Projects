const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = 'mongodb://localhost:27017/BlogServer';
let database;

async function connect(url = "Posts", query = "") {
  await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, function (err, db) {
    if (err) {
      console.log(err);
    }
    else {
      database = db.db("BlogServer");
    }
  });
}; 
connect();
function searchInPosts(query) {
  database.collection("Posts").findOne(query, (err, value) => {
    if (err) {
      throw err;
    } else {
      console.log(value) 
    }
  });
}

module.exports = searchInPosts;