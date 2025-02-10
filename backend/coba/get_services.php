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

$influencer_id = $_POST['influencer_id'];

$sql = "SELECT * FROM services_rev WHERE influencer_id = $influencer_id";
$result = $conn->query($sql);

$services_rev = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $services_rev[] = $row;
    }
}

echo json_encode($services_rev);

$conn->close();
?>