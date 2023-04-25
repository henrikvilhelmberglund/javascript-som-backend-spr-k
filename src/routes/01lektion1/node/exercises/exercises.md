Tala med terminalen
Övningsuppgifter för Javascript med Node 

01 - console
Skriv ett nodeprogram som skriver ett meddelande till terminalen med console.log()

02 - process.argv
Skriv ett nodeprogram som tittar på de argument som skickades med när det kördes (t.ex. “node main.js greet Kristofer”). 
Om första argumentet är “greet”, skall programmet svara med: “Hello <argument nummer 2>”. 
Om första argumentet är “farewell” skall programmet svara med: “Farewell <argument nummer 2>”. 
Om det inte är något av dessa, skall programmet svara med “ Either "greet" or "farewell" “

03 - readline
Skriv ett nodeprogram som använder readline för att ställa frågan: “What is your name?”
Använd sedan svaret på frågan, och svara i terminalen (med console.log) “Name is: <namnet>”.
Obs! Skapa en package.json-fil och lägg till "type": "module", för att kunna använda import-syntaxen.

04 - prompt
Skriv ett nodeprogram som använder prompt för att ställa frågan: “What is your name?”
Använd sedan svaret på frågan, och svara i terminalen (med console.log) “Name is: <namnet>”.
Obs! Skapa en package.json-fil och lägg till "type": "module", för att kunna använda import-syntaxen. Glöm inte att installera prompt med npm install prompt.

05 - Egen modul
Utgå från uppgift 04 ovan.
Skapa en modul som exporterar en variabel som innehåller frågan, samt exporterar en funktion som skriver ut svaret. 
Importera sedan dessa till din huvudfil och använd dem för att ställa samma fråga och ge samma svar som i uppgift 04. 

Förslag på extra uppgift:

Skapa ett program som ställer och svarar på frågor i en “trädstruktur”. Tänk t.ex. hur en automatisk telefonkö fungerar, eller ett frågeformulär där nästa fråga beror på vad personen svarat innan. Tex om första frågan är “är du morgonpigg?”, och om svaret är “ja” så är nästa fråga “Skall vi ha ett frukostmöte?” och annars så är nästa fråga “Skall vi ha ett lunchmöte?” osv. 



