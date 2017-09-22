/**
 * Created by Sonal_Chaudhary on 9/22/2017.
 */
({
    keyPressController: function (component, event, helper) {

        var searchKey = component.get("v.searchKey");

        helper.openListbox(component, searchKey);
        helper.displayOptionsLocation(component, searchKey);
    },

    selectOption: function (component, event, helper) {
        var selectedItem = event.currentTarget.dataset.record;
        console.log(selectedItem);
        var selectedValue = event.currentTarget.dataset.value;
        console.log(selectedValue);

        component.set("v.selectedOption", selectedItem);

        var searchLookup = component.find("searchLookup");
        $A.util.removeClass(searchLookup, 'slds-is-open');

        var iconDirection = component.find("iconDirection");
        $A.util.removeClass(iconDirection, 'slds-input-has-icon_left');
        $A.util.addClass(iconDirection, 'slds-input-has-icon_right');

        component.set("v.searchKey", selectedItem);

    },

    clear: function (component, event, helper) {
        helper.clearComponentConfig(component);
    }

})