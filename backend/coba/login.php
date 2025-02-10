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

$username = $data['username'];
$password = $data['password'];
$role = $data['role'];

$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password' AND role = '$role'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

$conn->close();
?>