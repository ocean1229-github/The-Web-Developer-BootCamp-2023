const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e){
//     console.log("Hi")
// })

//다른 곳을 blur할때마다 적용된다. -> 채팅창이 아닌 다른 창을 클릭했을때(변경) -> 채팅의 내용을 바꾸는건 포커스

input.addEventListener('input', function(e){
    h1.innerText = input.value;
})

//이건 뭘 타이핑하든 그걸 실시간으로 바로 변경값을 적용시켜준다.

