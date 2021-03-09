// const allLi = document.querySelectorAll('li');
// for(let li of allLi) {
//     li.addEventListener('click', function(e){
//         li.remove();
//     });
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsList = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

tweetsList.addEventListener('click', function(e){
    console.dir(e.target)
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldUsername = document.createElement('strong');
    boldUsername.append(username); 
    newTweet.append(boldUsername);
    newTweet.append(`- ${tweet}`);

    tweetsList.append(newTweet);
}