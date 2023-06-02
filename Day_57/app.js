const data = {
    '{"ticker":{"base":"BTC","price":"34.5"}}'
}

//JSON 파싱 이란 json언어로 바꾸는것

JSON.parse(data)

const parsedData = JSON.parse(data)

parsedData.ticker

parsedData.ticker.price
//데이터에서 ticker의 price의 값만 딱 꺼낼 수 있다.

const dag = {breed:'lab', color: 'black', isAlive: true, owner: undefined}
JSON.stringify(dog)
//"{"breed":"lab","color":"black","isAlive":true}"

// JSON.stringify 메서드도 알아두기