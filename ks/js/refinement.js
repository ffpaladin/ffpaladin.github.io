var al = "Al";
var parry = "Parry";
var eliza = "Eliza";
var couple = "significant other";
var acquaintance = "acquaintance";
var apple = "apple";
var wooed = "wooed";
var unhappy = "unhappy"
var indifferent_tragedy = "does not care what happened to";
var lost_friend = "lost friend";
var murdered = "murdered";
var kills = "kills";
var flowers = "flowers";
var brother = "brother";
var assaulted = "assaulted";
var sword = "sword";

var captions = new Array();

function presentation(s,  n){
	if(captions[n] == undefined)
		captions[n] = s + ". ";
	else
      captions[n] += s + ". ";
}

function svo(s, v, o){
     return(s + " " + v + " " + o);
}
 
function attrib(s, attribute){
      return(s +  " became " + attribute);
}

function rel(relationship, person){
     return ("became the " + relationship + " of " + person);
}

function motiv(act, actor, recipient){
      return (actor + " " + act + " " + recipient);
}

function attacks(weapon){
	return ("attacked with a " + weapon);
}

function ptrans(object){
	return ("gave the " + object + " to");
}

function wants(object){
	return ("desired to " + object);
}