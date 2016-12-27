$(document).ready(function(){
	$("button").click(function(){
		$("p").hide();
	});
	$( "#input" ).keypress(function( event ) {
		if ( event.which == 13 ) {
			var input = $("#input").text();
			$("#static").append(" guest@NickLiu:~$ " + input + "</p>");
			$("#input").empty();
			console.log(input);
			if (input === "ll") {
				var ll_about = '<p id="output">drwx-----x NickLiu Jul 03 10:36 ABOUT_ME.txt'
				var ll_project = '<br />drwx-----x NickLiu Dec 27 04:10 PROJECTS.txt';
				var ll_contact = '<br />drwx-----x NickLiu Nov 24 19:41 CONTACT_ME.txt'
				var ll_resume = '<br />drwx-----x NickLiu Jan 01 00:00 RESUME.txt</p>'
				var ll_content = ll_about + ll_project + ll_contact + ll_resume;
				$("#static").append(ll_content);
			} else if (input === "clear") {
				$("#static").empty();
			} else if (input === " " || input === '' || input === '\n' || input === null) {
			} else if (input === "help") {
				var help = '<p id="output">ll = prints out all files<br />clear = clears the screen<br />help = prints out the list of commands<br /> less = outputs the contents of the file</p>';
				$("#static").append(help);
			}

			else {
				var cmd_not_found = '<p id="error">Command ' + input + ' not found. Use \'help\' to see all commands';
				$("#static").append(cmd_not_found);
			}

			//replaceWith("<span id=\"input\" contenteditable=\"true\" style=\"outline: 0px solid transparent\"></span>\"");
			console.log('event.which');
		}
		$('#input').find('br').remove();
		console.log('hello');
	});
});




//Focuses the input editable textbox on load
$(window).on("load",function(){

	$('#input').focus();
});