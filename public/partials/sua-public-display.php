<?php

/**
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/public/partials
 */
?>

<div class="wp-sua" ng-app="suaApp">
    <div growl></div>
    <div class="row">
        <div ng-if="title || description" ng-class="columns">
            <strong ng-show="title" ng-bind="title"></strong>

            <div ng-show="description" ng-bind-html="description"></div>
        </div>
        <div ng-class="columns" ng-view="" class="route-animation">
        </div>
    </div>
</div>