import { MongoClient } from "mongodb";

async function main() {
  const uri =
    "mongodb+srv://ebektas:Database2022@mymongodb.fuvgfs8.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

main();
