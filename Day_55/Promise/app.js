// new Promise((resolve, reject) => {
//     // resolve();
//     //아무것도 없으면 pendding상태
// })

const fakeRequest = (url) =>{
    new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve('Your Fake Data Here');
            }
            resolve('Request Err!');
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done With Request!')
        console.log('data is:', data)
    }).catch((err) =>{
        console.log("OH NO!", err)
    })


const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve;
        }, delay)
    })
}

//밑의 코드의 경우 reject를 쓸일이없다 다 성공이기 때문에
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))