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
var apple = "apples";
var wooed = "wooed";
var unhappy = "unhappy"
var indifferent_tragedy = "does not care what happened to";
var lost_friend = "caused a great loss for";
var murdered = "murder";
var kills = "kills";
var flowers = "flowers";
var brother = "are brothers";
var assaulted = "assault";
var sword = "sword";

var captions = new Array();

// transitions per page
var capstrans = new Array();

capstrans[0] = "Once upon a time...";
capstrans[1] = "It was the case that ";
capstrans[2] = "One day, ";
capstrans[3] = "Then, ";
capstrans[4] = "For whatever reason, ";
capstrans[5] = "It seemed that ";
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


function setstr(o,s)
{
	o.str = s ;
	o.toString = function() { return this.str; }
	return o;
}


// TOP LEVEL SENTENCES MODIFIERS: svo, attib, and motiv

function svo(s, v, o){
     return setstr({},s.name + " " + v + " " + o.name);
}
 
function attrib(subject, attribute){

	if (typeof attribute !== 'string')
	{	
		
		// if attribute is a relationship
		if (attribute.type === "rel") 
			if (attribute.p === subject)	// someone in a relationship with themself
				return setstr({}, subject.name +
				" and " + subject.obj + " " + attribute.rel);
			else
				return setstr({},subject.name + " " + attribute);
		
		
		// else it is a held motivation
		else if (attribute.type === "motiv")
			if (attribute.r === subject)   // someone does something to themself
				return setstr({},subject.name + " " + attribute.r.obj);
			else
				return setstr({},subject.name + " " + attribute);

		// else it is a want
		else if (attribute.type === "wants")
			if (attribute.motive.r === subject) // someone wants something on themself
				 return setstr({},subject.name + " wanted " + attribute.motive.p.name + " to " +
				 			attribute.motive.a + " " + attribute.motive.r.object);
                        else
       		                 return setstr({},subject.name + " " + attribute);


      	}
	else
      	{
		// attribute is just a single word
		return setstr({},subject.name + " was " + attribute);
	}
}


function motiv(act, actor, recipient){
      	
	var obj = { 
			p: actor,
			a: act,
			r: recipient,
			type: "motiv"};

      	if(actor === recipient)
		return setstr(obj,actor.name + " " + act + " " + actor.myself);
	else if (act.indexOf(" ") != -1)
      		return setstr(obj,actor.name + " " + act + " " + recipient.name);
	else
      		return setstr(obj,actor.name + " " + act + "ed " + recipient.name);
}

// SECONDARY: includes motiv (motiv has 2 uses)

function rel(relationship, person){

	return setstr(	{type: "rel", 
				rel: relationship,
				p: person}, " and " + person.name + " " + relationship);
}


function attacks(weapon){
	var obj = {
		type: attacks,
		w: weapon,
	};

	return setstr(obj, "attacked with a " + weapon);
}

function ptrans(object){
	var obj = {o: object,
		type: "ptrans"};

	setstr(obj,"gave " + object + " to");

	return obj;
}

function wants(object){
	
	var obj = {};

	obj.motive = object;
	obj.type = "wants";

	if (typeof object === 'string')
		setstr(obj, "desired to have " + object) ;
	else
		setstr(obj, "desired that " + object + " would happen");

	return obj;
}
