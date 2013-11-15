var al = {
	name: "Al",
	self: "himself",
	pronoun: "he",
	posessive: "his",
	object: "him"
	};
	
var parry = {
	name: "Parry",
	self: "himself",
	pronoun: "He",
	posessive: "his",
	object: "him"
	};
	
var eliza = {
	name: "Eliza",
	self: "herself",
	pronoun: "She",
	posessive: "her",
	object: "her"
	};
	
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
     return(s.name + " " + v + " " + o.name);
}
 
function attrib(subject, attribute){
	if (typeof attribute === 'object')
      		return(subject.name +  " is " + attribute);
      	else
      		return(subject.name + " " + attribute);
}

function rel(relationship, person){
     return ("and " + person.name + " " + relationship);
}

function motiv(act, actor, recipient){
      return (actor.name + " " + act + " " + recipient.name);
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
