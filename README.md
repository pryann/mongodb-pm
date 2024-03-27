# Mongodb

## Parts
- mongod : mondoDb deamon
- mongosh: mongoDB shell

## Docker

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

## BSON
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

## Commands:
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
