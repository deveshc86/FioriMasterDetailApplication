sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator"
], function(Controller,Filter,FilterOp) {
	"use strict";

	return Controller.extend("accenture.fin.ar.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		   onInit: function() {
		     this.oRouter = this.getOwnerComponent().getRouter();
		     
		     //Attaching the routePatternMatched event dynamically to the router
		     this.oRouter.attachRoutePatternMatched(this.onRouteChange, this);
			},
			onRouteChange: function(oEvent){ 
				// The Event object has a parameter - "arguments" which has the fruitid
				var index = oEvent.getParameter("arguments").fruitId;
				
				if(index){ 
					//Using the index we build the spath
				var spath = "/fruits/" + index;
				
				// Now we get all the items from List Control and loop through it till we find a matching path. The result is an array of items
				var aItems = this.getView().byId("idList").getItems();
				
				for(var i = 0; i < aItems.length; i++){ 
					// Check if there is a match with the items spath
					if (spath === aItems[i].getBindingContext().getPath() ) { 
					
					// If there is a match set the List Control to that item
					this.getView().byId("idList").setSelectedItem(aItems[i]);
					break;
					}
				}
				}
				
				
			},
           onNext: function(){
           	
           	// this.getView().getParent().to("idView2");
           },
           
           onItemSelect:function(oEvent){
           	
           	// Get List item
           	var oListItem = oEvent.getParameter("listItem");
           	
           	//Get the binding context and within that get path
           	var spath = oListItem.getBindingContext().getPath();
           	
           	// Split the path at / . An array is returned and you select the last element - which exists at array.length - 1
           	var index = spath.split("/")[spath.split("/").length - 1];
           	
           	//Since we already have the router in the init method, use it to navigate to route name- "masterDetail"
           	this.oRouter.navTo("masterDetail", { 
           		"fruitId" : index
           	});
           
           	
           	// Below code is not needed when you use the router manifest concept because when you go use back and forward key on browser this wont execute
           	//To make this work we will have to attach an event in the init method of Details and Master controller . That event is called
           	// whenever a route changes - You can find it in SDK of Router Class routePatternMatched
           	
           	//Now do element Binding with Detail View, but first we need to get the Detail View Object
           	// To get the parent - SplitApp Container Control we need to do getParent() twice because the parent of Master View is Master Page 
           	//and the parent of Master View is Split App
           	// var oSplitApp = this.getView().getParent().getParent();
           	
           	// //Within SplitApp Control, there is a method getDetailPages which has Detail View on index 0
           	// var oDetailView = oSplitApp.getDetailPages()[0];
           	
           	// //Now bind the element with entire Detail View
           	// oDetailView.bindElement(spath);
       
           	
           },
           onSearch: function(oEvent) { 
           	var whatUserTyped = oEvent.getParameter("query");
           	
           	var oFilter = new Filter({ 
           		path: "type",
           		operator: FilterOp.Contains,
           		value1: whatUserTyped
           	});
           	
           	var aFilter=[oFilter];
           	
           	//inject the filter inside items aggregation of our list control
			var oList = this.getView().byId("idList");
			oList.getBinding("items").filter(aFilter);
           	
           }
           	
           
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf accenture.fin.ar.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});