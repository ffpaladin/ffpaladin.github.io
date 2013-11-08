function presentation(s,  n){
      captions[n] += s + "\n";
}

function svo(s, v, o){
     return(s + " " + v + " " + o + ". ");
}
 
function attrib(s, attribute){
      return(s +  " is " + attribute + ".");
}

function rel(relationship, person){
     return ("is the " + relationship " of " + person)
}

function motiv(act, actor, recipient){
      return ("is motivated by " + actor + " " + act + " " + recipient);
}

function ptrans(object){
	return object;
}