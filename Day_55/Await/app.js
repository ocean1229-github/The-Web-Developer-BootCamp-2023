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

async function rainbow(){
    await delayedColorChange('red', 1000) //잠시 일시정지
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

// rainbow().then(() => {
//     console.log("End of Rainbow!")
// })

async function printRainbow(){
    await rainbow();
    console.log("End of Rainbow!")
}

printRainbow();

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 2000){
                reject('Connection Timeout :(')
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}

async function makeTwoRequests(){
    try {
        
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2)
    } catch (e) {
        cosnole.log("Caught an Error!");
        console.log("error is:", e)
    }
}