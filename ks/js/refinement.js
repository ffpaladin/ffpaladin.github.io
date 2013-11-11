var al = "Al";
var parry = "Parry";
var eliza = "Eliza";
var couple = "fell in love and became a couple";
var acquaintance = "became acquaintances";
var apple = "apple";
var wooed = "wooed";
var unhappy = "unhappy"
var indifferent_tragedy = "does not care what happened to";
var lost_friend = "lose their friend";
var murdered = "murdered";
var kills = "kills";
var flowers = "flowers";
var brother = "became brothers";
var assaulted = "assaulted";
var sword = "sword";

var captions = new Array();

function presentation(sentence, index){
	if(captions[index] == undefined){
		captions[index] = new Array();
		captions[index].text = sentence + ". ";
	}
	else
      captions[index].text += sentence + ". ";
  	return index;
}

function svo(s, v, o){
     return(s + " " + v + " " + o);
}
 
function attrib(subject, attribute){
      return(subject +  " " + attribute);
}

function rel(relationship, person){
     return ("and " + person + " " + relationship);
}

function motiv(act, actor, recipient){
      return (actor + " is motivated by " + recipient +  " to " + act);
}

function attacks(weapon){
	return ("attacked with a " + weapon);
}

function ptrans(object){
	return ("gave the " + object + " to");
}

function wants(object){
	return ("desired to have " + object);
}