const mongoose = require('mongoose')

var schema = new mongoose.Schema({
	title:{
		type: String,
	},
	text:{
		type: String,
	},
	time: {
		type: String
	}
})
const Notedb = mongoose.model('notes',schema)
module.exports = Notedb