<?php 

    function sum_2_values($num1, $num2) {
        return ($num1 + $num2);
    }


    // Get, indicado para buscar informação que não é modificada. Exemplo subquery numa base de dados
    // Post, indicado para processar informação que "é modificável", Exemplo, inserir, ou alterar dado numa base de dados
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    echo 'This is number 1: ' .$num1 . '<br>'; // . são concatenadores
    echo 'This is number 1: ' .$num2 . '<br>'; // '<br>' interpreta o html

    echo 'The sum of the values is: ' .sum_2_values($num1, $num2) .'<br>'; 

    echo '<a href="form2.html"> Go to form </a>';
?>