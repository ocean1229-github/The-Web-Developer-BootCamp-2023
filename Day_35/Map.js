const nums = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers.map(function(num){
    return num * 2;
})

//이렇게하면 모든배열에 2를 곱한 값인 배열로 재생성된다.

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

movies.map(function (movie){
    return movie.title.toUpperCase();
})

// movie 타이틀이 대문자로 변경되서 새로운 배열에 저장.