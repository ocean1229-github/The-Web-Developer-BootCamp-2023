docuemtn.querySelector('button').addEventListener('click', function(evt){
    alert("CLICK")
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    // console.log("KEYDOWN")
    console.log(e.key)
    console.log(e.code)
    //누른키와 그 키가 윈도우에 어떻게 눌렸는지 보여준다.
    //q
    //KeyQ
})
// input.addEventListener('keyup', function(){
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("DOWN!")
            break;
        case 'ArrowLeft':
            console.log("LEFT!")
            break;
        case 'ArrowRight':
            console.log("RIGHT!")
            break;
        default:
            console.log("IGNORED!")
    }
})