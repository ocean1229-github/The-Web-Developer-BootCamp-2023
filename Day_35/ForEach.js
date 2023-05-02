const nums = [1,2,3,4,5,6,7,8,9,10]

function print(element){
    console.log(element)
}

// print(numbers[0])
// print(numbers[1])

// numbers.forEach(print)
numbers.forEach(function (el){
    console.log(el)
})

for(let el of numbers){
    if(el % 2 === 0){
        console(el)
    }
    console.log(el);
}


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Alien',
        score: 85
    },
    {
        title: 'Tubo',
        score: 95
    },
    {
        title: 'Sing',
        score: 90
    }
]

movies.forEach(function(movie){
    // console.log(movie)
    //모든 객체가나온다
    console.log('${movie.title} - ${movie.score}/100')
})