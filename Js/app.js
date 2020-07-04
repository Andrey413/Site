$(function() {
	var header = $("#header");
	var introH = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop();
	checkScroll(scrollOffset);
/*HEADER Fixed ===========================================*/
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});
	function checkScroll(){
		
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this)
		var blockid = $this.data('scroll');
		var blockOffset = $(blockid).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset

		},500);
	});


	/*Nav toggle==================*/
	$("#nav_toggle").on("click", function(event){
		event.preventDefault();



		$(this).toggleClass("active");
		$("#nav").toggleClass("active");



	});






});