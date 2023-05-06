<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $servername = "cos-cs106.science.sjsu.edu";
    $username = "catluvrsuser";
    $password = "xW#Z53T#Wx";
    $dbname = "catluvrsdb";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);}

    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM catluvrsdb.users WHERE username = '$user' AND password = '$pass'";
    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            if($user == $row["username"] && $pass == $row["password"]){
                $url = 'http://localhost:3000/home';
                header( "Location: $url" );
            }
        }
      } else {
        $url = 'http://localhost:3000/login?login_failed=true'; // set query parameter to indicate login failure
        header("Location: $url");
      }
    

?>