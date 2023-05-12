//id와 일치하는 내용을 객체에서 가져와라

const banner = document.getElementById('banner')

document.getElementById('toc')
const toc = document.getElementById('toc')
//이 객체의 특성들을 다 보여준다.
//div#toc

//---------------------------------

document.getElementByTagName('img')
//HTMLCollection(4)

const allImages = document.getElementsByTagName('img')

for(let img of allImages){
    console.log(img.src)
}
//html에 있는 이미지의 출처 모두를 다 보여준다(4개)
//배열이 아니다.

const squareImages = document.getElementsByTagName('square');

// for(let img of squareImages){
//     img.src = '사진 중 한개의 출처를 넣음'
// }

//-------------------------------------

document.querySelecter('p')
document.getElementsByTagName('p')
// 위 두개가 동일하다
document.querySelecter('#banner')
document.querySelecter('.square')

document.querySelecter('a[title="Java"]')
//이러면 a태그의 title = java를 찾아준다.

document.querySelecterAll('p')
//p문단 모두를 찾아준다.
document.querySelecter('p')
//첫번째 일치내용만 나온다.

document.querySelecterAll('img')
document.querySelecterAll('a')
//24
document.querySelecterAll('p a')
//17
const links = document.querySelecterAll('p a');

for(let link of links){
    console.log(link.href)
}
//모든 앵커태그 출처가 나온다.

document.queryselector('h1')
//<h1>Silkie Chickens</h1>

const h1 = document.querySelecter('h1')
console.dir(h1)

document.querySelector('p').innerText
document.querySelector('p').textContent
//마크업에서 온 것이다.
//textContent는 요소안에 있는 모든 콘텐츠를 보여준다
//innerText의 경우는 모두를 보여주지는 않는다. 
//예시로 display:none; 하면 inner에는 안보이지만 textContent에는 보인다.

const allLinks = document.querySelecterAll('a');

for(let link of allLinks){
    link.innerText = 'I am a Link'
}


document.querySelecter('p').innerHTML
//안에있는 태그까지 모두 나온다.

document.querySelector('h1').innerHTML = '<i>askdjas</i>'
//html이 바껴서 적용된다.
document.querySelector('h1').innerHTML
//"<i>askdjas</i>"
document.querySelector('h1').innerHTML += '<sup>asjdsa</sup>'
//원래있던 h1에다가 글올림 하고 저 내용 추가하는 거임

//+=을하지않고 =을해버리면 그냥 원래있던 내용이 다삭제됨.


document.querySelecter('#banner').src
// banner.src 가 나옴

document.querySelecter('a').href
//"file://wiki~~~"

document.querySelecter('a').title
//"List of chicken breeds"

const firstLink = document.querySelecter('a')
firstLink.href
firstLink.getAttribute('id')
firstLink.getAttribute('class')
firstLink.getAttribute('title')

firstLink.setAttribute('href', 'http://www.google.com')
//구글로 href 변경.

document.querySelecterAll('input')[1]
//별로인 방법
document.querySelecter('input[type="text"]')
//이 방법이 좋음

input.type
//text
input.type = 'password'
//"password"

input.type = 'color'
//"color"

input.setAttribute('type', 'text')


const h1 = document.querySelecter('h1')
h1.style.color
//""
//설정을 했는데도 불구하고 아무런 결과가 뜨지않는다.

//이후 html에 인라인형식으로 컬러 설정후 다시
const h1 = document.querySelecter('h1')
h1.style.color
//하면 제대로 색깔이 표시된다.
h1.style.color = 'green'
//"green"
h1.style.fontSize = '3em'

h1.style.border = '2px solid pink'
//위에 특성들이 잘 적용된다.
//그리 효과적이지 않다.

for(let link of allLinks){
    link.style.color = '#006c28'
    link.style.textDecorationColor = 'magenta'
    link.style.textDecorationStyle = 'wavy'
}
const h1 = document.querySelecter('h1')
window.getComputedStyle(h1)
//h1에 대한 계산된 스타일로 구성된 엄청 긴 cssStlyeDeclaration가 나온다.
window.getComputedStyle(h1.color)
//내가 설정한 컬러 색이 나온다.
window.getComputedStyle(h1).marginLeft
//"0px"
window.getComputedStyle(h1).margin
//21.44px 0px; = 디폴트값

const h2 = document.querySelecter('h2')
h2.getAttribute('class')
h2.setAttribute('class', 'purple')
h2.setAttribute('class', 'border')
//이렇게하면 이전의 purple 설정이 사라진다.

let currentClasses = h2.getAttribute('class')
h2.setAttribute('class', '${currentClasses} purple')

const h2 = document.querySelecter('h2')
h2.classList
h2.classList.add('purple')
h2.classList.add('border')
//이러면 두개가 잘 추가된다ㅣ. 훨 간단함.
h2.classList.remove('border')
h2.classList.toggle('purple')
// on/off 기능마냥 추가가 가능

//이 기능은 그냥 한 번에 많은 기능들에다가 이걸 넣어야할때
//css에서 클래스를 만든 뒤 js로 추가하는 방법으로 할때 사용한다.

const firstBold = document.querySelector('b')
firstBold.parentElement.parentElement
//부모요소로 상회 가능.

const paragraph = firstBold.parentElement
paragraph.children[0]

const squareImg = document.querySelector('.square')
squareImg
squareImg.nextSibling
//#text -> 노드가 텍스트를 나타낸다.

squareImg.previousSibling
// squareImg 이전에 잇던 요소 ( 노드 사용 )
squareImg.nextElementSlibing
// squareImg 이후에 있는 요소 ( 노드 사용 )

const newImg = "사진 출처"
document.body.appendChild(newImg)
//이러면 홈페이지 마지막에 newImg가 추가

newImg.classList.add('square')
const newH3 = document.creatElement

const newH3 = document.createElement('h3')
newH3
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)
//i am new! 생성
//explorer 지원 x

//append를 사용하면 쉽게 텍스트 추가가능 but 노드로는 불가능
const newB = document.createElement('b')
newB.append('Hi!')

const h1 = document.querySelector('h1')

h1.insertAdjacentElement('afterend', h2)
// insertAdjacentElement 이건 js로 내가 아무곳이나 새로운 요소를 추가할때 사용한다.
//after은 다음에 삽입한다.

h3.innerText = 'I am h3';
//I am h3
h1.after(h3)

//removeChild는 부모 요소를 선택해야함

const firstLi = document.querySelector('li')

const ul = firstLi.parentElement

ul.removeChild(firstLi)

