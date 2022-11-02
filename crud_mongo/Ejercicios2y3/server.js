
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
  console.log('Database Name:', req.body.db_name, 'Collection Name:', req.body.collection_name, 'First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);

  const mydb = req.body.db_name;
  const coleccion = req.body.collection_name;


  const myobj = { "nombre": req.body.first_name, "apellidos": req.body.last_name, "email": req.body.email };

  //Creacion de una BD 
  MongoClient.connect(url + mydb, function (err, db) {
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
  });

  //Creacion de una coleccion dentro de una BD
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.createCollection(coleccion, function (err, res) {
      if (err) throw err;
      console.log("Colección creada");
      db.close();
    });
  });

  //Insertar dentro de una coleccion de una BD
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);

    dbo.collection(coleccion).insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("Documento insertado");
      db.close();
    });
  });
});

app.post('/create', urlencodedParser, (req, res) => {
  console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
  res.send(req.body);

});

app.listen(3000);
