<?php
                require __DIR__ . '/validation.php';
                require __DIR__ . '/sendMail.php';
                if(isset($_POST['submit'])){
                  $name = $_POST['name'];
                  $email = $_POST['email'];
                  $tel = $_POST['tel'];
                  $errors = validation($_POST);
                  if(empty($errors)){ 
                    sendMail($name, $email, $tel);
                   header('Location: /../index.php?send=true');
                  
                  }else{
                    header('Location: /../index.php?send=false');
                  }
                }
                ?>