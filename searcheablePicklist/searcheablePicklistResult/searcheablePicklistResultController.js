({
   selectRecord : function(component, event, helper){      
    // get the selected record from list  
      var getSelectRecord = component.get("v.oObject");
    // call the event   
      var compEvent = component.getEvent("oSelectedObjectEvent");
    // set the Selected sObject Record to the event attribute.  
         compEvent.setParams({"objectByEvent" : getSelectRecord });  
    // fire the event  
         compEvent.fire();
    },
})
