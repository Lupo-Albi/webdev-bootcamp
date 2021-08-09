const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connection Open!!!');
	})
	.catch((err) => {
		console.log('OH NO ERROR!!!');
		console.log(err);
	});
const { Schema } = mongoose;

const movieSchema = new Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'M' });
// amadeus.save();

// Not common to insert many things at once
// Movie.insertMany([
// 	{ title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
// 	{ title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
// 	{ title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
// 	{ title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
// 	{ title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ]).then((data) => {
// 	console.log('IT WORKED!');
// 	console.log(data);
// });

// Update
// Movie.findOneAndUpdate({ title: 'Amadeus' }, { score: 9.0 }, { new: true, useFindAndModify: false }).then((m) =>
// 	console.log(m)
// );
