(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	$(document).ready(function(){
		// $('[data-toggle="popover"]').popover();
		// $('[data-toggle="tooltip"]').tooltip();

		// $(document).find("#ays_pd_default_sorting_points").not('.ays-select-search').select2({
		// 	minimumResultsForSearch: -1
		// });

		// WP color picker start
		$(document).find('#ays_pd_main_color').wpColorPicker();
		$(document).find('#ays_pd_text_color').wpColorPicker();
		// WP color picker end
		
	});

})( jQuery );
