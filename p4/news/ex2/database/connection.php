<?php
    function getDatabaseConnection() {
        return $db = new PDO('sqlite:database/news.db');
    }

?>