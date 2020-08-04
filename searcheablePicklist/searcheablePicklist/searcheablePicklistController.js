({
  onfocus: function (component, event, helper) {
    $A.util.addClass(component.find("mySpinner"), "slds-show");
    var forOpen = component.find("searchRes");
    $A.util.addClass(forOpen, 'slds-is-open');
    $A.util.removeClass(forOpen, 'slds-is-close');
    // Get Default 5 Records order by createdDate DESC  
    var getInputkeyWord = '';
    helper.searchHelper(component, event, getInputkeyWord);
  },
  onblur: function (component, event, helper) {
    component.set("v.listOfSearchRecords", null);
    var forclose = component.find("searchRes");
    $A.util.addClass(forclose, 'slds-is-close');
    $A.util.removeClass(forclose, 'slds-is-open');
  },
  keyPressController: function (component, event, helper) {
    // get the search Input keyword   
    var getInputkeyWord = component.get("v.SearchKeyWord");
    if (getInputkeyWord.length > 0) {
      var forOpen = component.find("searchRes");
      $A.util.addClass(forOpen, 'slds-is-open');
      $A.util.removeClass(forOpen, 'slds-is-close');
      helper.searchHelper(component, event, getInputkeyWord);
    }
    else {
      component.set("v.listOfSearchRecords", null);
      var forclose = component.find("searchRes");
      $A.util.addClass(forclose, 'slds-is-close');
      $A.util.removeClass(forclose, 'slds-is-open');
    }
  },

  // function for clear the Record Selaction 
  clear: function (component, event, helper) {

    var pillTarget = component.find("lookup-pill");
    var lookUpTarget = component.find("lookupField");

    $A.util.addClass(pillTarget, 'slds-hide');
    $A.util.removeClass(pillTarget, 'slds-show');

    $A.util.addClass(lookUpTarget, 'slds-show');
    $A.util.removeClass(lookUpTarget, 'slds-hide');

    component.set("v.SearchKeyWord", null);
    component.set("v.listOfSearchRecords", null);
    component.set("v.selectedRecord", {});
    component.set("v.selectedValue", "");
  },
  handleValidChange: function (component, event, helper) {
    var valid = component.get("v.valid");
    var inputBox = component.find("inputBox");
    if (valid) {
      $A.util.removeClass(inputBox, 'slds-has-error');
    } else {
      $A.util.addClass(inputBox, 'slds-has-error');
    }
  },

  checkValidity: function (component, event, helper) {
    var selectedValue = component.get("v.selectedValue");
    if ((selectedValue == null || selectedValue == "") && component.get("v.required")) {
      component.set("v.valid", false);
    } else {
      component.set("v.valid", true);
    }
    return component.get("v.valid")
  },

  // This function call when the end User Select any record from the result list.   
  handleComponentEvent: function (component, event, helper) {
    // get the selected Account record from the COMPONETN event 	 
    var selectedAccountGetFromEvent = event.getParam("objectByEvent");
    component.set("v.selectedRecord", selectedAccountGetFromEvent);
    component.set("v.selectedValue", selectedAccountGetFromEvent.value);
    var forclose = component.find("lookup-pill");
    $A.util.addClass(forclose, 'slds-show');
    $A.util.removeClass(forclose, 'slds-hide');

    var forclose = component.find("searchRes");
    $A.util.addClass(forclose, 'slds-is-close');
    $A.util.removeClass(forclose, 'slds-is-open');

    var lookUpTarget = component.find("lookupField");
    $A.util.addClass(lookUpTarget, 'slds-hide');
    $A.util.removeClass(lookUpTarget, 'slds-show');

  },
})
