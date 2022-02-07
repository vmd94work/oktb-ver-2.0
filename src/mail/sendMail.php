<?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\SMTP;
 use PHPMailer\PHPMailer\Exception;
 require __DIR__ . '/PHPmailer/PHPMailer.php';
 require __DIR__ . '/PHPmailer/Exception.php';
 require __DIR__ . '/PHPmailer/SMTP.php';


function sendMail($name, $email, $tel){
    
   $mail = new PHPMailer(true);
   try{
   $mail->CharSet = "utf-8";
   $mail->isSMTP();
   $mail->Host = 'smtp.gmail.com';
   $mail->SMTPAuth   = true;     
   $mail->Username   = 'vmd94.work@gmail.com';
   $mail->Password   = 'evvzcgfusolwnmmq';  
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
   $mail->Port       = 465;
   
   $mail->setFrom('vmd94.work@gmail.com', 'Заявка с сайта');
   $mail->addAddress('vmd94.work@gmail.com', 'Заявка с сайта');
   $mail->isHTML(true);                                  //Set email format to HTML
   $mail->Subject = 'Заявка с сайта';
   $mail->Body    = "Имя: $name<br>Еmail: $email<br>Телефон: $tel";
   $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>