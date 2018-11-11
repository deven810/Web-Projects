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

module.exports.searchInUsers = async function (query) {
  let returnedData;
  try {
    await database.collection("Users").findOne(query)
      .then((val) => {
        returnedData = val; //Process bad data in the controller
        // console.log(val);
        return val;
      })
      .catch((err) => {
        throw err;
      })
    return returnedData;
  } catch (e) {
    console.log("error searching for db query " + e);
    throw e;
  }
}

// C
module.exports.insertPost = async (query) => {
  let promise = await database.collection("Posts").insert(query);
  return promise;
}

// R
module.exports.getAllPosts = async function (query) {
  let promise = await database.collection("Posts").find(query).toArray();
  return promise;
}

// R
module.exports.searchInPosts = async function (query) {
  let returnedData;
  try {
    await database.collection("Posts").findOne(query)
      .then((val) => {
        // if (val) returnedData = val; 
        returnedData = val; //Process bad data in the controller
        // console.log(val);
      })
      .catch((err) => {
        throw err;
      })

    return returnedData;
  } catch (e) {
    console.log("error searching for db query " + e);
  }
}

module.exports.getPostsInRange = async function (query, range, first) {
  try {
    let postArr = await database.collection("Posts")
      .find({ $and: [query, { postid: { $gte: first } }] })
      .sort({ postid: 1 })
      .toArray();

    console.log(postArr);
    return postArr;
  }
  catch (e) {
    console.log('caught error getting posts in range', e);
    throw e;
  }
}

// U
module.exports.updatePost = async (query, title, body, time) => {
  try {
    await database.collection("Posts").update(query,
      {
        $set: { 'title': title, 'body': body, 'modified': time },
      }
    );
  } catch (e) {
    throw e;
  }
}

// D
module.exports.deletePost = async (query) => {
  let promise = await database.collection("Posts").remove(query);
  return promise;
}


