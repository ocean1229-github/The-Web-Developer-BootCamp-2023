fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("RESOLVED", res)
        // res.json().then(data => console.log("JSON DONE", data))
        //위 코드를 조금 더 보기 좋게 하자
        //밑에 then 추가 (promise가 필요하기 때문에)
        return res.json()
        //res의 객체를 가져오는 fetch 함수에 추가된 메서드 입니다.
        //! -> 주의할점 res.json도 promise를 반환해야 한다.
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log("ERROR!!!", e)
    })