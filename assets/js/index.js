

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

	var request = {
		"url": `https://dropsnote.herokuapp.com/api/note/${data.id}`,
		"method": `PUT`,
		"data": data
	}

	$.ajax(request).done(function(response){
		alert(`Updated Succesfully!`)
		location.href="/"

	})
})

if (window.location.pathname == '/') {
	$ondelete = $('.mainGrid .noteContent .btnDate .edel a.delete')
	$ondelete.click(function(){
		var id = $(this).attr('data-id')

		var request = {
			"url": `https://dropsnote.herokuapp.com/api/note/${id}`,
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
