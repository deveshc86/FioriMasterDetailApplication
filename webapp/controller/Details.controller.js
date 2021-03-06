sap.ui.define([
	"sap/ui/core/mvc/Controller","accenture/fin/ar/model/models"
], function(Controller, oModels) {
	"use strict";

	return Controller.extend("accenture.fin.ar.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		   onInit: function() {
		   	this.oRouter = this.getOwnerComponent().getRouter();
		    //Attaching the routePatternMatched event dynamically to the router
		     this.oRouter.attachRoutePatternMatched(this.onRouteChange, this);
			},
			onRouteChange: function(oEvent) { 
				// The Event object has a parameter - "arguments" which has the fruitid
				var index = oEvent.getParameter("arguments").fruitId;
				
				// Build the path for Element Binding
				var spath = "/fruits/" + index;
				
				this.getView().bindElement(spath);
			}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf accenture.fin.ar.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});