<?php
/**
 * Plugin Name:     Sandbox Wordpress Gutenberg Blocks
 * Plugin URI:      https://github.com/kamataryo/sandbox-wordpress-gutenberg-blocks
 * Description:     my sandbox
 * Author:          kamataryo
 * Author URI:      https://github.com/kamataryo
 * Text Domain:     sandbox-wordpress-gutenberg-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Sandbox_Wordpress_Gutenberg_Blocks
 */

// Your code starts here.
add_action( 'enqueue_block_editor_assets', function() {
  wp_enqueue_script(
    'sandbox-wordpress-gutenberg-blocks',
    plugins_url( 'dist/main.js', __FILE__ ),
    [ 'wp-blocks', 'wp-element' ]
  );
} );
