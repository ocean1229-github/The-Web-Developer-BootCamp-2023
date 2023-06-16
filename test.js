function AsyncState(initialState) {
    let state = initialState;

    function updateState(name, age){
        return new Promise((resolve) => {
            const timeout = Math.floor(Math.random() * 1000);

            setTimeout(() => {
                state = { name, age };
                resolve(this);
            }, timeout);
        });
    }

    function getState()  {
        return state;
    }

    return { updateState, getState };
}

const asyncState = AsyncState({name: "Kim", age:30});

//(a)
Promise.all([
    asyncState.updateState("Song", 40),
    asyncState.updateState("Shim", 50)
]).then(() => {
    console.log("state : ", asyncState.getState());
});

// (b)
asyncState
    .updateState("Song", 40)
    .then((state) => state.updateState("Shim", 50))
    .then((state) => {
        console.log("state : ", asyncState.getState());
    });