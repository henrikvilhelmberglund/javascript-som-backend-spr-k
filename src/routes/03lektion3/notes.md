databas (mjukvara+datan)

3 kategorier

- relationsdatabaser: excelliknande tabeller, relaterar via relationer kunder/produkter/köpta produkter separat, allt ska ha sin egen plats ex. MySQL

- grafdatabaser: relationer och även kontaktytor mellan datan, ex. Neo4J

- dokumentdatabaser: lagrar i dokument, relationer är mindre viktigt, fokus på flexibilitet och att kunna hitta data i stora mängder ex. MongoDB

# MongoDB

data sparas i dokument

vanligt att man definierar "scheman" som beskriver innehåll

collections - users, journalEntries

en stor föredel är att dokumenten överensstämmer väldigt direkt med objekt som sedan används i koden

BSON - som JSON fast med extra datatyper som Date, ObjectId och några binära datatyper

brukar inte generera \_id själv

## collections

man behöver inte planera allt för mycket i förväg eftersom dokumentets form inte behöver vara spikat

hålla relationer till minimum

enkelt att organisera data utifrån collections - users i users, products i products, om man vill lägga till kundvagn kan man göra det i userdokumentet

## mongosh

finns även Compass, men vi använder mongo shell (mongosh) för att det mest liknar koden vi sedan skriver

## commands

show dbs (se databaser)

use lektion (välja databas)

db

db.myFirstCollection.insertOne({x: 1})

show collections (se collections i databas)

## skapa/lägga till data

insertOne, insertMany

db.<collection>.insertOne( {prop: value})

db.<collection>.insertMany([ {prop: value}, {prop: value}])

## läsa data

db.<collection>.find()

db.<collection>.find({}) för att se allt

mindre än: { prop: { $lt: value }}

större än: { prop: { $gt: value }}

matchar något av flera möjliga: { color: { $in: ["blue", "yellow"]}}

## hämta delar av dokument

kan skicka med ett argument med de properties man vill ha med

db.<collection>.find({}, {propA: 1, propB: 1})

ettan betyder att man vill ha saken

## sortering

chaina sort() efter find()

db.<collection>.find({}, {x: true}).sort({x: -1})

-1 för högsta till lägsta

## uppdatera dokument

updateOne() updateMany()

två argument: matchningsobjekt, objekt där man kan använda $set och $unset för att lägga till/ändra eller ta bort

kan matcha på null `(name: null)` med updateMany() för att lägga till överallt där det fattas

för att lägga till i en existerande array använd $push

```
db.students.updateOne(
   { _id: 1 },
   { $push: { scores: 89 } }
)
```

## ta bort dokument

deleteOne() deleteMany()

var försiktig för den tar bort utan att fråga

## hitta i objekt

om vi vill filtrera på perDay inuti activities:

db.animals.find({"activities.perDay": {$gt: 2}})
