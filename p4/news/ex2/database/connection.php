<?php
    function getDatabaseConnection() {
        return $db = new PDO('sqlite:news.db');
    }

?>