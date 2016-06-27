// theme js

$(document).ready(function(){

  $(".fancybox").fancybox();

	// Video rescaling fix : http://www.netmagazine.com/tutorials/create-fluid-width-videos

		// Find all YouTube videos
		var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'],iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='http://new.livestream.com'], iframe[src^='http://embed.spotify.com']"),
		 
		    // The element that is fluid width
		    $fluidEl = $("aside");
		 
		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
		 
		  $(this)
		    .data('aspectRatio', this.height / this.width)
		 
		    // and remove the hard coded width/height
		    .removeAttr('height')
		    .removeAttr('width');
		 
		});
		 
		// When the window is resized
		$(window).resize(function() {
		 
		  var newWidth = $fluidEl.width();
		 
		  // Resize all videos according to their own aspect ratio
		  $allVideos.each(function() {
		 
		    var $el = $(this);
		    $el
		      .width(newWidth)
		      .height(newWidth * $el.data('aspectRatio'));
		 
		  });
		 
		// Kick off one resize to fix all videos on page load
		}).resize();

    // LIST SEARCH

    // Establish the list and its fields

    var options = {
      valueNames: [ 'post-title', 'post-date', 'author', 'categories', 'tags' ]
    };

    var archiveList = new List('archive', options);

    // Get the URL search parameter if it exists, fill the form field,
    // and filter the results, with assistance from:
    // https://www.sitepoint.com/url-parameters-jquery/

    var urlParam = new RegExp('[\?&]' + 'search' + '=([^&#]*)').exec(window.location.href);

    if (urlParam==null){
      // Do nothing.
    } else {
      $('.search').val(decodeURIComponent(urlParam[1]));
      archiveList.search(decodeURIComponent(urlParam[1]));
    }

    $(".post-title").unorphanize();
    $(".caption").unorphanize();
});
