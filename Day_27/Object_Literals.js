//[308000, 1200]
//이런식으로 지정하면 배열이 뭔지를 모르니까 하나하나 이름을 배열

const fitBitData = {
    totalSteps          : 308000,
    totalMiles          : 211.7,
    workoutsThisWeek    : '5 of 7'
};

// 
typeof[]
//object

const person = {firstName: 'kang', lastName: 'doohyen'}
person;
//firstName: 'kang', lastName: 'doohyen'

const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ['red', 'orange']
}

person["firstName"];
// "kang"

kitchenSink["colors"];
// ["red", "orange"]

person.firstName
//"kang"

const years = {1999 : 'Good', 2020: 'Bad'};
years;
//-> 1999와 2020은 문자열로 변환된다.
years[1999]
years["1999"]
// 이렇게해도 똑같은 결과가 나온다.

const sumb = {true: 'dat', null:'askdfs'};
//이것도 마찬가지로 null이 문자열로 변환되어 나온다.

person["firstName"];
//꼭 따옴표 넣기

person['first' + 'Name'];

const midterms = {daniel: 96, thomas: 73};
midterms.thomas = 79;
//이렇게하면 수정가능.
midterms.thomas = 'C+';
midterms["daniel"] = 'A';
midterms.ezra = 'B+';
midterms['antonio'] = 'A-'
