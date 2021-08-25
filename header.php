<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">

    <?php wp_head(); ?>
</head>

<body>
    <header>
        <h1 class="imageContainer">
            <img class="maybellineLogo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logoMaybellineBlackBackground.jpg" alt="Logo da empresa">
        </h1>
    </header>