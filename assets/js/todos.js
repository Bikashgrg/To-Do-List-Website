// check off the specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete the todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
	if (event.which === 13) {
		// grabbing new todos from input
		var toDoText = $(this).val();
		$(this).val("");
		// create a new li and add to li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});