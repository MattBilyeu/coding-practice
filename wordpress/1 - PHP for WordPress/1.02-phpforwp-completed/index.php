<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PHP for WordPress</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
  </head>
  <body>

  <!-- Spent a lot of time in wordpress development, logging that time as time spent coding.  Those files are housed outside of my repository. Coded for an hour or so in the course today. -->

    <header id="masthead">
    	<h1><a href="#">PHP for WordPress</a></h1>
    </header>

    <div id="content">

      <?php

        // Create a variable called $name and assign it your name
        $name = "Enter your name";

      ?>

      <h2>Welcome!</h2>

      <p>My name is "<?php echo $name; ?>."</p>

    </div>
  </body>
</html>
