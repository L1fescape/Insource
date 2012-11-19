<?php
// Debug settings
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

// Import API
include("Route.php");
include("GraphicAPI.php");


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
// ... web design, app dev, ...


if ($method == "all") {
	$return = array();

	if ($format == "card") {
		$return["graphic"] = $graphic->getCards();
		// ... web design, app dev, ...
	}
	else if ($format == "portfolio") {
		$return["graphic"] = $graphic->getPortfolios();
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




?>
