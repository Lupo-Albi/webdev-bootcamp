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

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		maxlength: 20
	},
	price: {
		type: Number,
		required: true,
		min: [ 0, 'Price must be positive!' ]
	},
	isOnSale: {
		type: Boolean,
		default: false
	},
	categories: [ String ],
	qty: {
		online: {
			type: number,
			default: 0
		},
		inStore: {
			type: Number,
			default: 0
		}
	},
	size: {
		type: String,
		enum: [ 'S', 'M', 'L' ]
	}
});

const Product = mongoose.model('Product', productSchema);

// Use to add bikes
const bike = new Product({ name: 'Cycling Jersey', price: 28.5, categories: [ 'Cycling' ], size: 'M' });
bike
	.save()
	.then((data) => {
		console.log('IT WORKED');
		console.log(data);
	})
	.catch((err) => {
		console.log('OH NO ERROR');
		console.log(err);
	});

Product.findOneAndUpdate({ name: 'Bike Helmet' }, { price: -9 }, { new: true, runValidators: true })
	.then((data) => {
		console.log('IT WORKED');
		console.log(data);
	})
	.catch((err) => {
		console.log('OH NO ERROR');
		console.log(err);
	});
