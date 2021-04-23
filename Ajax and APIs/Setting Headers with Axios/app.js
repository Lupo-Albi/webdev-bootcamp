const jokesList = document.querySelector('#jokes');
const jokeButton = document.querySelector('button')

const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAIABLE! SORRY :("
    }
}

const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        const newLI = document.createElement('LI');
        newLI.append(jokeText);
        jokesList.append(newLI);
    } catch (e) {
        console.log("Error!", e);
    }
}

jokeButton.addEventListener('click', addNewJoke)