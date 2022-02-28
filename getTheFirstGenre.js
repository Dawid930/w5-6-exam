let incomingData = {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  };



function getTheFirstGenre(myMovie) {
    return myMovie.genre[0]
} 

console.log(getTheFirstGenre(incomingData));


// arrow functionnal,,,, ha 1 parameter van akk nem kell zarojel

getTheFirstGenre = myMovie => {
    return myMovie.genre[1]
}

console.log(getTheFirstGenre(incomingData));


// igy automatikusan returnol, ha 1 sorban, van nincs kapcsols zarojel

const getTheFirstGenre = myMovie =>  myMovie.genre[1]

console.log(getTheFirstGenre(incomingData));
