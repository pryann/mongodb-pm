# NoSQL

## Típusai
- Dokumentum-alapú adatbázisok:
  A dokumentumtárolók központi koncepciója a dokumentum. A dokumentum valamilyen formátumban tárolt információ.
  Példák: MongoDB, Couchbase
  Használják: Rugalmas adatmodellhez, JSON vagy BSON formátumú dokumentumok tárolásához, gyakran webes alkalmazásokhoz és tartalomkezelő rendszerekhez.

- Kulcs-érték tárolók:
  A kulcs-érték adatbázisok séma nélküli adattárolást tesznek lehetővé, az értékeket a kulcsok segítségével lehet elérni illetve felülírni és ezen felül általában kevés műveletet támogatnak.
  Példák: Redis, Riak
  Használják: Gyors adateléréshez, cachinghez, számlálókhoz, üzenetsorokhoz és munkamenedzsmenthez.

- Osztott oszlopfamilyás adatbázisok:
  Táblákat, sorokat és oszlopokat használ, de ellentétben a relációs adatbázisokkal, az oszlopok neve és formátuma változhat soronként ugyanabban a táblában. A széles oszlopfamilyás adatbázist egy kétdimenziós kulcs-érték tárolónak lehet értelmezni.
  Példák: Apache Cassandra, HBase
  Használják: Rendkívül nagy méretű adatok tárolásához, amelyeket nagyon gyorsan kell lekérdezni, skálázható és elosztott környezetben.

- Gráf adatbázisok:
  A gráf-adatbázisok olyan adatok tárolására specializálódtak, amelyek jól modellezhetőek gráfként, azaz az adatok határozatlan számú kapcsolattal vannak összekötve
  Példák: Neo4j, Amazon Neptune
  Használják: Kapcsolati adatok tárolásához, hálózatok, szociális hálózatok, telekommunikációs rendszerek, rekommendációs rendszerek esetében.

## Docker

### Parts
- mongod : mondoDb deamon
- mongosh: mongoDB shell

### Docker

- create a `docker-compose.yml` file
```shell
version: '1.0.0'

services:
  mongodb:
    image: mongo:latest
    container_name: mongodb-pm
    restart: unless-stopped
    volumes:
      - ./scripts:/scripts
    ports:
      - '27017:27017'
    
```

- VALÓS ALKALMAZÁNÁL MINDIG LEGYEN USERNAME ÉS PASS PÁROS MEGADVA!!!
  A ports alatt:
    ```shell
  environment:
  - MONGO_INITDB_ROOT_USERNAME=mongoadmin
  - MONGO_INITDB_ROOT_PASSWORD=bdung
  ```
- A `docker-compose.yml` fájl mappájában ki kell adni:  `docker compose up`
- A konténerbe és futtatjuk a mongosh-t: `docker exec -it mongodb-pm mongosh`

### BSON
- A MongoDB dokumentum leíró formátuma, hasonló, mint a JSON
- Alapba 16 mega egy dokumentum
- [BSON típusok](https://www.mongodb.com/docs/manual/reference/bson-types/)
- SQL (az oszlopok kötöttek, ha valami nem kötelező adat, akkor NULL): 
  - columns: country, province, zip, city, street, type, house_number, floor, door
    -                    NULL                                           NULL  NULL
  - NoSQL (Nem kötött a struktúra):
      - ha minden adat meg van adva:
      ```json
      {
        "country": "",
        "province": "",
        "zip": "",
        "city": "",
        "street": "",
        "type": "",
        "house_number": "",
        "floor": "",
        "door": ""
      }
      ```
    
      - ha valami nincs, nem is kell felvenni:
      ```json
      {
      "country": "",
      "zip": "",
      "city": "",
      "street": "",
      "type": "",
      "house_number": ""
      }
      ```
    - De lehet validáció: [https://json-schema.org/](https://json-schema.org/)

### Commands:
- [mongosh CRUD](https://www.mongodb.com/docs/mongodb-shell/crud/#std-label-mdb-shell-crud)
- [CRUD operations exampels](https://www.mongodb.com/basics/crud)
- DB lista: `show dbs`
- DB létrehozáása/használatba vétele: `use DBNAME`
- collections lista: `db.getCollectionNames()`
- Insert one: `db.users.insertOne({name:"Gáll Gergely", job: "mentor", age: 40 })`
- Régi verziókban insert parancs is volt, deprecated
- Insert many: `db.users.insertMany([{name: "Jane Doe"}, {name: "Jack Smith", age: 30}])`
- Find all: `db.users.find()` kb: `SELECT * FROM users`
- Script betöltése: `load('SCRIPT FILE PATH)`
- Find one: `db.users.find({year: 1992})` kb: `SELECT * FROM books WHERE year=1992`
- Find one: `db.books.find({year: 1992}, {author: 1, pages: 1})`
  kb: `SELECT author, pages FROM books WHERE year=1992`
- Find one:  `db.books.find({year: {$gt : 1992 }}, {author: 1, pages: 1})`
  kb: `SELECT author, pages FROM books WHERE year>1992`
- [Operátorok](https://www.mongodb.com/docs/manual/reference/operator/query/)
- update one: `db.books.updateOne({author: 'Alyson Fincke'}, { $set: { pages: 1000 }})`
- update one: `db.books.updateOne({author: ObjectId('6604128c0f003bb469db83cb')}, { $set: { pages: 1000 }})`
- update Many: `db.books.updateMany({ pages : { $lt : 100 }, {$set : { pages: 100 }}})`
- replace: `db.books.replaceOne({_id: ObjectId('6604128c0f003bb469db83da')}, { author: "Replaced author", title: "Replaced title"})`
- delete one: `db.books.deleteOne({_id: ObjectId('6604128c0f003bb469db83da')})`
- delete many: `db.books.deleteMany({ pages : { $lte : 200 }})`
- update array: `db.cars.updateOne({ _id: ObjectId('660422120f003bb469db83f0')}, { $set : {owners: ["Bob", "Bobek"]}})`
- [Update operators](https://www.mongodb.com/docs/manual/reference/operator/update-array/)
- pull one: `db.cars.updateOne({ _id: ObjectId('660422120f003bb469db83f0')}, { $pull : { owners : "Bob" }})`
- pull many (radable multiline):
  ```shell
  db.cars.updateOne(
    {
      _id: ObjectId('660422120f003bb469db83ef')
    }, 
    { 
      $pull : 
      { 
        owners : 
        { 
          $in : ["Jane", "Joe"] 
        } 
      } 
    })`
  ```
- push to many: `db.cars.updateMany({}, { $push : { owners : "Lulu" }})`
- push many to many: `db.cars.updateMany({}, { $push : { owners : { $each : ["Gizike", "Béluka"] } }})`

### GUI tools:
- [NoSQL Booster](https://nosqlbooster.com/)
- [Studio3t - régen Robo3t néven futott](https://studio3t.com/) (free, regisztrációhoz kötött)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass) (official)

### Other tools
- [Choco](https://chocolatey.org/install)
