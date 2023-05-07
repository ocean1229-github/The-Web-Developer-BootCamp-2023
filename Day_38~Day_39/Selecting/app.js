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