;(function($) {
    $.fn.responsiveTable = function(customOptions) {
        var self = this;

        // init options
        var options = {
            id: 'resptable',
            class: 'resptable',
            width: 600

        };

        // update the options if needed
        if (customOptions) {
            $.each(customOptions, function(index, value) {
                options[index] = value;
            })
        }

        var table = $(this);
        if (table.length) {
            // start rebuild table process
            this.addClass(options.id)
        } else {
            return false;
        }
    }
}(jQuery));
