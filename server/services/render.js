const axios = require('axios')

exports.home = (req,res)=>{
	axios.get("http://localhost:4000/api/note")
	.then(function(response){
		res.render('index',{writings: response.data})
		console.log(response.data)
	})
	.catch(err=>{
		res.send(err)
	})
	
}
exports.add_note = (req,res)=>{
	res.render('_add')
}

exports.update_note = (req,res)=>{
	axios.get("http://localhost:4000/api/note", {params:{id:req.query.id}})
	.then(function(notedata){
		res.render('_edit',{note: notedata.data} )

	})
	.catch(err=>{
		res.send(err)
	})
}

