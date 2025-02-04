<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

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

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
  $data = json_decode(file_get_contents("php://input"), true);

  if (isset($data['action']) && $data['action'] === 'register') {
    $email = $conn->real_escape_string($data['email']);
    $password = password_hash($conn->real_escape_string($data['password']), PASSWORD_BCRYPT);
    $brandName = $conn->real_escape_string($data['brandName']);
    $picName = $conn->real_escape_string($data['picName']);
    $picPhone = $conn->real_escape_string($data['picPhone']);
    $province = $conn->real_escape_string($data['province']);
    $city = $conn->real_escape_string($data['city']);
    $referralCode = $conn->real_escape_string($data['referralCode']);

    $sql = "INSERT INTO brands (email, password, brand_name, pic_name, pic_phone, province, city, referral_code) VALUES ('$email', '$password', '$brandName', '$picName', '$picPhone', '$province', '$city', '$referralCode')";

    if ($conn->query($sql) === TRUE) {
      echo json_encode(["success" => "Brand was created."]);
    } else {
      echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
    }
  } elseif (isset($data['action']) && $data['action'] === 'login') {
    $email = $conn->real_escape_string($data['email']);
    $password = $conn->real_escape_string($data['password']);

    $sql = "SELECT * FROM brands WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      if (password_verify($password, $row['password'])) {
        echo json_encode(["success" => "Login successful.", "brand_id" => $row['id']]);
      } else {
        echo json_encode(["error" => "Invalid password."]);
      }
    } else {
      echo json_encode(["error" => "No user found with this email."]);
    }
  }
}

$conn->close();
?>