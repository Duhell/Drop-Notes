const mongoose = require('mongoose')
const connectToDB = async()=>{
	try{
		const con = await mongoose.connect(process.env.CONNECTIONSTRING)
		console.log(`Database Established: ${con.connection.host}`)
	}
	catch(err){
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectToDB