$(function() {
	$('#nav-wrapper').height($("#nav").height());

	$('#nav').affix({
		offset : {
			top : $('#nav').offset().top - 3
		}
	});

	$("#browserTree").fancytree({
		source : {
			url : "/mockupSandbox/pantherCartridge/json/simpleTree.json"
		},
		autoScroll : true,
		autoCollapse : true,
		init : function(event, data) {
			data.tree.getFirstChild().setFocus();
		},
		focus : function(event, data) {
			data.node.scrollIntoView(true);
		},
		activate: function(event, data) {
	        var node = data.node;
	        // acces node attributes
	        $("#nodeDetails").text(node.title);
	        if( !$.isEmptyObject(node.data) ){
//	          alert("custom node data: " + JSON.stringify(node.data));
	        }
	      }
	});

});