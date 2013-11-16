var al = {
	name: "Al",
	myself: "himself",
	pronoun: "he",
	posessive: "his",
	object: "him"
	};
	
var parry = {
	name: "Parry",
	myself: "himself",
	pronoun: "He",
	posessive: "his",
	object: "him"
	};
	
var eliza = {
	name: "Eliza",
	myself: "herself",
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
var murdered = "kill";
var kills = "kills";
var flowers = "flowers";
var brother = "are brothers";
var assaulted = "assaulted";
var sword = "sword";

var captions = new Array();

// transitions per page
var capstrans = new Array();

capstrans[0] = "Once upon a time...";
capstrans[1] = "It was the case that ";
capstrans[2] = "One day, ";
capstrans[3] = "Then, ";
capstrans[4] = "For whatever reason, ";
capstrans[5] = "Which led to ";
capstrans[6] = "As a result, ";
capstrans[7] = "In the end, ";

// Mo Objects less Strings

function Sentence(object)
{
	this.getStr = function (){
		return object;
	}
}

function presentation(sentence, index){
	
	var s = new Sentence(sentence);
	
	if(captions[index] == undefined){
		captions[index] = new Array();
		captions[index].text = capstrans[index] + s.getStr() + ". ";
	}
	else
      captions[index].text += s.getStr() + ". ";
  	return index;
}

// TOP LEVEL SENTENCES MODIFIERS: svo, attib, and motiv

function svo(s, v, o){
     return(s.name + " " + v + " " + o.name);
}
 
function attrib(subject, attribute){
	if (attribute.indexOf(" ") !== -1)
	{
		return(subject.name +  " " 
			+ attribute.replace(subject.name,subject.object));
      	}
	else
      	{
		return(subject.name + " was " + attribute);
	}
}


function motiv(act, actor, recipient){
      
      	if(actor == recipient)
		return(actor.name + " " + act + " " + actor.myself);
	else
      		return (actor.name + " " + act + " " + recipient.name);
}

// SECONDARY: includes motiv (motiv has 2 uses)

function rel(relationship, person){

//	this.rel=relationship;
//	this.p=person;
	return("and " + person.name + " " + relationship);
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
