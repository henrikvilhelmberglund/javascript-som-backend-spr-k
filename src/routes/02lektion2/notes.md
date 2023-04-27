Express

express() för att skapa instans

app.get("/users", callback);

callback tar emot request och response

när config är klar, börja lyssna: listen()

app.listen(port, ()=>{});

---

Nodemon

npm install nodemon

startar om processen varje gång man ändrar i koden

kör npx nodemon filnamn.js

---

response objektet har property query med querystring

req.query.message

t.ex 127.0.0.1:3002/query?message=hello there

---

middlewares - utökar funktionalitet

kan skriva egna/använda third party/inbyggda

använder med express-objektets use()

ska ta emot request, response och next-funktion

static file serving: finns inbyggd middleware:  static()

app.use(express.static("public"));

först alla routes etc, sist listen

viktigt för de+middlewares anropas i den ordning man skriver

---

handskas POSTad data: default-format URLEncoded

middleware: urlencoded();

app.use(express.urlencoded());

---

HTML forms

man läser av name-property med backend

(enkelt om man har samma namn för id och name)

<input type="text" id="username" name="username">

viktigt med method post

---

post routes

app.post("/user", callback);

får tillbaka body i requestobjektet

req.body

---

Templating
