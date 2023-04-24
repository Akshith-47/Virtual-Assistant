const express=require('express')
const app=express();
const cors=require("cors");
app.use(cors());
const mongoose=require('mongoose');
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://soma:16042004%40Ak@ac-mlijg8l-shard-00-00.96bwfeo.mongodb.net:27017,ac-mlijg8l-shard-00-01.96bwfeo.mongodb.net:27017,ac-mlijg8l-shard-00-02.96bwfeo.mongodb.net:27017/?ssl=true&replicaSet=atlas-14nqg1-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const database = client.db('ps');
const songs = database.collection('songs');
async function run() {
  try {
    await client.connect();
    console.log("connected to database");
    
   
    

    // Add a new song to the collection
    const newSong = { title: 'sample',url:"sample.mp4" };
    const result = await songs.insertOne(newSong);
    console.log(`New song added with the following id: ${result.title}`);

    // Retrieve all songs from the collection
    const allSongs = await songs.find({title:"saamisaami"}).toArray();
    console.log('All songs:', allSongs);
  } finally {
    //await client.close();
  }
}
app.get('/:Song', async (req, res) => {
    try {
      const songname = req.params.Song;
      console.log(songname);
      const result = await songs.find({ title: songname }).toArray();
      console.log(result);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
run().catch(console.dir);
app.listen(5001,()=>{
    console.log("Server Started");
});