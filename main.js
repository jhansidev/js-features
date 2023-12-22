const movies = [
    {
    title:"yamudu",
    hero:"surya",
    rating: 7.0},
    {
        title:"singam",
        hero:"surya",
        rating:8.5},
    {
        title:"Mallana",
        hero:"vikram",
        rating:6.5
    },
    {
        title:"PS1",
        hero:"vikram",
        rating:8.5
    },
    {
        title:"PS2",
        hero:"vikram",
        rating: null
    },
    {
        title:"Jawaan",
        hero:"SRK",
        rating:4.8
    },

    {
        title:"Pathaan",
        hero:"SRK",
        rating:4.2
    },
];

const students = [
    {
        name: "Anna",
        sex: "f",
        grades: [4.5, 3.5, 4]
    },
    {
        name: "Dennis",
        sex: "m",
        country: "Germany",
        grades: [5, 1.5, 4]
    },
    {
        name: "Martha",
        sex: "f",
        grades: [5, 4, 2.5, 3]
    },
    {
        name: "Brock",
        sex: "m",
        grades: [4, 3, 2]
    }
];

const titles = movies.map(movie => movie.title);
const suryaMovies = movies.filter(movie => movie.hero==="surya").map(movie => movie.title);
const endYa = movies.filter(movie => (movie.hero).endsWith('ya')).map (movie => movie.hero);
const ratingsum = movies.map(movie => movie.rating).reduce((acc,value) => acc+value,0);
const averagerating = ratingsum/movies.length;

const suryamovieRate = movies.filter(movie => movie.hero==="surya").map(movie => movie.rating)
    .reduce((acc,value)=> acc+value ,0);

const avgSuryaRating = suryamovieRate/suryaMovies.length;


console.log("titles:" + titles);
console.log("Rating sum:" + ratingsum);
console.log("AverageRating:" + averagerating);
console.log("List of Surya Movies:" + suryaMovies);
console.log ("Surya Movies Average Rating:" + avgSuryaRating);
console.log("hero's name ending with -ya-:" + endYa);

// usage of callback here...
const getMovies = () => {
  setTimeout(() => {
      let moviesList = '';
      movies.forEach((movie, index) => {
          moviesList += `<li>${movie.title}</li>`
      })
      document.body.innerHTML = moviesList;
  }, 1000);
}
const createMovie = (post, callback) => {
    setTimeout(() =>{
        movies.push(post);
        callback();
    },2000)
}
createMovie({
    title:"MAD",
        hero:"multihero",
        rating:8.5}, getMovies);

// usage of promises
const setMovie = (post) => {
    return new Promise ((resolve, reject) => {

            setTimeout(() => {
                movies.push(post);
                const error = true;
                if (!error) {
                 resolve();
                }else{
                    reject('Error!, Something went wrong..');
                }
            }, 2000);
        });
}
// **  Promise **
setMovie({title:"Krishna",
    hero:"multihero",
    rating:8.5}).then(getMovies).catch(err => console.log(err));
// Compute and Return female students results using functional programming.

const promise1 =  new Promise((resolve) => {
    console.log('Hello Promise..');
    resolve();
});
const multiply = (a,b) => { new Promise((resolve, reject) => {
     if( (a * b) === 12){
         resolve();
     }else{
         reject('Error!, Multiplication went wrong..');
     }
});
}


// Promise.all will reject as soon as one of the Promises in the array rejects.
Promise.all([promise1,multiply(2,3),multiply(3,4)]).then(
    (values) =>{ console.log('promiseAll values', values)}
  );
// promise.allSettled will run all the promises and return with status and value.
Promise.allSettled([promise1,multiply(2,3),multiply(3,4)]).then(
    (values) =>{ console.log('promiseAll values', values)}
);

function studentResult(students){
    const femaleList = student => student.sex === "f";
    const avgGrade = arr => arr.grades = arr.grades.reduce((a,b) => a + b, 0) / arr.grades.length;
    const filter = (student, func) => student.filter(func);
    const result = filter(filter(students,femaleList),avgGrade);

    return result;
}

