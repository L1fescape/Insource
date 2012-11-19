<?php

class Route {

	public $_GET = array();
	public $_POST = array();

	public $defaults = array(
		"method" => "all",
		"format" => "card",
		"key" => ""
	);

	public function __construct($get, $post) {
		$this->_GET = $get;
		$this->_POST = $post;
	}

	public function get($var) {
		if ( isset($this->_GET[$var]) ) {
			return $this->_GET[$var];
		}
		else if ( isset($this->_POST[$var]) ) {
			return $this->_POST[$var];
		}
		else if ( isset($this->defaults[$var]) ) {
			return $this->defaults[$var];
		}
		else {
			return "all";
		}
	}

}
