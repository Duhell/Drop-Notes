

$('#add_notes').submit(function(e){
	alert(`Note Added!`)
})

$('#update_notes').submit(function(event){
	event.preventDefault()

	var unindexArray = $(this).serializeArray()
	var data={}
	$.map(unindexArray,function(n,i){
		data[n['name']]=n['value']
	})
	console.log(unindexArray)

	var request = {
		"url": `http://localhost:4000/api/note/${data.id}`,
		"method": `PUT`,
		"data": data
	}

	$.ajax(request).done(function(response){
		alert(`Updated Succesfully!`)
	})
})

if (window.location.pathname == '/') {
	$ondelete = $('.mainGrid .noteContent .btnDate .edel a.delete')
	$ondelete.click(function(){
		var id = $(this).attr('data-id')
		console.log(id)

		var request = {
			"url": `http://localhost:4000/api/note/${id}`,
			"method": `DELETE`
		}

		if (confirm(`Do you want to delete this note?`)) {
			$.ajax(request).done((response)=>{
				alert(`Deleted Successfully`)
				location.reload()
			})
		}
	})
}


const preload = document.getElementById('preload')

window.addEventListener('load',()=>{
	preload.style.display = 'none'
})


const back = document.getElementById('editbuttonsubmit')
back.addEventListener('click',()=>{
	location.href="/"
})