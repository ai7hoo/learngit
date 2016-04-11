<?php
	header("Content-type:text/json;charset=utf-8");
	// $username = $_POST("username");
	// $usertext = $_POST("usertext");
	// $nowtime  = date('Y-m-d H:i:s');
	// $s = ["a"=>"ai7hoo","b"=>"bob"];
	// echo json_encode($s);

	// $sql = "INSERT INTO `test`.`messages` (`id`, `user`, `msg`, `time`) VALUES (NULL, $username, $usertext, $nowtime);";
	// 
	
	// echo "This is test msg.";
	$mysql_server_name="localhost"; //数据库服务器名称
	$mysql_username="root"; // 连接数据库用户名
	$mysql_password=""; // 连接数据库密码
	$mysql_database="test"; // 数据库的名字
	$conn = mysql_connect($mysql_server_name,$mysql_username,$mysql_password);

	$strsql="SELECT * FROM `messages`";
	$result=mysql_db_query($mysql_database, $strsql, $conn);
	$row=mysql_fetch_row($result);

	// print_r($row);
	$backmsg = [];
	while ( $row=mysql_fetch_assoc($result) ){
		$backmsg[] = $row;
	}
	echo json_encode($backmsg);

	mysql_free_result($result);
	mysql_close($conn);
?>