sap.ui.define(["sap/ui/core/UIComponent","accenture/fin/ar/model/models"],
function(oUIComponent, oModels){
	return oUIComponent.extend("accenture.fin.ar.Component",{ 
		metadata:{
			"manifest": "json"
		},
		init: function() { 
			oUIComponent.prototype.init.apply(this);
			var oRouter = this.getRouter();
			oRouter.initialize();
		}
		
		//Not required because of manifest.json
		// createContent: function() { 
		// 	// Instantiate the root view - App view
		// 	var oView = sap.ui.view("idView",{ 
		// 		viewName:"accenture.fin.ar.view.App",
		// 		type:"XML"
		// 	});
			
		// 	// Create and set the model at the Root view level so that it becomes global and is available to all views and controllers
		// 	var oFruitModel = oModels.createJSONModel("model/Data/fruits.json");
			
		// 	oView.setModel(oFruitModel);
			
		// 	// Instantiate View 1
		// 	var oViewMaster = sap.ui.view("idMaster",{ 
		// 		viewName:"accenture.fin.ar.view.Master",
		// 		type:"XML"
		// 	});
			
		// 	// Instantiate View2
		// 	var oViewDetails = sap.ui.view({ 
		// 		viewName:"accenture.fin.ar.view.Details",
		// 		type:"XML",
		// 		id:"idDetails"
		// 	});
			
		// 	//Root view App container object contains View1 and View 2
		// 	// so get the App container object first
		// 	var oApp = oView.byId("idSplitApp");
			
		// 	// Both oView1 and oView2 return a Page object
		// 	oApp.addMasterPage(oViewMaster).addDetailPage(oViewDetails);
			
		// 	return oView;
			
		// }
	});
});