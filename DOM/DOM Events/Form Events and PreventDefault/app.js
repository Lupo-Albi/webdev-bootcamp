const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent Default behaviour

    // const usernameInput = document.querySelector('#username');
    // const tweetInput = document.querySelector('#tweet');
    // const tweetInput = tweetForm.elements.tweet;
    // const username = tweetForm.elements.username.value;
    // const tweet = tweetForm.elements.tweet.value;
    const usernameInput = tweetForm.elements.username;
    const tweetInput = this.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    // Reset inputs
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldUsername = document.createElement('strong');
    boldUsername.append(username); 
    newTweet.append(boldUsername);
    newTweet.append(`- ${tweet}`);
    
    const tweetsList = document.querySelector('#tweets');
    tweetsList.append(newTweet);
}