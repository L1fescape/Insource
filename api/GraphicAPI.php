<?php

// Import database connection
include("db.php");

class GraphicAPI {
	public function getCards($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM graphic;";
		}
		else {
			$query = "SELECT * FROM graphic WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$graphic = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($graphic, array(
				"name" => $row["name"],
				"picture" => $row["picture"],
				"key" => $row["key"]
			));
		}

		// Close database connection
		$db->close();
		
		return $graphic;
	}

	public function getPortfolios($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM graphic;";
		}
		else {
			$query = "SELECT * FROM graphic WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$graphic = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($graphic, array(
				"name" => $row["name"],
				"email" => $row["email"],
				"phone" => $row["phone"],
				"picture" => $row["picture"],
				"bio" => $row["bio"]
			));
		}

		// Close database connection
		$db->close();
		
		return $graphic;
	}
}


?>
