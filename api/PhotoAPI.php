<?php

// Import database connection
include_once("db.php");

class PhotoAPI {
	public function getCards($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM photography;";
		}
		else {
			$query = "SELECT * FROM photography WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$photography = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($photography, array(
				"name" => $row["name"],
				"picture" => $row["picture"],
				"portfolio" => $row["portfolio"],
				"key" => $row["key"]
			));
		}

		// Close database connection
		$db->close();
		
		return $photography;
	}

	public function getPortfolios($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM photography;";
		}
		else {
			$query = "SELECT * FROM photography WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$photography = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($photography, array(
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
		
		return $photography;
	}
}


?>
