//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i = 1; i<= 151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    //포켓몬 클래스만들기
    const label = document.createElement('span');
    //포켓몬 span 추가하기

    label.innerText = '#${i}';
    //span안에 내용 적기

    const newImg = document.createElement('img');
    //img요소 추가하기
    newImg.src = '${baseURL}{i}.png'
    //img요소 저기 baseURL의 뒷부분만 바뀌면 사진이 바뀐다는 것을 이용한 코드

    pokemon.appendChild(newImg);
    //pokemon div밑에 img생성
    newImg.appendChild(label);
    //img 밑에 label span 생성
    container.appendChild(pokemon);
    //label 밑에 pokemon생성해서 반복시키기.
}

