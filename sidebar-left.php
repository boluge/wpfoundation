<?php
    if (! is_active_sidebar('left-area'))
        return;
?>
<aside class="large-<?php grid('left'); ?> columns">
    <?php if ( is_active_sidebar('left-area') ) : ?>

            <?php dynamic_sidebar('left-area'); ?>

    <?php endif; ?>
</aside>