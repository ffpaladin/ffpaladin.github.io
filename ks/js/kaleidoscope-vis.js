var ksVis = function(){};

var files = [
	"13.11.04_00.09.55.txt",
	"13.11.03_21.35.30.txt",
	"13.11.03_23.49.43.txt"
] ;

ksVis.loadStory = function(){
	var targetUrl = "asp/exports/" + files[2] ; //13.11.03_21.35.30.txt";
    console.log("here");
    $.ajax({
    	url: targetUrl,
    	success: function(data){
			console.log("Asp: " + data);
			captions = new Array();
			//eval(data);
            var lines = data.split("\n");
            for(var i = 0; i < lines.length;i++){
                var index = eval(lines[i]);
                if(captions[index] == undefined){
                    captions[index] = new Array();
                    captions[index].code = lines[i] + "<br/>";
                }
                else if(captions[index].code == undefined){
                    captions[index].code = lines[i] + "<br/>";
                }
                else{
                    captions[index].code += lines[i] + "<br/>";
                }
            }
			//captions[0] = "null";
			printCaptionsImpress(captions, "#impress");
			impress().init();
		    console.log(captions);
    	},
    	fail: function(data){
    		alert("Error: Unable to retrieve story from server.");
    	},
    });

}
