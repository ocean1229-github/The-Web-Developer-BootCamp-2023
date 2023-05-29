// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

    const delayedColorChange = (newColor, delay, doNext) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            doNext && doNext();
        }, delay)
    }

    delayedColorChange('red', 1000, () => {
        delayedColorChange('orange', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('green', 1000, () => {
                    delayedColorChange('blue', 1000, () => {
            
                    });
                });
            });
        });
    });

    // 콜백 지옥은 explorer에서는 지원이 되지 않는다.


// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// document.body.style.backgroundColor = 'orange';

// 중첩 콜백은 좋지 않지만 하나 이상의 콜백은 흔하다. -> 콜백이 되게 복잡하게 보여서 콜백지옥이라고 부른다.
searchMoviesAPI('amadeus', () => {
    saveTomMyDB(movies, () => {
        //작동한다면 밑에 코드를 실행하시오
    }, () => {
        //작동하지 않는다면 이걸 실행하시오
    })
}, ()=>{
    // 만약 api가 멈추거나 요청이 실패했을 경우
})

//url 전달 방식으로 콜백 지옥을 구현할 수 있다. (fakeRequestPromise)
// const request = fakeRequestPromise('url')
// fakeRequestPromise('yelp.com/api/coffee/page1')
    // .then(() =>{
    // console.log("its works!");
    // fakeRequestPromise('yelp.com/api/coffee/page2')
    // .then(() => {
    //     console.log("it works 22!");
    // }).cathc(() => {
    //     console.log("err222!!"); 
//   }).catch(() =? {
//     console.log("err!");
// })

//어디에 오류가 생겼는지 알 수 있다.
//코드 수정 필요. -> 이후 강좌보면서 제대로 수정하겠음.