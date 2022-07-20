var Helper = /** @class */ (function () {
    function Helper() {
    }
    /**
     * Fetch input data
     * @param elementID
     * @return input element
     */
    Helper.getInputVal = function (elementID) {
        var inputElement = (document.getElementById(elementID));
        return inputElement.value;
    };
    return Helper;
}());
