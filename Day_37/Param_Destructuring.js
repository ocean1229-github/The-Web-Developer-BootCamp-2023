const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastNamae: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}


function fullName(user){
    const {firstName, lastName} = user;
    return '$user.firstName ${u8ser.lastName}'
}

function fullName({firstName, lastname}){
    return '${firstName} ${lastName}'
}

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

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({score}) => score >= 90)

// movies.map(movie =>{
//     return '${moive.title} (${movie.year}) is rated ${movie.score}'
// })

movies.map(({title, score, year}) => {
    return '${title} (${year}) is rated ${score}'
})