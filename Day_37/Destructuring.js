const scores = [312451234,2134132333, 2316123, 23161326, 1236316, 213233214,  61263125, 123234]

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
//scores의 순서대로 gold, silber, bronze 가 입력된다.

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

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastNamae: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;
//너무 귀찮어~

const { email, firstName, lastName, city } = user;
//"harvey@gmail.com"

const{born: birthYear} = user;
//born
//err
//birthYear
//1930

const {city, state, died = 'N/A' } = user2
//충돌을 막기위해 위에 주석처리하고 해야하는게 맞음
// died값이 있으면 값이나오고 값이 없으면 N/A가 나옴