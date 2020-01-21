var locationSelector = document.getElementById("takeout1");

var shopMap;

var addToUrl;



locationSelector.addEventListener("change", function() {
    shopMap = document.getElementById("shop-location");

    console.log(locationSelector.value);

    //replace spaces in location with +
    addToUrl = locationSelector.value.replace(/\s/g, "+");

    console.log("We have changed location");

    //Add property of src to the shopMap iframe
    shopMap.setAttribute("src", "https://www.google.com/maps?q=" + addToUrl + "&output=embed");
});