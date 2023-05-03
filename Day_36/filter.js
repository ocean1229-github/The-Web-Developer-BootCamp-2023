const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

nums.filter(n=>{
    return n < 10 
})
//1,2,3,4,5,6,7,8,9


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1980
    },
    {
        title: 'Alien',
        score: 85,
        year: 1983
    },
    {
        title: 'Tubo',
        score: 95,
        year: 1995
    },
    {
        title: 'Sing',
        score: 90,
        year: 2000
    },
    {
        title: 'byg',
        score: 55,
        year: 2020
    },
    {
        title: 'Sing',
        score: 33,
        year: 2030
    }
    ,
    {
        title: 'Sing',
        score: 52,
        year: 2050
    }
]


const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movies
    .filter(m => m.score > 80)
    .map(m=>m.title);

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)