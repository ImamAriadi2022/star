<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
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
  $email = $conn->real_escape_string($_POST['email']);
  $password = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_DEFAULT);
  $full_name = $conn->real_escape_string($_POST['fullName']);
  $birth_date = $conn->real_escape_string($_POST['birthDate']);
  $gender = $conn->real_escape_string($_POST['gender']);
  $influencer_category = $conn->real_escape_string($_POST['influencerCategory']);
  $phone_number = $conn->real_escape_string($_POST['phoneNumber']);
  $referral_code = $conn->real_escape_string($_POST['referralCode']);
  $ktp_number = $conn->real_escape_string($_POST['ktpNumber']);
  $npwp_number = $conn->real_escape_string($_POST['npwpNumber']);
  $instagram_link = $conn->real_escape_string($_POST['instagramLink']);
  $followers_count = $conn->real_escape_string($_POST['followersCount']);
  
  // Handle file upload
  $profile_picture = '';
  if (isset($_FILES['profilePicture']) && $_FILES['profilePicture']['error'] == 0) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["profilePicture"]["name"]);
    if (move_uploaded_file($_FILES["profilePicture"]["tmp_name"], $target_file)) {
      $profile_picture = $target_file;
    } else {
      echo json_encode(["error" => "Error uploading file"]);
      exit();
    }
  }

  $sql = "INSERT INTO influencers (email, password, full_name, birth_date, gender, influencer_category, phone_number, referral_code, ktp_number, npwp_number, instagram_link, followers_count, profile_picture) VALUES ('$email', '$password', '$full_name', '$birth_date', '$gender', '$influencer_category', '$phone_number', '$referral_code', '$ktp_number', '$npwp_number', '$instagram_link', '$followers_count', '$profile_picture')";

  if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => "New influencer registered successfully"]);
  } else {
    echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
  }
}

if ($method == 'GET') {
  $sql = "SELECT * FROM influencers";
  $result = $conn->query($sql);
  $influencers = [];

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $influencers[] = $row;
    }
  }

  echo json_encode($influencers);
}

$conn->close();
?>