<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TeresasWebsite'; 
    $to = 'teresaefan@gmail.com'; 
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

	if ($_POST['submit']) {
    	if (mail ($to, $subject, $body, $from)) { 
        	echo '<p>Thanks for your message, looking forward to getting in contact with you!</p>';
    	} else { 
        	echo '<p>Something went wrong, please go back and try again!</p>';
    	}
	}
?>