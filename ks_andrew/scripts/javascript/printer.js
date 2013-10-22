function printStory (story, domElement){
	for(var i = 0; i < story.length; i++){
		var variation = story[0];
		for(var j = 0; j < variation['parts'].length; j++){
			var frame = variation['parts'][j];
			var htmlToAppend = '<div class="frame">';
			htmlToAppend += '<div class="frame-content">';
			htmlToAppend += '<img class="frame-image" src="images/comics/' + frame['image'] + '"/><br/>';
			htmlToAppend += frame['caption'] + '</div></div>';
			$(domElement).append(htmlToAppend);
			console.log(frame);
		}
		$(domElement).append('<div class="frame" style="width: 20%;"><div class="frame-content"><iframe width="800" height="600" src="https://docs.google.com/forms/d/1bawAfxVi-oN4ytm2WbYripX0uClvj7iXyXkNCSIs-F8/viewform">Your browser does not support iframes, so you cannot view the feedback form.</iframe><br>Feedback form.</div>');
	}
}

