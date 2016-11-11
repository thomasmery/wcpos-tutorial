(function (app, $, _, bb) {
	
	// create a new Marionette View
	var ReportsView = app.ItemView.extend({
		template: function(){
		  return 'Hello Paul!';
		}
	});

	var ReportsRoute = app.Route.extend({

		initialize: function (options) {

		    this.collection = bb.Radio.request('entities', 'get', 'orders');

		    console.log(this.collection);

		},

		render: function(){
		  var container = app.layout.getRegion('main');
		  var view = new ReportsView();
		  container.show(view);
		}


	});

	var ReportsRouter = app.Router.extend({
		routes: {
		  'reports' : function(){
		    return new ReportsRoute();
		  }
		}
	});

	new ReportsRouter();

})(POS, jQuery, _, Backbone);