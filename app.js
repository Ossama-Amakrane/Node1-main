const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
})




mongoose.connect("mongodb://oussdev:8sV8gk7fHMMtt5N7@ac-1hg5sa2-shard-00-00.j3xkj7d.mongodb.net:27017,ac-1hg5sa2-shard-00-01.j3xkj7d.mongodb.net:27017,ac-1hg5sa2-shard-00-02.j3xkj7d.mongodb.net:27017/all-data?ssl=true&replicaSet=atlas-12vynp-shard-0&authSource=admin&appName=Cluster0")
.then(() => {app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})})
.catch((err) => {console.log ( "MongoDB error: ", err)})



