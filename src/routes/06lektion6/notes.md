# Fullstack

Teknikstack - samling av teknologi som används för applikationen - frontend/backend/databaser

Fullstackdeveloper är någon som kan jobba inom allt detta

Vilka vektyg - arkitektur, tas fram av arkitekter/techleads/hela teamet bestämmer

Fördelar med fullstack - mindre beroende av att vänta på andra, bätre förståelse mellan olika delar

Nackdelar: svårt att vara vass inom alla delar samtidigt

Vertical slice - ansvarar för en del av produkten

Micro services - större produkter är uppdelade i små delar som samverkar, t.ex Spotify, Netflix, Klarna, sedan har man designsystem så det ser enhetligt ut

SPA - single page application - vanligt sätt att ha frontend

En enda HTMLsida som modifieras med Javascript för att rita ut vyer, har routes men samma HTML (ändrar bara URL)

## Tips och tricks

Vi har hittills haft happy flow, bra när man gör något nytt, men i skarp produkt behöver man försöka komma bort från det tankesättet

"Vad händer om ett fält saknas" "vad händer om produkten med det här IDt inte finns i databasen"

Early exits - hitta fel så tidigt som möjligt, validera datan - är något fel? skicka statuskod

Kolla om det som förväntas finns där annars 404

Om man har switch eller if, se till att kod gör något oavsett vad som händer

Om async/await, använd try/catch för att se om något går fel

State management - vilket läge appen eller olika delar befinner sig

Om man har formulär för att skapa bör man kunna använda samma för att redigera

Praktiskt att ha variabel som håller reda på om formulär är i create eller edit mode, sedan justera URL

kan vara bra att använda konstant istället för sträng för att undvika stavfel + få intellisense

konvention med konstanter att MAN SKRIVER I CAPS

fetch() och axios - innan vi hade fetch() i JS fanns bibliotek som t.ex Axios med fancy features

idag är fetch() väldigt kompetent, kan vara bra att vara bekant med det

Headers - med POST och PUT måste man berätta vilken datatyp man skickar in med headers

Headers kan innehålla info om anvvändaren eller formatet t.ex header: { "Content-Type": "application/json" }

Data Attributes - kan använda dataattribut på t.ex en knapp för att se vilket item en knapp hänger ihop med

det är attribut som inte har någon funktion i HTML förutom att hålla reda på data

sedan hittar man med e.target.dataset.postid (om data-postid = "thingy")

querySelector: [data-function="edit"]

Kommaseparation - vanligt sätt att göra enskild sträng till en lista med items

.split(",") i "a, b, c" blir då array, kan sedan .join() med kommatecken om man vill få tillbaka strängen

Form reset - rensa formulär: <button type = "reset">, postForm.reset(), addEventListener("reset", ()=>{})

Timestamps - när man skapar/uppdaterar vill man veta när det hände - automatisk sådan kallas för timestamp

antingen i backend/frontend/databas, vanligast att göra så nära databasen som möjligt

vill inte göra i frontend för att den behöver inte veta vad klockan är (användare kan ha konstig klocka)

lita aldrig på klient, gör på servern istället

Tjusigare datum - Date-objekt, i mongoDB är de egen datatyp, i JS eget sorts objekt

finns toDateString(), toLocaleString(), toLocaleDateString()

även getFullFear(), getMonth(), getDate(), eller tredjepartsbibliotek som dateFns

