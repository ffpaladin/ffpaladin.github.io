var width = 10;
var unit = 40;
var tubeThickness = unit/2;

var constraints = {"1,1,1,2": true};

var baseCode = d3.select("#code").text();

var svg = d3.select("body").append("svg")
.attr("width", width*unit)
.attr("height", width*unit);

var panel = d3.select("body").append("div");

var button = panel.append("button")
.text("initializing...")
.on("click", regenerate);
panel.append("span").text("Tap segments to lock them in place.");

function key(d) {
	return d.join(",");
}

function regenerate() {
	button.property("disabled", true);

	var constraintCode = d3.keys(constraints).map(function (k) {
			return "locked("+k+").\n";
			}).join('');

	var code = baseCode + constraintCode;
	var grounderArgs = ["-c","width="+width];
	var solverArgs = ["--sign-def=3",
	    "--heu=vsids",
	    "--seed="+(2<<30*Math.random()|0)];

	button.text("grounding...");
	Gringo.groundAsync([code, grounderArgs], function(program) {
			button.text("solving...");
			Clasp.solveAsync([program, solverArgs],function(result) {
				button.text("regenerate");
				button.property("disabled", false);
				if(result.Witnesses) {
				display(result.Witnesses[0].Value);
				} else {
				alert("no solutions");
				}
				});
			});
}

function display(answer) {    

	var termPattern = /^(\w+)\((-?\d+(?:,-?\d+)*)\)$/;

	var assignment = {};

	answer.forEach(function(term) {
			var matches = termPattern.exec(term);
			var functor = matches[1];
			var args = matches[2].split(",");
			if(!(functor in assignment)) {
			assignment[functor] = [];   
			}
			assignment[functor].push(args.map(function(str) {return str|0;}));
			});

	var lines = svg.selectAll("line").data(assignment.segment, key);

	lines.enter().append("line")
		.attr("stroke-width", tubeThickness)
		.on("click", function(d) {
				var k = key(d);
				var parent = this.parentNode;
				parent.removeChild(this);
				if(constraints[k]) {
				delete constraints[k];
				parent.appendChild(this);
				} else {
				constraints[k] = true;
				parent.insertBefore(this,parent.firstChild);
				}
				d3.select(this).classed("locked", constraints[k]);


				})
	.attr("x1", function(d) { return (d[0]-0.5)*unit; })
		.attr("y1", function(d) { return (d[1]-0.5)*unit; })
		.attr("x2", function(d) { return (d[0]-0.5)*unit; })
		.attr("y2", function(d) { return (d[1]-0.5)*unit; });

	lines.exit()
		.transition()
		.delay(function(d,i) { return 5*i; })
		.attr("x1", function(d) { return (d[2]-0.5)*unit; })
		.attr("y1", function(d) { return (d[3]-0.5)*unit; })
		.attr("x2", function(d) { return (d[2]-0.5)*unit; })
		.attr("y2", function(d) { return (d[3]-0.5)*unit; })
		.remove();

	lines.transition()
		.delay(function(d,i) { return 5*i; })
		.attr("x1", function(d) { return (d[0]-0.5)*unit; })
		.attr("y1", function(d) { return (d[1]-0.5)*unit; })
		.attr("x2", function(d) { return (d[2]-0.5)*unit; })
		.attr("y2", function(d) { return (d[3]-0.5)*unit; });

}

regenerate();
