<?php
	//返回json格式的数据 
	header("Content-type:text/json");
	$row = array("username"=>"ai7hoo","age"=>"22");
	echo json_encode($row);
?>