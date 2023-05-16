const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("YOU CLICKED ME!")
    console.log("I HOPE THIS WORK")
}

function scream(){
    console.log("AAAAHHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;
//마우스를 요소에 올리면 바로 엔터친것처럼되는 효과.

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}
// function 사용할 시 위 처럼 arrow 특성 사용하면 됨.

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function(){
    alert('Clickede!')
    //더블 클릭
})
// btn3.addEventListener('dblclick', scream)
//     //더블 클릭
// })

// 위 방법은 별로 좋지 않다.

// mouseup, mousedown

function twist(){
    console.log("TWIST")
}
function shout(){
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas')

// tasButton.onclick = twist;
// tasButton.onclick = shout;
//onclick은 하나의 속성

tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)
// 이렇게 하면 twist shout모두가 적용이 된다.
// once의 경우 한번 실행되면 그 뒤로는 실행되지 않는다.