## Synopsis

The simple jQuery plugin for making the responsive table. This plugin generates the new tables from each row of your table.
Currently, this plugin  works only with simple tables. Most likely in the future, we will add the supports for difficult tables.

## Simple Example
```
$('#test-table').responsiveTable();
```
## Full Example
```
jQuery(document).ready(function($) {
    $('#test-table').responsiveTable({
        class: 'resptable',
        width: 800,
        removeOldTable: true,
        titleClass: 'resptable-title'
    });
});
```
## Parameters
    'class' - class for new generated tables
    'width' - generate new tables from less then this value, by default 'width' is 800
    'removeOldTable' - parameter for removing old table after generation all new tables
    'titleClass' - specific class for title (left part of generation table)

## Installation

1. Add responsivetable.js and styles.css to your project.
2. Add jQuery 2 or earlier to your project

## Current Version

Version - 0.1.0
