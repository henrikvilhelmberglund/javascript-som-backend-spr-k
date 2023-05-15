# Cookies

Stateful/stateless

State är vilket läge, hur långt i spel, vilken tab i webbläsare

System som har states är stateful, annars stateless

HTTP är stateless, fungerar bra med statiskt men inte för innloggningar/privata sidor

Webbsidor behöver även hålla reda på inloggning, på servern gör man antingen det i filer eller databas

På klienten finns cookies, små textfiler som sparas i webbläsaren, skickas med i varje request

Man kan spara all möjlig information i cookies

Cookie innehåller:

- vilken domän

- namn

- slutdatum

- innehåll

Cookies har expiration date, utan expiration date håller den en session

Man kan ge cookies ett utgångsdatum genom att sätta en UTC-formatterad datumsträng `expires=etc`

Kan bara finnas ett exemplar av samma property i cookies

Cookies med vanilla JS - lite jobbigt, men finns bibliotek som hanterar detta bättre

Sessioncookies - innehåller bara ett unikt ID, resten sparas som små filer på servern

Sessioncookies är bra för att spara info på servern

Express-session - hanterar session cookies i Express

`app.use(session({}))`

Med express-session får varje req-objekt en session-property, på vilken man kan lägga nya egenskaper

t.ex kolla adminusername och lösenord, om det stämmer kan man sätta user = admin

Dessa egenskaper går sedan att titta på vid senare requests (kolla sessioncookie och göra saker)

Detta ligger på servern och inte på klienten

## Autentisering

Autentisering är sättet användares identitet blir verifierade

Kallar username och password "credentials"

Vi behöver annan metod än HTTP för HTTP är stateless, vi kan istället ha session cookies där vi ger varje användare ett ID

- Lagrar användaruppgifter i en databas

- När man loggar in jämförs inputcredentials etc med databasen

- Sparar uppgifter i sessioncookie

- Backend svarar med hur det gick och cookies sparar i webbläsare

- Nu skicka session cookie med varje request

Kryptering - viktigt att kryptera lösenord så de inte går att läsa

På det viset kan hackers inte läsa lösenord

## Algoritmer, hash och salt

Det sätt en sträng krypteras på kallas för en algoritm

Finns flera som MD5, SHA, BCrypt

En hash är resultat när en sträng (lösenordet) har körts genom algoritmen, detta sparas i detabasen

Salt är extra tecken som läggs till strängen för att göra hashen mer unik och mer komplex att attackera

Kryptering med bcrypt - ett populärt library för att kryptera

Man kan sätta salt rounds för att göra det svårare att hacka, blir långsammare att hasha men ger bättre säkerhet

## Middlewares i Express

middleware - term för funktioner som körs när Express tar emot request

Custom middleware - en funktion som tar emot 3 parametrar:

- request

- response

- next

next talar om att man är klar så det kan köra nästa middleware

middlewares för enstaka routes - om man vill köra en middleware för en route kan man lägga in middleware som andra argument   app.get("/api/secretroute", restrict, (req, res) => {})



