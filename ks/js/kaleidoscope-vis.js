var ksVis = function(){};

ksVis.loadStory = function(){
	var targetUrl = "asp/exports/13.11.03_21.04.54.txt";
    console.log("here");
    $.ajax({
    	url: targetUrl,
    	success: function(data){
			console.log("Asp: " + data);
			captions = new Array();
			eval(data);
			captions[0] = "dsklfjdsldk";
			printCaptionsImpress(captions, "#impress");
			//impress().init();
		    console.log(captions);
    	},
    	fail: function(data){
    		alert("Error: Unable to retrieve story from server.");
    	},
    });

}