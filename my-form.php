<?php

$name = $_POST["name"];
$message = $_POST["message"];

   

$host = "localhost";
$dbname = "my_db";
$username = "root";
$password = "";
        
$conn = mysqli_connect(hostname: $host,
                       username: $username,
                       password: $password,
                       database: $dbname);
        
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}           
        
$sql = "INSERT INTO message (name, body)
        VALUES (?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
 
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ss",
                       $name,
                       $message);

mysqli_stmt_execute($stmt);

echo "Thank you for the feedback! You will be redirected soon... <script>setTimeout(function(){location.href='index.html'} , 2000); </script>"; 

