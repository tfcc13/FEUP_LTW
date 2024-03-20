<?php

    function getAllNews($db) {
        $stmt = prepare('SELECT news.*, users.*, COUNT(comments.id) AS comments
    FROM news JOIN
        users USING (username) LEFT JOIN
        comments ON comments.news_id = news.id
    GROUP BY news.id, users.username
    ORDER BY published DESC');

    $stmt->execute();

    return $stmt->fetchAll();

    }


?>