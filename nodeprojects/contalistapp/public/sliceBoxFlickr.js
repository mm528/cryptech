(function(){

$.fn.sliceBoxFlickr = function(option){
	this.each(function(){


		var opts = $.extend({

				show			: 20,
				usingFirst		: true,
				rss				: "",
				sliceCount		:7,
				disperseFactor	:50,
				sequentialRotation 	:true,
				sequentialFactor    : 20,
				speed3d		:800
		},option);



		var selector = $(this);


		if (opts.usingFirst) $(selector).find("img.first").remove();

		


	});
};

}(jQuery))

