var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "page1":"page1"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
		
		HomeView = Backbone.View.extend({
	        initialize: function(){
				var self = this;
				$.ajax({
					url: "views/index.html",
					success: function(data){
						console.log(data);
						$("[data-role='page']").empty();
						$("[data-role='page']").html(data);
						
					
						var template = _.template( $("#index").html(), {} );
			            // Load the compiled HTML into the Backbone "el"
			            self.el.html( template );
					}
				});
	        },

	    });
		
        this.changePage(new HomeView({el: $("body")}));
    },

    page1:function () {
        console.log('#page1');
        this.changePage(new Page1View());
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

});