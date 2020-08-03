({
    searchHelper1: function (component, event, getInputkeyWord) {
        // call the apex class method 
        var action = component.get("c.fetchLookUpValues");
        // set param to method  
        action.setParams({
            'searchKeyWord': getInputkeyWord,
            'ObjectName': component.get("v.objectAPIName")
        });
        // set a callBack    
        action.setCallback(this, function (response) {
            $A.util.removeClass(component.find("mySpinner"), "slds-show");
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                // if storeResponse size is equal 0 ,display No Result Found... message on screen.                }
                if (storeResponse.length == 0) {
                    component.set("v.Message", 'No Result Found...');
                } else {
                    component.set("v.Message", '');
                }
                // set searchResult list with return value from server.
                component.set("v.listOfSearchRecords", storeResponse);
            }

        });
        // enqueue the Action  
        $A.enqueueAction(action);

    },
    searchHelper: function (component, event, getInputkeyWord) {
        var dummyArray = [];
        for (let i = 0; i < 20; i++) {
            const element = {
                label: "label" + i,
                value: "value" + i
            };
            dummyArray.push(element);

        }
        console.log('dummyArray');
        console.log(dummyArray);
        //component.set("v.fullList", dummyArray);
        var fullList = component.get("v.fullList");
        var storeResponse = [];
        try {
            if (fullList.length > 0) {
                console.log('printing map');
                if (fullList[0].label == undefined) {
                    fullList = fullList.map((item) => {
                        var x = {};
                        x.value = item;
                        x.label = item;
                        return x;
                    });
                    console.log("isUndefined");
                    console.log(fullList);
                }
                storeResponse = fullList.filter((x) => {
                    return x.label.toLowerCase().includes(getInputkeyWord.toLowerCase());
                });

            }
        } catch (error) {
            alert("error")
            console.log(error);
        }

        if (storeResponse.length == 0) {
            component.set("v.Message", 'No Result Found...');
        } else {
            component.set("v.Message", '');
        }
        component.set("v.listOfSearchRecords", storeResponse);

    },
})