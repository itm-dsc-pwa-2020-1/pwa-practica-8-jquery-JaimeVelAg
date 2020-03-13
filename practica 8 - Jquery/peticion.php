<?php
$data = $_POST["id"];

$suma = $data + 5;

$array = array('resultado' => $suma , 'texto' => "Resultado : "  );

echo json_encode($array);
 ?>
