axios.get("https://swapi.dev/api/people/1/").then(res => {
    console.log("RESPONSE: ", res);
})
.catch(e => {
    console.log("ERROR!",e);
})
