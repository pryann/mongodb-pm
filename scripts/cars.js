const db = db.getSiblingDB('garage')

function insertCars() {
    const cars = [{
        "company": "Land Rover",
        "model": "Range Rover",
        "year": 2009
    }, {
        "company": "Nissan",
        "model": "Rogue",
        "year": 2009
    }, {
        "company": "Pontiac",
        "model": "GTO",
        "year": 2006
    }, {
        "company": "Dodge",
        "model": "Ram 2500",
        "year": 2007
    }, {
        "company": "Chevrolet",
        "model": "Colorado",
        "year": 2004
    }, {
        "company": "Toyota",
        "model": "Camry Solara",
        "year": 2008
    }, {
        "company": "Cadillac",
        "model": "Catera",
        "year": 2001
    }, {
        "company": "Geo",
        "model": "Tracker",
        "year": 1992
    }, {
        "company": "BMW",
        "model": "6 Series",
        "year": 2005,
        "owners" : ["Jane", "Joe", "Jack"]
    }, {
        "company": "Audi",
        "model": "S8",
        "year": 2003,
        "owners" : ["Jane", "Judith", "Emily"]
    }]

    db.cars.insertMany(cars)
}

insertCars()
