var locations = document.getElementsByClass("location-option");

var shopMap;

var addToUrl;

for( var i = 0; i < locations.length; i++ ){

    locations[i].addEventListener("click", function () {
        shopMap = document.getElementById("shop-location");

        //replace spaces in location with +
        addToUrl = locations[i].innerHTML.replace(" ", "+");

        //Add property of src to the shopMap iframe
        shopMap.setAttribute("src", "www.google.com/maps/location/" + addToUrl);
    });

}