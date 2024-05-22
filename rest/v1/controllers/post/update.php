<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];
if (array_key_exists("postid", $_GET)) {
    checkPayload($data);
     $post->post_aid = $_GET['postid'];
    $post->post_title = checkIndex($data, "post_title");
    $post->post_category = checkIndex($data, "post_category");
    $post->post_image = checkIndex($data, "post_image");
    $post->post_author = checkIndex($data, "post_author");
    $post->post_article = checkIndex($data, "post_article");
    $post->post_published_date = date("Y-m-d H:i:s");
    $post->post_datetime = date("Y-m-d H:i:s");date("Y-m-d H:i:s");
    $query = checkUpdate($post);
    returnSuccess($post, "post", $query);
}
checkEndpoint();