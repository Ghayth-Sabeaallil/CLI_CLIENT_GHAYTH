Ghayth Sabeaallil

npm package: I denna uppgift har jag använt (chalk, inquirer).
Chalk för att färga lite i terminalen
inquirer för användare ska kunna skriva + välja mellan alternativer

Jag har fått ett problem med session. I webläsare kan man enkelt spara sessionstorage men i CLI är den svårt
Så Jag har löst detta problem med hjälp av array[].
So i arrayen sparar jag username när användare loggin och jag raderar den när användare loggut. Den funkar men den finns säkert bättre lösning.

Jag har oxå fått problem med inquirer när jag skickae en loop. Man kan använda arrow för att välja men den blir som loop (arrow går inte upp när listan är slut)
Så jag ahr fixat den lite med att lägga en rad så ser man tydligt att listan är slut nu
eventsList.push(new inquirer.Separator("-- End of List --"));
Så denna alternativ går inte arr välja och man ser att lista ska börja igen från början.

Att hantera fel från backend har jag använt try catch i back end
Så alla request jag skickar till server hanteras via try catch och printa ut error om den finns
Att hantera fel från frontend har jag använt respons status
så om status är 200 så den e okej men om jag får en annan status code, till example 404 vilket betyder not found
5XX betyder något med server. So depends on status printa ${response.body} och samtidigt har jag använt try catch

Jag tycker att den e så viktigt och hantera fel och consol logga / printa ut den, så båda utvecklare och user kan veta vad e den för fel
ibland man missar något slash eller små små fel.
