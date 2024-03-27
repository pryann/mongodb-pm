# MongoDb alapfeladatok teminalban (mongo shell-ben)

    Elsőnek olvasd végig az összes pontot!

 1. készíts egy videoStore nevű mongodb Adatbázist 
 2. Hozz létre benne egy movies listát
 3. Ments el benne 10 új filmet (save()) a következő mezőkkel:

- _id: Legyen generált, ObjectID
- title: Egy-egy kedvenc film címe, szöveges tartalom
- category: szöveges tartalom (3 típus lehet: fantasy, action, romantic) => legyenek vegyesen a filmek amennyire lehet

- director: szöveges tartalom, 3 rendező közül vegyesen szétválogatva => Steven Spielberg, Client Eastwood, James Cameron

4. Frissítsd fel a listádat (updateMany) mindenki kapjon egy "ratings" mezőt, ami egy üres listát tartalmaz (1-5 ig tárolni szavazatokat)
5. Adj 3 különböző filmre legalább 2 különböző szavazatot (használd a $push operátort)
6. Add hozzá a minden filmhez egy "releaseYear" (megjelenés éve) mezőt: kezdetnek állíts be egy tetszőleges évet minden filmnek (pl:2000). 
7. Írd át category típusonkét csupa nagy betűre a kategóriákat (pl: action ==> ACTION legyen mindenhol). Használd az updateMany parancsot
8. Kérdezd le az adatokat, hogy ellenőrizd sikeres lettek e a frissitések. Most valahogy itt kéne kinéznie a listának:

![noSql image](../img/prac-mongo-basic-movie.png?raw=true "NoSQL Database")


9. Most kicsit **algoritmizálunk**. Nézd meg melyik könyvtárban állsz a `pwd()` parancs segítségével. Hozz létre egy .js kiterjesztési szöveges file-t az adott könyvtárban. (de használhatsz majd abszolút elérési utat is később). Bármilyen szerkesztőt, IDEA-t megfelelő a szerkesztésre. Készíts el benne egy függvényt (ne feledd meghívni a file végén), tartalmazzon egy listát benne a **TE filmjeid** címeivel(Figyelj a pontos címek megadására!!). Kiindulásra egy kis segéd kép:

![noSql image](../img/prac-mongo-script.png?raw=true "NoSQL Database")

10. Folytasd a script írását. Cél, hogy mindegyik film különböző éveket kapjon az adatbázisban, de a filmek hármasával egy évtizedben legyenek. Törekedj a funkcionális egyszerű kódra. Futtasd le a mongo shellben a scriptet a `load()` parancs segítségével. Utána kérdezd le az adatbázisodat, ellenőrizni az eredményt. Íme egy lehetséges elvárt eredmény:

![noSql image](../img/prac-mongo-load-basic.png?raw=true "NoSQL Database")