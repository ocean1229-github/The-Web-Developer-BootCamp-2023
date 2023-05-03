//하나씩 줄여나가는작업.
[3,5,7,9,11].reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
})
// 8 -> 15 -> 24 -> 35

//활용
const prices = [9.99, 1.50, 19.99, 49.99, 35.50];

let total =0;
for(let price of prices){
    total += price
}
console.log(total)

price.reduce((total, price) => {
    return total + price
})

//암시적반환

const total = prices.reduce((total, price) => total + price)

// 다양한 연산 및 최소 최대 찾기 등이 가능하다

const minPrice = prices.reduce((min, price) => {
    if(price < min){ // > 이렇게하면 최대.
        return price;
    }
    return min;
})

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score < bestMovie.score){
        return currMovie;
    }
    return bestMovie
})

const evens = [2,4,6,8];
evens.reduce((sum, num) => sum + num, 100)
//120