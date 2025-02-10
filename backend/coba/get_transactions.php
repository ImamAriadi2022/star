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

$sql = "SELECT t.id, t.campaign_id, t.amount, t.commission, t.status, c.name AS campaign, u1.username AS brand, u2.username AS influencer 
        FROM transactions t 
        JOIN campaigns_rev c ON t.campaign_id = c.id 
        JOIN users u1 ON c.brand_id = u1.id 
        JOIN users u2 ON c.influencer_id = u2.id";
$result = $conn->query($sql);

$transactions = array();
while($row = $result->fetch_assoc()) {
    $transactions[] = $row;
}

echo json_encode($transactions);

$conn->close();
?>