$(document).ready(function(){
	$("button").click(function(){
		$.getJSON("https://cdn.rawgit.com/ach74/text/3e532dbd/1.json", function (a) {


			$.each(a, function (i, item) {
				$("p").append(item.nom +'<br>');
			});
		});
	});
});