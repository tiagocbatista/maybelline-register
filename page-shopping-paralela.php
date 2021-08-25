<?php get_header(); ?>
<?php
// Template Name: Cadastro Shopping Paralela
?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <section>
            <h1 class="pageTitle"><?php the_title(); ?></h1>
        </section>
    <?php endwhile;
else : ?>
    <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>

<?php get_footer(); ?>