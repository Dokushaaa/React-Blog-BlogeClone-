<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];

// map read by id
if (array_key_exists("postid", $_GET)) {
    $post->post_aid = $_GET['postid'];

    checkId($post->post_aid);

    $query = checkReadById($post);
    http_response_code(200);
    getQueriedData($query);
}


// map read all
if (empty($_GET)) {
    $query = checkReadAll($post);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();