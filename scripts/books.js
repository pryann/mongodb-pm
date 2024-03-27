// use DBNAME alternative
const db = db.getSiblingDB('library')

function insertBooks() {
    const books = [{
        "author": "Audrye O'Corren",
        "title": "Underneath",
        "year": 1993,
        "pages": 743,
        "genre": "Mystery|Thriller"
    }, {
        "author": "Nellie Graal",
        "title": "Reunion",
        "year": 2003,
        "pages": 577,
        "genre": "Drama"
    }, {
        "author": "Vanda Agott",
        "title": "Very Long Engagement, A (Un long dimanche de fiançailles)",
        "year": 1993,
        "pages": 790,
        "genre": "Drama|Mystery|Romance|War"
    }, {
        "author": "Tull Beinisch",
        "title": "Californie, La",
        "year": 2003,
        "pages": 668,
        "genre": "Drama"
    }, {
        "author": "Matelda Astill",
        "title": "Trailer Park Boys: The Movie",
        "year": 2008,
        "pages": 775,
        "genre": "Comedy|Crime"
    }, {
        "author": "Sibel Seniour",
        "title": "11 x 14",
        "year": 2006,
        "pages": 788,
        "genre": "Drama"
    }, {
        "author": "Carol-jean Antao",
        "title": "Ten Skies",
        "year": 2001,
        "pages": 101,
        "genre": "Documentary"
    }, {
        "author": "Pattie Riddle",
        "title": "Caveman's Valentine, The",
        "year": 1996,
        "pages": 284,
        "genre": "Drama"
    }, {
        "author": "Leona Swayton",
        "title": "Lady and the Duke, The (Anglaise et le duc, L')",
        "year": 2001,
        "pages": 735,
        "genre": "Drama|Romance"
    }, {
        "author": "Raddie Bastian",
        "title": "Criss Cross",
        "year": 2007,
        "pages": 525,
        "genre": "Crime|Drama|Film-Noir"
    }, {
        "author": "Abdel Whilde",
        "title": "Get Out Your Handkerchiefs (Préparez vos mouchoirs)",
        "year": 1999,
        "pages": 650,
        "genre": "Comedy|Drama|Romance"
    }, {
        "author": "Kale Castiglioni",
        "title": "Yes Man",
        "year": 1992,
        "pages": 804,
        "genre": "Comedy"
    }, {
        "author": "Franky Empringham",
        "title": "Hostel: Part III ",
        "year": 1993,
        "pages": 265,
        "genre": "Horror|Thriller"
    }, {
        "author": "Lawry Cholmondeley",
        "title": "Rasen",
        "year": 1997,
        "pages": 588,
        "genre": "Drama|Fantasy|Horror|Mystery|Thriller"
    }, {
        "author": "Ema Lulham",
        "title": "Snowman, The",
        "year": 1995,
        "pages": 767,
        "genre": "Animation|Children|Musical"
    }, {
        "author": "Pippa Rustidge",
        "title": "Other Guys, The",
        "year": 1985,
        "pages": 126,
        "genre": "Action|Comedy"
    }, {
        "author": "Grethel Scowen",
        "title": "Nurse 3D",
        "year": 1995,
        "pages": 78,
        "genre": "Horror|Thriller"
    }, {
        "author": "Jermaine Ruckman",
        "title": "Merlusse",
        "year": 1998,
        "pages": 828,
        "genre": "Comedy|Drama"
    }, {
        "author": "Dionne Filippello",
        "title": "Little Women",
        "year": 2006,
        "pages": 233,
        "genre": "Drama"
    }, {
        "author": "Jolyn Trent",
        "title": "The Girl from Nagasaki",
        "year": 2007,
        "pages": 842,
        "genre": "Drama|Romance"
    }, {
        "author": "Tailor Fishbourne",
        "title": "Twilight",
        "year": 1981,
        "pages": 874,
        "genre": "Crime|Drama|Thriller"
    }, {
        "author": "Rolfe Clausner",
        "title": "Escape From Tomorrow",
        "year": 2011,
        "pages": 243,
        "genre": "Drama|Fantasy|Horror"
    }, {
        "author": "Alyson Fincke",
        "title": "No Way to Treat a Lady",
        "year": 1997,
        "pages": 643,
        "genre": "Crime|Drama|Thriller"
    }, {
        "author": "Kessia Terese",
        "title": "Stig-Helmer Story, The",
        "year": 2010,
        "pages": 481,
        "genre": "Comedy|Drama"
    }, {
        "author": "Karylin Ivery",
        "title": "Ichi the Killer (Koroshiya 1)",
        "year": 2004,
        "pages": 549,
        "genre": "Action|Comedy|Crime|Drama|Horror|Thriller"
    }, {
        "author": "Floyd Howman",
        "title": "Boys from Fengkuei, The (Feng gui lai de ren)",
        "year": 2002,
        "pages": 348,
        "genre": "Drama"
    }, {
        "author": "Reggie Iannini",
        "title": "English Surgeon, The",
        "year": 2001,
        "pages": 456,
        "genre": "Documentary"
    }, {
        "author": "Murray Paull",
        "title": "Little Fugitive",
        "year": 2004,
        "pages": 615,
        "genre": "Drama"
    }, {
        "author": "Mollee Filipychev",
        "title": "Tintin and I",
        "year": 1997,
        "pages": 567,
        "genre": "Documentary"
    }, {
        "author": "Halsy Birtwisle",
        "title": "Living Wake, The",
        "year": 1994,
        "pages": 729,
        "genre": "Comedy"
    }, {
        "author": "Christy Junkin",
        "title": "Big Shots",
        "year": 1983,
        "pages": 549,
        "genre": "Adventure|Children|Comedy"
    }, {
        "author": "Elsey Massot",
        "title": "Madonna's Pig",
        "year": 2010,
        "pages": 694,
        "genre": "Fantasy|Romance|Sci-Fi"
    }, {
        "author": "Maxie Vitet",
        "title": "Haider",
        "year": 2010,
        "pages": 137,
        "genre": "Crime|Drama|Romance"
    }, {
        "author": "Dulcine Putson",
        "title": "The Garden of Sinners - Chapter 5: Paradox Paradigm",
        "year": 2010,
        "pages": 123,
        "genre": "Animation"
    }, {
        "author": "Austina Marien",
        "title": "Otello",
        "year": 2006,
        "pages": 268,
        "genre": "Drama"
    }, {
        "author": "Audy Strangeways",
        "title": "Farmageddon",
        "year": 1995,
        "pages": 826,
        "genre": "Documentary"
    }, {
        "author": "Mischa Nazareth",
        "title": "Someone Like Him (Einer wie Bruno)",
        "year": 1969,
        "pages": 671,
        "genre": "Comedy|Drama"
    }, {
        "author": "Jennette Tenby",
        "title": "Road to Brown, The",
        "year": 2006,
        "pages": 89,
        "genre": "Documentary"
    }, {
        "author": "Noel Eaglestone",
        "title": "At the Death House Door",
        "year": 2009,
        "pages": 509,
        "genre": "Documentary"
    }, {
        "author": "Jody Menere",
        "title": "All I Want (Try Seventeen)",
        "year": 1981,
        "pages": 256,
        "genre": "Comedy|Drama|Romance"
    }, {
        "author": "Prue Matiashvili",
        "title": "Hunters, The",
        "year": 1994,
        "pages": 473,
        "genre": "Drama|War"
    }, {
        "author": "Emmeline Paternoster",
        "title": "Lightning Bug",
        "year": 2010,
        "pages": 491,
        "genre": "Drama|Horror|Thriller"
    }, {
        "author": "Saloma Ord",
        "title": "To Have, or Not (En avoir (ou pas))",
        "year": 1997,
        "pages": 990,
        "genre": "Drama"
    }, {
        "author": "Adelle Summerrell",
        "title": "See You Next Tuesday",
        "year": 1985,
        "pages": 157,
        "genre": "Comedy|Drama"
    }, {
        "author": "Ferd Dewfall",
        "title": "Air I Breathe, The",
        "year": 1993,
        "pages": 703,
        "genre": "Crime|Drama|Romance|Thriller"
    }, {
        "author": "Lalo Craven",
        "title": "Oculus",
        "year": 1993,
        "pages": 803,
        "genre": "Horror"
    }, {
        "author": "Gianna Padfield",
        "title": "Hunter, The",
        "year": 2011,
        "pages": 532,
        "genre": "Drama"
    }, {
        "author": "Ermina Coult",
        "title": "Story of a Prostitute (Shunpu den)",
        "year": 2009,
        "pages": 204,
        "genre": "Drama|War"
    }, {
        "author": "Lacey Jordan",
        "title": "Finding Vivian Maier",
        "year": 1988,
        "pages": 111,
        "genre": "Documentary"
    }, {
        "author": "Clerissa Scone",
        "title": "7 Plus Seven",
        "year": 1992,
        "pages": 958,
        "genre": "Documentary"
    }]

    db.books.insertMany(books)
}

insertBooks()
