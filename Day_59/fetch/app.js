// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED", res)
//         // res.json().then(data => console.log("JSON DONE", data))
//         //위 코드를 조금 더 보기 좋게 하자
//         //밑에 then 추가 (promise가 필요하기 때문에)
//         return res.json()
//         //res의 객체를 가져오는 fetch 함수에 추가된 메서드 입니다.
//         //! -> 주의할점 res.json도 promise를 반환해야 한다.
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("ERROR!!!", e)
//     })
// 위의 코드의 경우 중복 걱정안해도됨.

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED", res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((data) => {
//         console.log("Second Request RESOLVED~!");
//         return res.json()
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!!!", e)
//     })

const loadStarWarsPeople = async() => {
    try{

        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json()
        console.log(data);
        
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res.json()
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
};

loadStarWarsPeople();