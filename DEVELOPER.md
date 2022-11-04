### Vision

##### MVP
Tanken med applikationen är att kunna göra tabeller av tillexempel, rubrik och brödtext, dag och temperatur. 

##### Extra funktioner
Att kunna göra csv filer som går att ladda in med tillexempel prisdata och spara färdiga script som mallar för olika sidor.


### Krav

För dessa test behöver installationen i Readme vara utförd.

##### Funktionella krav

Det går att starta applikationen enkelt (kortkommando)

Man kan sätta egen rubriktitel och brödtexttitlar på 

Man kan välja vilka element (class) man vill iterera samt vad man vill ha som titel och brödtext

##### Icke funktionella krav

Koden har versionshantering

Koden följer Clean Code ”standarden” så när det går.

Det finns dokumentation hur man får i gång Addonet i readme filen.


### Testning

Test

All testning har fått ske manuellt, då jag inte lyckades mocka data.
För att testa har jag byggt en dist med webpack (krav då npm skulle användas) för att få in element-scraper.

Tester utförs genom att bygga en ny dist med npm run build.
Detta gör att webpack packar in de filer vi behöver i ett bundle.

Sen måste vi ladda om addonet i Chrome extension sidan.

Där efter ladda om sidan vi vill hämta data från.

Om man inte redan har sina parametrar, får man använda F12 för att söka fram de klasser vi letar efter.

Med ctrl + u (MacOS command+u) visar vår addon popup.

Mata in de parametrar man vill använda

Sen genererar man tabellen.


####Testprotokoll

-	**1.0 Öppna popup med kortkommando**
Tryck Ctrl + U
addonet öppnas
-	**1.1 Hämta från en sida**
Klicka på knappen hämta data
URLen för den nuvarande sidan visas
- **1.2 Skapa en tabell**
Gå till Sweclockers.
Fyll i följande paramertar, uppifrån och ner
*Titel*
*Bröd Text*
*card* (nyheterna ligger i denna klass)
*titel*
*bbParagraph* (brödtexten har denna klass)


| Krav | Test                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Beskrivning                                                   | Resultat |   |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|----------|---|
| 1.0  | 1. Klicka Ctrl + U (command + U på MacOs)                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Öppna popup med kortkommando (Kräver installation, se README) | OK       |   |
| 1.1  | 1. Gå till en websida.<br>2. Öppna addonet i webläsaren<br>3. klicka på Get Data<br>4. Verifiera att du får meddelande<br>Data Captured from: <Din URL>                                                                                                                                                                                                                                                                                                                                             | Hämta från en sida                                            | OK       |   |
| 1.2  | 1. Gå till www.sweclocker.com (testad sida)<br>2. Starta addon med Ctrl+U<br>3. Klicka på "Get Data"<br>4. Verifiera att du får en respons som i 1.1<br>5. Klicka på "Capture parameters"<br>6. Fyll i följande parametrar<br><br>**Table title header name**<br>Titlar<br>**Table data header name**<br>BrödText<br>**Get data from elements containg attribute:**<br>card<br>**Get titles from attribute**<br>title<br>**Get data from attribute**<br>bbParagraph<br><br>7. Verifiera att du får ett resultat som bilden nedan | Skapa en tabell                                               | OK       |   |

![Test Resultat](/readme_img/test_report.png)

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

### vad är kvar?
Att göra csv filer, är nästa steg. 
Där efter hade det varit intressant backend sida där man kan skapa mallar för olika sidor, med sparade parametrar.
Att tillåta andra typer av tabeller med fler rubriker. Där man dynamiskt kan lägga till fler fält och parametrar att hämta med.
