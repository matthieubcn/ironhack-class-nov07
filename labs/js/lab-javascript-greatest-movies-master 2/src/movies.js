// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    function getAllDirectors(moviesArray) {
  
        const rawList = moviesArray.map((movies) => movies.director)
      
        const cleanList = rawList.filter((x, i) => rawList.indexOf(x) === i)
        return cleanList
      }
      
      console.log (`1 -Iteration --------------`)
      console.table (getAllDirectors(movies))

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    function howManyMovies(moviesArray) { 

        const bestSteven = moviesArray.filter((movies) =>
        movies.director === "Steven Spielberg" && movies.genre.includes('Drama'))
        return bestSteven
    }
}

console.log("2. ---- stevenMovies");
console.table(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let result = 0;
    let moviesScore = moviesArray.map((movies) => movies.score);
    for (let i = 0; i < moviesScore.length; i++) {
      result += moviesScore[i];
    }
    let average = result / moviesArray.length;
    
    let averagefixed = average.toFixed(2)
    return averagefixed
  }
  console.log("3. ---- Scores");
  console.log(scoresAverage(movies));
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let totalDrama = 0;
  
    const dramaMovies = moviesArray.filter((movies) => movies.genre.includes('Drama'));
    
    const mapAverage = dramaMovies.map((movies) => movies.score);
    // const scores = drama.map((movie) => movie.score);
    for (let i = 0; i < mapAverage.length; i++) {
      totalDrama += mapAverage[i];
    }
    let dramaAverage = totalDrama / moviesArray.length
    let  dramaAverageFixed = dramaAverage.toFixed(2)
    return dramaAverage;
  }
  
  console.log(`4-------------------`)
  
  console.log(dramaMoviesScore(movies))



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    function orderByYear(moviesArray) {
        const filterMovies = moviesArray.filter((movies) => movies.year);
        const orderMovies = filterMovies.sort((a,b) => {
          if (a.year < b.year)
            return a.year - b.year
          if (a.year < b.year)
            return a.year - b.year
        })
        return orderMovies
      }
      
      console.table(orderByYear(movies))
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const order = moviesArray.map((movies) => movies.title || movies.year);
  const orderMovies = order.sort((a, b) => {
    if (a.year < b.year)
      return a.year - b.year
    if (a.year < b.year)
      return a.year - b.year
  }
  )
   const sliceMovies = orderMovies.slice(1, 20);
    return sliceMovies
}
console.log(`---------------------------`)

console.table(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
