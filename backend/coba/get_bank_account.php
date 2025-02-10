<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "starpowers";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM bank_accounts_rev";
$result = $conn->query($sql);

$bank_accounts_rev = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $bank_accounts_rev[] = $row;
    }
}

echo json_encode($bank_accounts_rev);

$conn->close();
?>