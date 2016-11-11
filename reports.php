<?php

// adding to Menu
function reports_pos_menu_item($menu) {

    array_push($menu, array(
        'id'     => 'wcpos-reports',  // any unique id 
        'label'  => 'Reports',  // menu 
        'href'   => '#reports'  // routing trigger
    ));

    return $menu;

}
add_filter('woocommerce_pos_menu', 'reports_pos_menu_item');

// add js reports file
function reports_pos_js_file($js){
    $js['reports'] = get_template_directory_uri() . '/' . basename(__DIR__) . '/reports.js';
    return $js;
}
add_filter('woocommerce_pos_enqueue_footer_js', 'reports_pos_js_file');