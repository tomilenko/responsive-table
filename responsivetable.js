;(function($) {
    $.fn.responsiveTable = function(customOptions) {
        var self = this;

        // init options
        var options = {
            id: 'resptable',
            class: 'resptable',
            width: 600,
            removeOldTable: false
        };

        // update the options if needed
        if (customOptions) {
            $.each(customOptions, function(index, value) {
                options[index] = value;
            })
        }

        if (this.length) {
            var tableId = this.attr('id');

            var tableArray = $.map(this.find('th:not(:first)'), function(element, index) {
                return [[$(element).text(), self.find('td:eq(' + index + ')').text()]]
            });

            if (tableArray.length) {
                var content = '';

                var tableStart = '<table id="' + options.id + '" class="' + options.class + '">'
                var tableEnd = '</table>';

                $.each(tableArray, function(index, value) {
                    var currentTable = '';
                    $.each(value, function(i,v) {
                        currentTable += '<td>' + v + '</td>';
                    })

                    content += '<tr>' + currentTable + '</tr>';

                });

                this.after(content);
            }

            if (options.removeOldTable) {
                this.remove();
            }
        } else {
            console.log('ResponsiveTable: Expected table is not exist!');
        }
    }
}(jQuery));
