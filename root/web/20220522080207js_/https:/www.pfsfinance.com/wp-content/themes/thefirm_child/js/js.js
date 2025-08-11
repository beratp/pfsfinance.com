var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function() {
jQuery(".expanded").hide();

jQuery(".collapsed a").click(function() {
    jQuery(this).hide();


    jQuery(".expanded").slideDown();
    
   
});
jQuery(".expanded a").click(function(){

	jQuery(".expanded").slideUp();
	
	jQuery(".collapsed a").show();
});

});

jQuery(document).ready(function() {
	jQuery(".newsletter-mail input[type='submit']").css('display','none');

	jQuery("#newsletter").change(function(){
		 var optionSelected = jQuery(this).val();
		 console.log(optionSelected);
		 if(optionSelected == 2)
		 {
		 
		 	jQuery(".newsletter-mail input[name = 'unsubscribe']").css('display','block');
		 		jQuery(".newsletter-mail input[name = 'subscribe']").css('display','none');
		 }
		 else if(optionSelected == 1)
		 {
		 	jQuery(".newsletter-mail input[name = 'subscribe']").css('display','block');
		 	jQuery(".newsletter-mail input[name = 'unsubscribe']").css('display','none');	
		  }
		  else {
		  	jQuery(".newsletter-mail input[type='submit']").css('display','none');

		  }

	});
});
jQuery(window).load(function(){

	jQuery("#newsletter").prop('selectedIndex',0);
});

}
/*
     FILE ARCHIVED ON 20:42:19 Mar 19, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:05:52 Aug 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.531
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 24.105
  LoadShardBlock: 48.013 (3)
  PetaboxLoader3.datanode: 83.945 (5)
  load_resource: 303.27 (2)
  PetaboxLoader3.resolve: 170.713 (2)
*/