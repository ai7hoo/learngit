<?php
	$myfile = fopen("test.txt","r") or die("打开文件失败啊");
	echo fread($myfile,filesize("test.txt"));
	fclose($myfile);
?>