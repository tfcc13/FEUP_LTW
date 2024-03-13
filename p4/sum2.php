<?php 

    function sum_2_values($num1, $num2) {
        return ($num1 + $num2);
    }

    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    echo 'This is number 1: ' .$num1 . '<br>'; // . são concatenadores
    echo 'This is number 1: ' .$num2 . '<br>'; // '<br>' interpreta o html

    echo 'The sum of the values is: ' .sum_2_values($num1, $num2); 

?>