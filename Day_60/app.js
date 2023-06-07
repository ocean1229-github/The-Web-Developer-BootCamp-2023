// axios.get("https://swapi.dev/api/people/1/").then(res => {
//     console.log("RESPONSE: ", res);
// })
// .catch(e => {
//     console.log("ERROR!",e);
// })

//비동기함수로

const getStarwarsPerson = async (id) => {
    try{

        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR", e);
    }
}

getStarwarsPerson(5);
getStarwarsPerson(10);