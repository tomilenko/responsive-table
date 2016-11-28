/*
Author: Vadim Tomilenko
Author email: tomilenko.vadim@gmail.com
Version: 0.1
*/

;(function($) {
    $.fn.responsiveTable = function(customOptions) {
        var self = this;

        // init options
        var options = {
            class: 'resptable',
            width: 800,
            removeOldTable: false,
            titleClass: 'resptable-title'
        };

        // update the options if needed
        if (customOptions) {
            $.each(customOptions, function(index, value) {
                options[index] = value;
            })
        }

        if (this.length) {
            var table = this.selector;
            var tableHead = $(table).find('th');

            var tableArray = $(table).find('tr').map(function() {
                return [$("td", this).map(function() {
                    return $(this).text();
                }).get()];
            }).get();

            if (window.innerWidth <= options.width) {
                if (tableArray.length) {
                    var tableStart = '<table class="' + options.class + '">'
                    var tableEnd = '</table>';
                    var content = tableStart;

                    $.each(tableArray, function(index, value) {
                        if (value.length) {
                            var tableHeadTitle = "<thead><tr><th colspan='2'>" + "#" + index + "</th></tr></thead>";
                            var currentTable = tableStart + tableHeadTitle;
                            $.each(value, function(i,v) {
                                currentTable += '<tr>'
                                  + '<td class=' + options.titleClass + '>' + tableHead[i].innerText + '</td>'
                                  + '<td>' + v + '</td>'
                                  + '</tr>';
                            })
                            currentTable += tableEnd;

                            var generatedTables = $('.' + options.class);
                            if (generatedTables.length) {
                                generatedTables.last().after(currentTable);
                            } else {
                                self.after(currentTable);
                            }
                        }
                    });
                }

                if (options.removeOldTable) {
                    this.remove();
                }
            } else {
                console.log('ResponsiveTable: Window width bigger than needed');
            }
        } else {
            console.log('ResponsiveTable: Expected table is not exist!');
        }
    }
}(jQuery));
