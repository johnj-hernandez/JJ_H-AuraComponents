({
    searchHelper: function (component, event, getInputkeyWord) {
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
