// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }
// const getDadJoke = async() => {
//     try{
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanharzdadjoke.com/', config)
//         return res.data.joke;
//     }catch(e) {
    //catch(e)나 catch나 상관없는거 아닌가?
//         return "NO JOKES AVAILABLE! SORRY!";
//     }
// }

// button.addEventListener('click', addNewJoke)

// ---------------------------------------------------------------



// const jokes = document.querySelector('#jokes')


// const getDadJokes = async () => {
//     try {
//         const headers = { headers: { Accept: 'application/json' } }
        // const response = await axios.get('https://icanhazdadjoke.com/', headers)
//         // console.log("Dad Joke: ", response.data.joke)
//         const newLI = document.createElement('LI')
//         let joke = response.data.joke;
//         newLI.append(joke);
//         jokes.append(newLI);

//     } catch (e) {
//         console.log("Error detected: ", e)
//     }
// }

// const button = document.querySelector('#button')
// button.addEventListener('click', getDadJokes)


const jokes = document.querySelector('#jokes');

const getDadJokes = async () => {
    try {
        const heading = { headers: { Accept: 'application/json' } }
        const response = await axios.get('https://icanhazdadjoke.com/', heading)
        return response.data.joke;
    } catch {
        return "Uh, oh! No jokes available!";
    }
}

const displayNewJoke = async () => {
    const newJoke = await getDadJokes();
    const newLI = document.createElement('LI');
    newLI.append(newJoke);
    jokes.append(newLI);
}

const btn = document.querySelector('#button')
btn.addEventListener('click', displayNewJoke)