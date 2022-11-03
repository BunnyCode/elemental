# Reflektioner mellan boken och min kod.

Jag går igenom kapittel för kapittel och beskriver hur jag implementerart kunsakapen.

### Kapitel 1 (Ren kod)

Detta är ju ett samlings kapitel om vad det innebär att skriva ”ren kod”. 
Här har jag försökt att hålla koden kort, men med bra variabel namn och en struktur man kan jobba vidare på och expandera. Så att man inte en dag sitter med en kodbas där man inte kan eller vågar ändra saker för att man är rädd att något annat ska gå i sönder. 

### Kapitel 2 (Meningsfulla namn)

Detta är något av det svåraste, namnen ska vara beskrivande och utföra det dom säger sig göra. Jag har ofta varit kluven på om dom är tydliga nog eller bara gör exakt det dom ska göra. Är det ok att hämta data innan för att sen visa något, eller ska det vara 2 funktioner?
Denna balansgång är svår, men har funnit att om man inte både visar och ändrar saker så är man på rätt spår.
Variabler är lättare att namnge, tills dom kan ha olika betydelser, för mig och en senare utvecklar. 
Med detta menar jag att det jag kallar för ”titleData” och ska vara titel data i tabellen, kan uppfattas annorlunda av någon annan som använder verktyget i en annan kontext. Jag läser ut titlar från tekniknyheter, vad händer om man läser ut dagar och temperatur. Är dagen en titel?
Alla namn är skrivna så att dom ska gå att läsa och relatera till, för någon som har grundkunskaperna i HTML. Dom är tillräckligt specifika för att man ska kunna söka efter dem, tillexempel ”setTitleTableHeaderText” eller ”getBodyDataFromStorage”.
För att undvika att få med magiska nummer har jag döpt om de få siffror på index till namn, så man vet vad funktionen gör.

Förutom detta har jag undvikit att ha vilseledande namn eller namn som inte tillhör domänen webb.

### Kapitel 3 (Funktioner)

I största möjliga mån är funktioner utbrutna till de minsta delar det går utan att det blir svårt att följa koden.
Koden ska göra en sak, antingen ge information eller ändra information.
I vissa fall har jag valt att hämta information och sen visa den, då detta gör att man kan följa kod flödet bättre. 
Har man dessutom bra namn på sina funktioner så blir det naturligare.
Men jag har inte med funktioner som har sidoeffekter. 
Jag har inte använt funktioner med flaggargument eller fler än 2 argument, detta har också lett till att funktionerna tenderar att göra mindre, samt bli kortare.
I de fall där funktioner liknar varandra har jag döp dem så att det går att återanvände dem.
Så som: ”function parseContent(content, elementToGet)”
Som hämtar både titeln och brödtexten.


### Kapitel 4 (Kommentarer)

Det finns en del kommentarer i koden, trots att funktionerna har bra namn.
Detta för att beskriva min avsikt. Detta med anledning att JavaScript kommandona som används för DOM manipulation inte alltid är så tydliga.
Inga djupgående detaljer finns med, för att undvika att kommentarerna tappar relevans eller blir osanna. Där finns ingen utkommenderad kod som inte ska köras eller som används för debugging, som senare kan vara vilseledande. 


### Kapitel 5 (Formatering)

Information som tillhör vartannat ligger nära. Alltså funktioner och variabler som är samhörig ligger på närliggande rader för läsbarhet.
All kod är formaterad på ett sätt som gör att det finns utrymme mellan blocken, för att öka läsbarheten och minska påfrestningen av att titta på en klump av text, altså openness between concepts.
Indentering har gjorts med hjälp av verktyget pretier, för att det ska se lika dant ut överallt.

Läser man koden uppifrån och ner så kan man nästan följa exekveringsordningen, lite som tänket med en nyhetstidning.

Jag har tänkt på vertikal formatering men även att bryta ut det som hör ihop.
Tillexempelvis är tabelltillverkningen förlagd i en egen fil, då den endast gör det.
Medan main scriptet har ansvar för att anropa rätt funktioner i den.

De ställen där man hade kunnat förbättra koden är i event lyssnarna. Här skulle man kunna bryta ut funktioner. Använda sig av strategimönstret för att lätt byta funktionalitet. Med det hade man kunnat bygga ut funktionaliteten på ett enkelt sätt och bara peka om funktionen som ska anropas.


### Kapitel 6 (Data abstraktion)

Jag finner att det är svårt i JavaScript i skillnad från Java att gör saker ”privata”, då språket inte är byggt på det sättet.
Det är även skrivet på ett proceduellt sätt och inte objekt orienterat, på det sätt man i normala fall kan tänkas göra i Java. Där av blir förändringar med nya funktioner lite mer ingripande, men går relativt enkelt att göra med strategimönstret.
Som skrivit tidigare så är koden uppdelad beroende på vad den gör. Alltså vet inte main vad som sker i table klassen. Detta är enligt ”Law of Demeter”.

### Kapitel 7 (Felhantering)

Felhantering är i stort sett frånvarande. Ingen del av koden kraschar så att applikationen hänger sig, vid felaktig inmatning. Dock får man inte den data man tänkt sig, samt kastas endast fel som uppstår i konsolen för plugginet, dom är lite bökig att komma till.
De fel som kan komma är undefinded. Jag inser att jag bör göra kontroller efter undefined och sen ge användaren information. Men man får inga fel som går att köra try catch på. Denna del har kommit lite i skymundan av utvecklingen. Jag har en del funderingar hur man ska göra i JavaScript för att hantera undefined, då dom liknar Null. Något man bör undvika, då man måste ha if kontroller. Dessa kontroller var inget som var rekommenderat i boken. Här har vi ju också problemet att en miss av en undefined check hade lett till okontrollerat beteende. 

Detta är en del jag måste jobba jättemycket med, för utan felhantering blir det svårt att meddela när saker inte går som dom ska. Jag har dock god förståelse för vikten av bra meddelande, ingen vet vad fel 42 är.

### Kapitel 8 (Gränsdragning)

Denna del är lite luddig, men jag har försökt att låta moduler som gör en sak ha hand om den data dom har att göra med.
Detta för att inte behöva ändra kod på flera ställen, för att en sak ska ändra sig. Tillexempel så skickar jag inte specifik tabellinformation till tabell klassen, utan ber den att lägga till head och body. Men hur den gör det vet inte main.
I en så pass liten applikation som denna är det ganska få gränser att tänka på, men i större miljöer som tillexempel tillämpar MVC blir detta mycket uppenbart.
Om appen dess utom ska jobba med mer av de APIer som finns tillgängliga i Chrome, så hade jag lagt till någon form av adapter eller inteface för att slippa skriva API kod, som sen kan komma att ändras. Nu har jag väldigt liten sådan kod, men den är separerad ifrån main.

### Kapitel 9 (Enhetstester)

Inget har kunnat testas med enhetstester.
Kort och gott hade jag behövt skriva tester och mocha data för att kunna göra detta.
Men då jag inte har erfarenhet eller kunskap om att göra mockningen så blev detta omöjligt, med den komplexitet jag dragit på mig (Chrome extension).
Jag hade tanken att man kan spara DOM data i en variable, som man ger i stället för att hämta ur Chrome storaget. Detta är ju det normala vid mochning.
Det hade varit trevligt at kunna skiva ett par testfall som man vill ha sanna och sen koda. Göra en iteration med nya testfall och sen koda. Och kunna följa de 3 ”lagarna”.
Men det är svårt att skriva läsliga, tydliga tester när man inte vet hur man ska göra dessa på ett bra sätt. 
Manuell testning har tyvärr varit de facto, då jag var tvungen att packa mitt add-on med webpack för att få det att funka i webbläsaren.

Här ser jag fram emot nästa kurs som är just testning.

### Kapitel 10 (Klasser)

Med risk för att låta som en trasig vinyl. Men åter igen finns det en klass, som funkar som ett interface för att bygga webbelement. Den är liten på så sätt att den endast gör detta.
I övrigt finns det inga klasser, då det är vanligast att man har funktioner i sin huvudfil.
Klassen har dock ingen riktig ”cohesion” då den inte delar några parametrar mellan funktionerna, utan är en samling av funktioner som importeras som ett attribut i main.
Jag följer OCP (Open closed principle) genom att det är lätt att lägga till eller expandera funktioner, dock är det svårt att ändra funktionerna, utan att hela klassens funktionalitet ändras.

### Kapitel 11 (System)

Separation of Concernes, Är väl hela den röda tråden i alla delar av denna bok.
När jag planerade upp min applikation hade jag massor av idéer. Men bestämde mig för att börja smått och sen bygga därifrån.
Även om planen var massor med funktioner så bröt jag ner det i det absoluta minimum, då det inte gick att förutse alla komplikationer på vägen.
Alltså blev minsta möjliga applikation, att hämta ut data och stoppa in det i en tabell. Att göra det lättaste hela tiden gjorde det möjligt att få allting till att fungera. 
Utvecklings cykeln gick något i stil med. Först hämta ut hela sidans DOM, där efter få över den i Chrome storage. Hämta in den i Popup modulen och sen fortsätta steg för steg. Detta gjorde det möjligt att endast lägga till den komplexitet som behövs för att lösa uppgifterna. När det var löst, utöka funktionen, som en typ av agil utveckling.



