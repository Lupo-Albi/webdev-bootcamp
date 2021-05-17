const express = require('express');
const app = express();
const path = require('path'); // Node built-in module
const redditData = require('./data.json');

// Static Assets
app.use(express.static(path.join(__dirname, 'public'))); // Takes the absolute path to index.js file and adding on public so we can access the files wherever we want

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Joins the path directory for this file with the folder /views, so we can run the app wherever we want in our pc

app.get('/', (req, res) => {
	res.render('home'); // file extension is optional if the engine is set. render assumes the views folder already exists in the folder we are, so we don't need to write the relative path, just the file name
});

app.get('/rand', (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { rand: num });
	// { num } == { num: num }
});

app.get('/cats', (req, res) => {
	const cats = [ 'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston' ];
	res.render('cats', { cats });
});

app.get('/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (data) {
		res.render('subreddit', { ...data });
	} else {
		res.render('notfound', { subreddit });
	}
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
