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

static file serving: finns inbyggd middleware: static()

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

index.html tar över /-routen (beware)

---

Templating med EJS

påminner om template literals och innerHTML

```
<% if (user) { %>
<h2><%= user.name %></h2>
<% } %>
```

templating engines - handlebars, doT, Pug, Nunjucks

den vi kommer använda är EJS

en av de mest använda, fungerar med express, mix av HTML och javascript, blir .ejs-filer

behöver berätta till express var template-filerna finns och vilken engine som ska användas

app.set("views", "./views");

app.set("view engine", "ejs");

använder render() på response-objektet, tar två argument, vilken templatefil och ett objekt som kan läsas av templatet

template tags:

<% %> kör javascript

<%= %> skriver ut ett värde som escaped HTML (mellanslag blir %20 etc)

<%- %> skriver ut ett värde direkt utan escape, mest användbart för "includes"

includes - kan dela in sidorna i flera olika delar och inkludera t.ex header/footer så slipper man ha på varje sida

kan loopa igenom data:

<ul>
<% users.forEach(function(user) { %>
<li>
etc
</ul>

router parameters - skriver kolon

/user/:userid

sparas i params

const user = users.find((user) => user.id === req.params.userid);

i app.get

status codes - 404 etc

om något blir fel (inte happy flow) är det bra att skicka error

t.ex status(), tar emot statuskod som man vill skicka tillbaka

bör skicka ett meddelande också om vad som hände
