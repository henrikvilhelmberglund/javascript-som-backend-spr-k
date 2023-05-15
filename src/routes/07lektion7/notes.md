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

Cookies med vanilla JS - lite jobbigt, men finns bibliotek som hanterar detta bättre

Sessions - innehåller bara ett unikt ID, resten sparas som små filer på servern

Sessions är bra för att spara info på servern

Kan bara finnas ett exemplar av samma property i cookies

## Autentisering
