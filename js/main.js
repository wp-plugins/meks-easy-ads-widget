(function($) {
    $(document).ready(function ($) {
    	
    	/* Ads widget handlers */
    	
    	$("body").on("click", "a.mks_add_ad", function(e){
				e.preventDefault();
				var widget_holder = $(this).closest('.widget-inside');
				var cloner = widget_holder.find('.mks_ads_clone');
				
				widget_holder.find('.mks_ads_container').append(cloner.html());
				
			});
			
			$("body").on("click", "input.mks-ad-size", function(e){
				if($(this).val() == 'custom'){
					$(this).parent().next().show();
				} else {
					$(this).parent().next().hide();
				}				
			});
		});
})(jQuery);