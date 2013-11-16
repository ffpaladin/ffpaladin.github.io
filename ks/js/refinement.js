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

var manipulated = "maipulate";
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
var trans = new Array();

trans[0] = "Once upon a time...";
trans[1] = "It was the case that ";
trans[2] = "One day, ";
trans[3] = "Then, ";
trans[4] = "For whatever reason, ";
trans[5] = "It seemed that ";
trans[6] = "As a result, ";
trans[7] = "In the end, ";

// Mo Objects less Strings

function presentation(s, index){
	
	var c = captions[index];

	if(c == undefined){
		c = captions[index] = new Array();
		c.text = trans[index] + s + ". ";
	}
	// if the subj is repeated, the replace with pronoun
	else if (c[c.length-1].subj === s.subj){
		c.text += (s.str.replace(s.subj.name,s.subj.pronoun) + ". ");		
	}
	else{
		c.text += s + ". ";
	}
	
	c.push(s);

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
	var x = {subj:s};

     	if (v.type !== "attacks")
     		return setstr(x,s.name + " " + v + " " + o.name);
	else
                return setstr(x,s.name + " " + v.type + " " + o.name + " with a " + v.w);
		
}
 
function attrib(subject, attribute){
	
	var x = {subj:subject};

	if (typeof attribute !== 'string')
	{	
		
		// if attribute is a relationship
		if (attribute.type === "rel") 
			if (attribute.p === subject)	// someone in a relationship with themself
				return setstr(x, subject.name +
				" and " + subject.obj + " " + attribute.rel);
			else
				return setstr(x,subject.name + " " + attribute);
		
		
		// else it is a held motivation
		else if (attribute.type === "motiv")
			if (attribute.r === subject)   // someone does something to themself
				return setstr(x,subject.name + " " + attribute.r.obj);
			else
				return setstr(x,subject.name + " " + attribute);

		// else it is a want
		else if (attribute.type === "wants")
			if (attribute.motive.r === subject) // someone wants something on themself
				 return setstr(x,subject.name + " wanted " + attribute.motive.p.name + " to " +
				 			attribute.motive.a + " " + attribute.motive.r.object);
                        else
       		                 return setstr(x,subject.name + " " + attribute);


      	}
	else
      	{
		// attribute is just a single word
		return setstr(x,subject.name + " was " + attribute);
	}
}


function motiv(act, actor, recipient){
      	
	var obj = {	subj:actor, 
			p: actor,
			a: act,
			r: recipient,
			type: "motiv"};

      	if(actor === recipient)
		return setstr(obj,actor.name + " " + act + " " + actor.myself);

	else if (act.indexOf(" ") != -1) // dont add the 'ed' if its not a verb
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
		type: "attacks",
		w: weapon,
	};

	return setstr(obj, "attacked with a " + weapon + " at");
}

function ptrans(object){
	var obj = {o: object,
		type: "ptrans"};

	setstr(obj,"gave " + object + " to");

	return obj;
}

function mtrans(object){
	var obj = {o: object,
		type: "mtrans"};

	setstr(obj,"told " + object + " to");

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
