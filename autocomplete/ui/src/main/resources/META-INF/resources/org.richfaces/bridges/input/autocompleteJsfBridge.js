(function($, RichFaces) {

	$.widget('rf.richAutocompleteJsfBridge', {

		_create : function(options) {
			this._super();
			
			var clientId = this.element.attr('id');
	        
			var options = $.extend({}, options, {
	            source: '[id="' + clientId + 'Suggestions"]',
	            showButton: true,
	            update: function(request, done) {
	                var params = {};
	                params[clientId + 'SearchTerm'] = request.term;
	                RichFaces.ajax(clientId, null, {parameters: params, error: done, complete: done});
	            }
            });
		    
		    $(document.getElementById(clientId + 'Input')).richAutocomplete(options);
		}
	});

}(jQuery, RichFaces));