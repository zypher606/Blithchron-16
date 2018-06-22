<?php

	include("db_conn.php");

date_default_timezone_set('Asia/Calcutta');
        $thisdate=date("Y-m-d H:i:s");


$tablename = $_POST['table_name'];
$age	= $_POST['age'];
$fname= $_POST['first_name'];
$lname= $_POST['last_name'];
$email= $_POST['email'];
$cNum= $_POST['contact_no'];
$college= $_POST['college_name'];
$sex= $_POST['sex'];
$special_talent= $_POST['special_talent'];
$q1= 'sdd';
$q2= $_POST['q2'];
$q3= $_POST['q3'];
$q4= $_POST['q4'];
$q5= $_POST['q5'];
$q6= $_POST['q6'];
$q7= $_POST['q7'];
$q8= $_POST['q8'];
$q9= $_POST['q9'];
$q10= $_POST['q10'];
$q11= $_POST['q11'];

  mysqli_query($conn, "INSERT INTO ".$tablename." (age, first_name, last_name, email, contact_no, college_name, date_of_registration, sex, special_talent, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11) VALUES ('".$age."', '".$fname."', '".$lname."', '".$email."', '".$cNum."', '".$college."', '".$thisdate."', '".$sex."', '".$special_talent."', '".$q1."', '".$q2."', '".$q3."', '".$q4."', '".$q5."', '".$q6."', '".$q7."', '".$q8."', '".$q9."', '".$q10."', '".$q11."')");

?>