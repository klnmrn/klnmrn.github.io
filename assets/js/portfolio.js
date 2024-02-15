$(document).ready(function() {
	$('.portfolio-link').click(function(e) {
		e.preventDefault();
		var modal = $(this).attr('href');
		$(modal).toggleClass('is-visible');
		$('body').toggleClass('is-visible');
	
		// Center the modal
		var modalDialog = $(modal).find('.modal-dialog');
		modalDialog.css('margin-top', Math.max(0, ($(window).height() - modalDialog.height()) / 2));

		// Close the modal when clicking outside of it
		if ($(modal).hasClass('is-visible')) {
			$(document).on('click.modal', function(e) {
				if ($(e.target).closest(modal).length === 0) {
					e.preventDefault();
					$(modal).removeClass('is-visible');
					$('body').removeClass('is-visible');
					$(document).off('click.modal');
				}
			});
		} else {
			$(document).off('click.modal');
		}
	});
});