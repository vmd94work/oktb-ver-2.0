<?php
function validation($data){
   $errors =[];
                  if(empty($data['name'])){
                    $errors['name'] = 'is-invalid';
                  };
                  if(empty($data['email'])){
                    $errors['email'] = 'is-invalid';
                  };
                  if(empty($data['tel'])){
                    $errors['tel'] = 'is-invalid';
                  };
                  return $errors;
}