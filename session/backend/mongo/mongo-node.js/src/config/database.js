const { MongoClient, ObjectId } = require("mongodb");

const url = `mongodb://127.0.0.1:27017`;
const dbName = "server-test";
const collectionName = "users";

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected Successfully");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();
    console.log(result);

    const newData = {
      name: "Harry potter & philosopher stone's",
      author: "JK ROLIN",
      length: 92831,
    };

    await collection.insertOne(newData);

    const result2 = await collection.find().toArray();
    console.log(result2);

    await collection.updateMany(
      { author: "JK ROLIN" },
      {
        $set: {
          author: "XYZ",
        },
      }
    );

    const result3 = await collection.find().toArray();
    console.log(result3);

    await collection.deleteMany({ author: "XYZ" });

    const result4 = await collection.find().toArray();
    console.log(result4);
  } catch (error) {
    console.log(error.message);
  }
}

main().catch(console.dir);
