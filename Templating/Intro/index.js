const express = require('express');
const app = express();
const path = require('path'); // Node built-in module

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Joins the path directory for this file with the folder /views, so we can run the app wherever we want in our pc

app.get('/', (req, res) => {
	res.render('home'); // file extension is optional if the engine is set. render assumes the views folder already exists in the folder we are, so we don't need to write the relative path, just the file name
});

app.get('/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.render('subreddit', { subreddit });
});

app.get('/rand', (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
	// { num } == { num: num }
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
