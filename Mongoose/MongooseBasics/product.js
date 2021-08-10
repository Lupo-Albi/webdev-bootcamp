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

// Instance x Static Methods
// Instance Method (operata on individual instances of a model)
productSchema.methods.greet = function() {
	// You wanna use function expression and not arrow function because the value of this changes
	console.log('Helloo!!! Hi!!! Howdy!!!');
	console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function() {
	this.OnSale = !this.OnSale;
	return this.save();
};

productSchema.methods.addCategory = function(newCat) {
	this.categories.push(newCat);
	return this.save();
};

const Product = mongoose.model('Product', productSchema);

// Static Method (fancy way to CRUD) - they are created on top of existing methods (.find, .update)
// Keyword this will refer to the model itself, not individual instances
productSchema.statics.fireSale = function() {
	return this.updateMany({}, { onSale: true, price: 0 });
};

const findProduct = async () => {
	const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
	console.log(foundProduct);
	await foundProduct.toggleOnSale();
	foundProduct.greet();
	console.log(foundProduct);
	await foundProduct.addCategory('Outdoors');
	console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));

findProduct();

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
