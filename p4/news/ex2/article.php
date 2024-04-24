<?php

    require_once('database/connection.php');
    require_once('database/news.php');
    require_once('database/comments.php');
    require_once('templates/commons.php');
    require_once('templates/news.php');

    $id = $_GET['id'];
    $db = getDatabaseConnection();

    $article = getNewsItem($db, $id);
    $comments = getNewsComments($db, $id);

    output_header();
    output_single_article($article, $comments);
    output_footer();


?>