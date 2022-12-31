
const { MongoClient, ServerApiVersion, ListCollectionsCursor } = require('mongodb');
const uri = "mongodb+srv://USER:PASSWORD@cluster0.x2kl1wp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("blog").collection("posts");
  const pipeline = [
    {
      '$match': {
        'likes': {
          '$gt': 1
        }
      }
    }, {
      '$sort': {
        'likes': 1
      }
    }, {
      '$project': {
        'title': 1, 
        'category': 1, 
        'likes': 1
      }
    }, {
      '$limit': 2
    }
  ]

  const agg = await collection.aggregate(pipeline).toArray();
  console.log(agg);

  client.close();
});
