// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-  ${tweet}`)
    tweetsContainer.append(newTweet)
}

tweetsContainer.addEventListener('click', function(e){
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
    //이게 내가 li를 클릭한게 맞아? 확인 후 지우는 코드 -> 위 코드의 경우 li가 아닌 경우도 지워버린다.
})