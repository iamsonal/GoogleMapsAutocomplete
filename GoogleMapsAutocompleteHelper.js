/**
 * Created by Sonal_Chaudhary on 9/22/2017.
 */
({
    displayOptionsLocation: function (component, searchKey) {
        var action = component.get("c.getAddressAutoComplete");
        action.setParams({
            "input": searchKey,
            "types": '(regions)'
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var options = JSON.parse(response.getReturnValue());
                var predictions = options.predictions;
                var addresses = [];
                if (predictions.length > 0) {
                    for (var i = 0; i < predictions.length; i++) {
                        addresses.push(
                            {
                                value: predictions[i].types[0],
                                label: predictions[i].description
                            });
                    }
                    console.log(addresses);
                    component.set("v.filteredOptions", addresses);
                }
            }
        });
        $A.enqueueAction(action);
    },

    openListbox: function (component, searchKey) {
        var searchLookup = component.find("searchLookup");

        if (typeof searchKey === 'undefined' || searchKey.length < 3)
        {
            $A.util.addClass(searchLookup, 'slds-combobox-lookup');
            $A.util.removeClass(searchLookup, 'slds-is-open');
            return;
        }

        $A.util.addClass(searchLookup, 'slds-is-open');
        $A.util.removeClass(searchLookup, 'slds-combobox-lookup');
    },

    clearComponentConfig: function (component) {
        var searchLookup = component.find("searchLookup");
        $A.util.addClass(searchLookup, 'slds-combobox-lookup');

        component.set("v.selectedOption", null);
        component.set("v.searchKey", null);

        var iconDirection = component.find("iconDirection");
        $A.util.removeClass(iconDirection, 'slds-input-has-icon_right');
        $A.util.addClass(iconDirection, 'slds-input-has-icon_left');
    },

})