//my code
const validUserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

validUserNames.filter(n=>{
    return n.length < 10
})


function validUserNames(usernames){
    let filteredUsernames = usernames.filter(function(username){
        if(username.length < 10){
            return filteredUsernames;
        }
    })
}

// const result = validUserNames.filter(n=>{
//     if(n.length < 10){
//         return result
//     }
// })

//2번째 솔루션
function validUserNames(usernames){
    return usernames.filter(function(username){
        if(username.length < 10){
            return username;
        }
    })
}