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

$sql = "SELECT c.id, c.name, u.username AS brand_name 
        FROM campaigns_rev c 
        JOIN users u ON c.brand_id = u.id 
        WHERE c.status = 'ongoing'";
$result = $conn->query($sql);

$offers = array();
while($row = $result->fetch_assoc()) {
    $offers[] = $row;
}

echo json_encode($offers);

$conn->close();
?>