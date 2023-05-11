<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');

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


    //Find Pets based on User Preferences
    $pets = "SELECT DISTINCT p.*
        FROM Pets p
        JOIN users u ON
        (p.Type = 'dog' AND u.dog = 1) OR
        (p.Type = 'cat' AND u.cat = 1) OR
        (p.Type = 'bunnie' AND u.bunnies = 1) OR
        (p.Type = 'fish' AND u.fish = 1) OR
        (p.Type = 'gerbal' AND u.gerbal = 1) OR
        (p.Type = 'bird' AND u.bird = 1) OR
        (p.Type = 'reptile' AND u.reptile = 1)";
    
    ob_clean();

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            if($user == $row["username"] && $pass == $row["password"]){
                $url = 'http://localhost:3000/home';
                $result2 = $conn->query($pets);
                $json_result = json_encode($result2);    
                echo $json_result;
                header("Location: $url");

            }
        }
      } else {
        $url = 'http://localhost:3000/login?login_failed=true'; // set query parameter to indicate login failure
        header("Location: $url");
      }
?>