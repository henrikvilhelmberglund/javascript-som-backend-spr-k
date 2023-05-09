# API

application programming interface

## abstraktion och implementation

inte viktigt hur, bara vad effekten blir (abstraktion)

abstraktion: getAllListItems()

implementation: (själva funktionen)

API: samling av funktioner som gör att man kan interagera med ett system

exempel: Express, programmera en robot, Google books

API är ansiktet utåt

vi använder abstraktionen, bryr oss inte om implementationen

API på webb, visar bara data

URL som svarar med olika typer av data kallas för endpoints

oftast strukturerad i visst format: JSON

öppna vs interna API, man kan ha interna eller också öppna för externa användare

olika typer: RPC, SOAP, GraphQL, REST (vanligaste)

CORS - cross origin resource sharing

regler som reglerar vilka andra domäner som kan anropa deras

kan stöta på problem i frontend, kan då låta backend agera mellanhand

## REST

REpresentational State Transfer

Web API och CRUD

Create - POST

Read - GET

Update - PUT (och PATCH)

Delete - DELETE

gör anrop till endpoint med dessa metoder

Endpoints/routes

endpoints för olika resurser/innehåll

http://localhost:3000/users

gör GET mot den URLen och POST mot samma URL för att spara en ny user

specifika: users/12 med GET/PUT/DELETE (men inte POST)

Request body: om vi gör GET eller DELETE behöver vi inte skicka med

om POST/PUT måste vi ha request body

## POSTMAN

prata med APIer

när man utvecklar ett REST-API kan det vara enklare att testa med ett program som kan skicka requests/läsa respons

Workspaces - ett sätt att organisera projekt

vanligast att man har ett per projekt

kan också dela workspaces med andra

environments: local (lokal dator) och production (användare besöker) (sedan quality assurance, demo etc) kan ha olika variabler per environment

Skicka requests - t.ex GET till URL, kan skräddarsy, sedan spara requests till senare

Requestbody: Postman stödjer många typer av bodies, vi kan ställa in att vi skickar JSON

Respons: får response, t.ex 500, 404, oftast 200 med datan man vill ha
