<?php

// Import database connection
include_once("db.php");

class PhotoAPI {
	private $table_name = "photography";

	public function getCards($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM $this->table_name;";
		}
		else {
			$query = "SELECT * FROM $this->table_name WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$cards = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($cards, array(
				"name" => $row["name"],
				"picture" => $row["picture"],
				"portfolio" => $row["portfolio"],
				"key" => $row["key"]
			));
		}

		// Close database connection
		$db->close();
		
		return $cards;
	}

	public function getPortfolios($key="") {
		$db = new DB();
		$db->connect();

		if ($key == "") {
			$query = "SELECT * FROM $this->table_name;";
		}
		else {
			$query = "SELECT * FROM $this->table_name WHERE `key`='$key';";
		}

		$result = mysql_query($query, $db->conn);

		$portfolios = array();
		while ($row = mysql_fetch_array($result)) {
			array_push($portfolios, array(
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
		
		return $portfolios;
	}
}


?>
