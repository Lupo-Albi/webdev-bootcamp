const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connection Open!!!');
	})
	.catch((err) => {
		console.log('OH NO ERROR!!!');
		console.log(err);
	});
const { Schema } = mongoose;

const personSchema = new Schema({
	first: String,
	last: String
});

// Behave as if it's an actual property
personSchema
	.virtual('fullName')
	.get(function() {
		return `${this.first} ${this.last}`;
	})
	.set(function(v) {
		this.first = v.substr(0, v.indexOf(' '));
		this.last = v.substr(v.indexOf(' ') + 1);
	});

// Middleware: code that runs before or after something happens (pre or post hook)
personSchema.pre('save', async function() {
	this.first = 'YO';
	this.last = 'MAMA';
	console.log('About to save!!');
});
personSchema.post('save', async function() {
	console.log('Just saved!!');
});

const Person = mongoose.model('Person', personSchema);
