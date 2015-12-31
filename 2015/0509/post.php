<?php
	header("Content-type:text/json");

	$username = $_REQUEST['username'];
	$userpwd = $_REQUEST['userpwd'];
	$row = array("username"=>$username,"userpwd"=>$userpwd);
	echo json_encode($row);

?>