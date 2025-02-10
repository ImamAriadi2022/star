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

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$type = $data['type'];
$brand_id = $data['brand_id'];
$influencer_id = $data['influencer_id'];
$brief = $data['brief'];
$start_date = $data['start_date'];
$end_date = $data['end_date'];
$proposal_deadline = $data['proposal_deadline'];

$sql = "INSERT INTO campaigns_rev (name, type, brand_id, influencer_id, brief, start_date, end_date, proposal_deadline) VALUES ('$name', '$type', '$brand_id', '$influencer_id', '$brief', '$start_date', '$end_date', '$proposal_deadline')";

if ($conn->query($sql) === TRUE) {
    $response = array("success" => true, "campaign_id" => $conn->insert_id);
} else {
    $response = array("success" => false, "error" => $conn->error);
}

echo json_encode($response);

$conn->close();
?>