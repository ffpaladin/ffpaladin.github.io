<?php
?>
<html>
    <link rel="stylesheet" type="text/css" href="styles/main.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="scripts/javascript/sliding-frames-framework.js"></script>	
    <title>Kaleidoscope</title>
    <h1>Kaleidoscope</h1>
    <body>
        <div id="container">
		</div>
        <div style="position: absolute; bottom: 10px; cursor: pointer">
            <span class="left" onclick="slideItHorizontal(true)"></span>
            <span class="right" onclick="slideItHorizontal(false)"></span>
        </div>
    </body>
</html>
<script src="scripts/javascript/data-wrangler.js"></script>
	<script src="scripts/javascript/printer.js"></script>
	<script>
		var story = getStory();
		printStory(story, "#container");
	</script>