let Notedb = require('../model/model')
//create new note

exports.create = (req,res)=>{
	//validate
	if (!req.body) {
		res.status(400).send({message: `Note cannot be empty!`})
		return
	}
	//new note
	const note = new Notedb({
		title: req.body.title,
		text: req.body.text,
		time: ISODate().toLocaleDateString("en-US")
	})
	note.save(note)
		.then(data=>{
			res.redirect('/add')
		})
		.catch(err=>{
			res.status(500).send({message:'No duplication of notes or just go back!'})
		})
}

exports.find = (req,res)=>{

	if (req.query.id) {
		const id = req.query.id

		Notedb.findById(id)
		.then(data=>{
			if(!data){
				res.status(404).send({message: `Not found note`})
			}else{
				res.send(data)
			}
		})
		.catch(err=>{
			res.status(500).send({message: `Err getting note`})
		})
	}else{
		Notedb.find()
			.then(dropNotes =>{
			res.send(dropNotes)
		})
		.catch(err=>{
			res.status(500).send({message: err.message || `Error occured`})
	})
	}
	
}

exports.update = (req,res)=>{
	if (!req.body) {
		return res
		.status(400)
		.send({message:` Update cannot be empty`})
	}

	const id = req.params.id
	Notedb.findByIdAndUpdate(id, req.body)
	.then(data=>{
		if (!data) {
			res.status(404).send({message: `Cannot update note with id of ${id}. Note not found`})
		}else{
			res.send(data)
		}
	})
	.catch(err=>{
		res.status(500).send({message: `Error updating note`})
	})
}

exports.delete = (req,res)=>{
	const id = req.params.id

	Notedb.findByIdAndDelete(id)
	.then(data=>{
		if (!data) {
			res.status(404).send({message: 	`cannot delete note with id of ${id}. Note cant be deleted`})
		}else{
			res.send({message: `Deleted Successfully`})
		}
	})
	.catch(err=>{
		res.status(500).send({message: `could not delete note`})
	})
}