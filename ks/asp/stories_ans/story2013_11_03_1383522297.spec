



person(al).		% initialize al
person(parry).		% initialize parry
person(eliza).		% initialize eliza

initially(attrib(eliza,inactive)).

% initialization means all characters are alive and strangers

% ============================================

%required_role(victim,P).

%required_role(victim,eliza).
forbidden_role(victim,P).

% =============================================


%% SCENE 1 - Establish Al and Parry are brothers

% author_spec predicate is used for the visualizing of the story

author_spec(attrib(al,rel(brother,parry)),1).



%% SCENE 2 - Eliza is introduced

author_spec(svo(eliza,introduces,eliza),2).
author_spec(attrib(eliza,rel(acquaintance,parry)),2).
author_spec(attrib(eliza,rel(acquaintance,al)),2).



%% SCENE 3 - Eliza pairs up with Al

author_spec(attrib(eliza,rel(couple,al)),3).



%% SCENE 4 - Parry is distraught

author_spec(attrib(parry,unhappy),4).



%% SCENE 5 - Al dies

author_spec(svo(parry,kills,al),5).

forbidden_action(svo(P,kills,eliza)).
forbidden_action(svo(P,kills,parry)).


% =========================================


% this is the author file
% input data goes in this file

%person(alice).
%person(bob).
%person(carol).
%person(eve).
%person(dan).

% Initial Characters

%person(al).
%person(eliza).
%person(parry).
%person(sherol).

% Character Relationships

%is_related(spouse,al,eliza).
%is_related(sibling,al,parry).

%initially(attrib(parry,aff(loves,eliza))).

%required_story(suicid_story).
%required_story(assasin_story).
%required_story(murder_story).

%required_story(sibling_story).
%required_action(svo(parry,kills,al)).
%forbidden_action(svo(P,kills,eliza)).
%forbidden_action(svo(P,kills,parry)).

%required_action(svo(al,mtrans(motiv(murdered,parry,eliza)),parry)).

%required_action(svo(bob,kills,carol),2).
