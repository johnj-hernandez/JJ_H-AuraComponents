({
    onSearchWordChange: function(component,event,helper) {
        var fullListCompletion= component.get("v.fullListCompletion");
        if(! fullListCompletion){
            component.set("v.fullList",component.get("v.listToFilter"));
            component.set("v.fullListCompletion",true);
        }
        
        try{
            var listToFilter = component.get("v.listToFilter");
            var fullList = component.get("v.fullList");
            var currentInput = event.target.value.toLowerCase();
            var fieldsToSearch = component.get("v.fieldsToSearch");
            listToFilter= fullList.filter((x)=>{
                if(currentInput == '')return true;     
                
                if(fieldsToSearch.length > 0){
                    for(var i=0;i<fieldsToSearch.length;i++){
                    if(x[fieldsToSearch[i]]){
                    		return String(x[fieldsToSearch[i]]).toLowerCase().includes(currentInput);
                		}
                     }
                }
            return false; 
        });
        component.set("v.listToFilter",listToFilter)
        
        console.log(event.target.value)
        console.log("on change")
        console.log("listTofilter",component.get("v.listToFilter"));
        console.log("fullList",component.get("v.fullList"));
        console.log("FIELDS TO SEARCH",fieldsToSearch)
    }catch(e){console.log(e)}
 
 },    
 })
