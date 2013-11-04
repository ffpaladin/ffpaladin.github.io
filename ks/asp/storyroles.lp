% this file contains the rules for roles and nullifiers

%%%%
%%%% ROLES
%%%%

has_role(R,P) :-
        role_satisfied(R,P),
        not role_blocked(R,P).

%:- required_role(R,P), not has_role(R,P).
%:- forbidden_role(R,P), has_role(R,P).

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% ROLE: victim (gets harmed)
role(victim).

role_satisfied(victim,P) :-
        harms(X),
        expectation_realized(X,S,P,T),
        not harm_nullified(X,S,P,T).

% if you manipulate someone into doing something to yourself, you are nulled

harm_nullified(X,S,P,T) :-
	expectation_realized(manipulated,P,S,T),
	happens(svo(P,mtrans(motiv(X,S,P)),S),T1),
	T1 < T,
	harms(X).

	% flash back to manipulation


% if you wanted it to happen

harm_nullified(X,S,P,T) :- expectation_realized(indifferent_tragedy,P,S,T),
			expectation_realized(X,S,P,T).


% if payback

harm_nullified(X,S,P,T) :-
	holds(attrib(P,wants(motiv(X1,P,S))),T1),
	harms(X1),
	T1 < T,
	expectation_realized(X2,P,S,T2),
	T2 < T,
	harms(X2),
	expectation_realized(X,S,P,T).
	
% if self defense

harm_nullified(murdered,S,P,T) :- 
	expectation_realized(self_defended_murder,S,P,T).


%        context(S,V,O,T,D),
%		%not motivation(S,V,O,T,hate),
%        unharms(D,V).

%harm_nullified(S,V,S,T) :-
%		%not motivation(S,V,O,T,hate),
%        sentiment(S,V,S,T,desire).
		

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% ROLE: aggressor (intentionally harms)

role(aggressor).

role_satisfied(aggressor,S) :-
        harms(V),
        happens(svo(S,V,P),T),
        not aggression_nullified(svo(S,V,P),T).

%aggression_nullified(S,V,O,T) :-
%        sentiment(S,V,O,T,regret).

%aggression_nullified(S,V,O,T) :-
%        holds(S,manipulated,T).


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% ROLE: bystander

role(bystander).

role_satisfied(bystander,S) :- not role_blocked(bystander,S).

role_blocked(bystander,S) :-
        happens(svo(S,V,P),T).

% TODO: blocking?

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

