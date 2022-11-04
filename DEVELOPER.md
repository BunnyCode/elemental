### Vision

##### MVP
Tanken med applikationen är att kunna göra tabeller av tillexempel, rubrik och brödtext, dag och temperatur. 

##### Extra funktioner
Att kunna göra csv filer som går att ladda in med tillexempel prisdata och spara färdiga script för olika sidor.
Extra parametrar för att göra andra typer av tabeller.
Spara parametrar och ha dem som mallar för websidor, om man enkelt vill hämta samma sak flera gånger.

### Krav


### Testning

All testning sker manuellt, då det inte har mockas data att testa mot.
För att bygger man en dist med webpack (krav då npm skulle användas) för att få in element-scraper, som tar ut hela element från sidan.

Tester utförs genom att bygga en ny dist med npm run build.
Detta gör att webpack packar in de filer vi behöver i ett bundle.

Sen måste vi ladda om addonet i Chrome extension sidan.

Där efter ladda om sidan vi vill hämta data från.

Om man inte redan har sina parametrar, får man använda F12 för att söka fram de klasser (inte id) vi letar efter. (Klasser är endast tillgängligt då dessa ofta finns som ett itererbara element)

Med ctrl + u (MacOS command + u) visar vår addon popup.

Mata in de parametrar man vill använda

Sen genererar man tabellen.


### Kodbeskrivning

Koden är uppdelad i fyra delar. Dessa laddas för att fungera på olika delar av add-onet. 

##### Main

Main funktionen innehåller den logik som triggar funktionalitet när man klickar på knapparna i popup sidan. Detta är huvuddelen av programmet.
Där finns event lyssnare för att notera att data har sparats.
Samt när man vill mata in parametrar och skapa tabellen.
##### Client
Klient delen är ett litet script som injiceras på alla sidor man besöker.
Den har en event lyssnare för att spara DOM som en sträng i Chrome storage, när man trycker på knappen för att hämta sidan nuvarande data.


##### getStoredData
Är en hjälp funktion för att hämta data som klient scriptet sparat.
Det är endast en funktion, men är separerat då det inte har med huvud delens funktioner att göra.

##### Table
Table klassen skapar upp tabellen för vår data. Den ligger i en funktionskatalog, då vi eventuellt vill kunna lägga till andra funktioner.
Den fungerar som ett interface till att skapa html element och fylla dem med den information vi vill ha med i tabellen.
Den ligger för sig själv då vi vill separera ut denna funktionalitet ifrån main och inte blanda in html element där.
Följer man strategimönstret kan man välja att kalla andra funktioner och få en annan utmatning av data.

### vad funkar? 
Vi kan hämta data från i stort sett alla sidor, till Chrome cache. 
Vi har möjlighet att mata in Titel element och brödtextelement.
Vi kan välja vilket element vi vill iterera över.

Det går att göra en tabell ifrån nyheterna och dess brödtext på Sweclockers.com, Det var en bra sida, med tydliga klasser och utan dynamiskt skapade namn.

###vad är kvar?
Att göra csv filer, är nästa steg. 
Där efter hade det varit intressant backend sida där man kan skapa mallar för olika sidor, med sparade parametrar.
Att tillåta andra typer av tabeller med fler rubriker. Där man dynamiskt kan lägga till fler fält och parametrar att hämta med.
