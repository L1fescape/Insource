<?php

// Import database connection
include_once("db.php");

class WebAPI {
	public function getCards($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM webdesign;";
		}
		else {
			$query = "SELECT * FROM webdesign WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$webdesign = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($webdesign, array(
				"name" => $row["name"],
				"picture" => $row["picture"],
				"portfolio" => $row["portfolio"],
				"key" => $row["key"]
			));
		}

		// Close database connection
		$db->close();
		
		return $webdesign;
	}

	public function getPortfolios($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM webdesign;";
		}
		else {
			$query = "SELECT * FROM webdesign WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$webdesign = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($webdesign, array(
				"name" => $row["name"],
				"email" => $row["email"],
				"phone" => $row["phone"],
				"picture" => $row["picture"],
				"bio" => $row["bio"],
				"resume" => $row["resume"],
				"portfolio" => $row["portfolio"],
				"key" => $row["key"]
			));
		}

		// Close database connection
		$db->close();
		
		return $webdesign;
	}
}


?>
