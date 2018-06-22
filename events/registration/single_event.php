<?php

	include("db_conn.php");

	date_default_timezone_set('Asia/Calcutta');
	$thisdate=date("Y-m-d H:i:s");


$tablename = $_POST['table_name'];

$fname= $_POST['first_name'];
$lname= $_POST['last_name'];
$email= $_POST['email'];
$cNum= $_POST['contact_no'];
$college= $_POST['college_name'];
  mysqli_query($conn, "INSERT INTO ".$tablename." (first_name, last_name, email, contact_no, college_name, date_of_registration) VALUES ('".$fname."', '".$lname."', '".$email."', '".$cNum."', '".$college."', '".$thisdate."')");

?>