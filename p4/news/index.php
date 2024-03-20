<?php 

    $db = new PDO('sqlite:news.db');


    //$stmt = $db->prepare('SELECT * FROM news');
    $all_data = $db->prepare('SELECT news.*, users.*, COUNT(comments.id) AS comments
    FROM news JOIN
         users USING (username) LEFT JOIN
         comments ON comments.news_id = news.id
    GROUP BY news.id, users.username
    ORDER BY published DESC');

    //$stmt->execute();
    $all_data->execute();

    $result = $all_data->fetchAll();
    /*$articles = $stmt->fetchAll();
    
    foreach ($articles as $article) {
        echo '<h1>' . $article['title'] . '</h1>';
        echo '<p>' . $article['introduction'] . '</p>';

    }
    */


    foreach($result as $row) {
        echo '<h1>' . $row['title'] . '</h1>';
        echo '<p> ' . $row['introduction']. '</p>';
        echo 'Author: ' . $row['username']. '<br>';
        echo 'Comments: ' . $row['comments']. '<br>';
    }


?>