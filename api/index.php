<?php
// Debug settings
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

// Import API
include("Route.php");
include("GraphicAPI.php");
include("PhotoAPI.php");
include("WebAPI.php");


// Get desired method from GET or POST vars
// *note: this is suuuper ghetto. Probably
// a better way to do this.
$route = new Route($_GET, $_POST);

// Figure out what we data we want. (graphic, all)
$method = $route->get("method");

// Card, Portfolio
$format = $route->get("format");

// Invoke API classes
$graphic = new GraphicAPI();
$photo = new PhotoAPI();
$web = new WebAPI();
// ... web design, app dev, ...


if ($method == "all") {
	$return = array();

	if ($format == "card") {
		$return["graphic"] = $graphic->getCards();
		$return["photography"] = $photo->getCards();
		$return["webdesign"] = $web->getCards();
		// ... web design, app dev, ...
	}
	else if ($format == "portfolio") {
		$return["graphic"] = $graphic->getPortfolios();
		$return["photography"] = $photo->getPortfolios();
		// ... web design, app dev, ...
	}

	echo json_encode($return);
}



else if ($method == "graphic") {
	$return = array();

	$key = $route->get("key");
	
	if ($format == "card") {
		$return["graphic"] = $graphic->getCards($key);
	}
	else if ($format == "portfolio") {
		$return["graphic"] = $graphic->getPortfolios($key);
	}

	echo json_encode($return);
}



else if ($method == "photography") {
	$return = array();

	$key = $route->get("key");
	
	if ($format == "card") {
		$return["photography"] = $photo->getCards($key);
	}
	else if ($format == "portfolio") {
		$return["photography"] = $photo->getPortfolios($key);
	}

	echo json_encode($return);
}


else if ($method == "webdesign") {
	$return = array();

	$key = $route->get("key");
	
	if ($format == "card") {
		$return["webdesign"] = $web->getCards($key);
	}
	else if ($format == "portfolio") {
		$return["webdesign"] = $web->getPortfolios($key);
	}

	echo json_encode($return);
}

?>
