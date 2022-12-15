//const { markers } = require("@observablehq/plot/dist/marks/marker");
// Initialize and add the map 
import {data} from './data.js'

function initMap() {
    // The location of Uluru 

    const gc = { lat: 40.741895, lng: -73.989308 };
    // let markers = [{
    //     name: "YAYCHI, WEST AZERBAIJAN",
    //     coords: {
    //         lat: 39.143055555555556,
    //         lng: 44.57916666666667
    //     },
    //     categories: "POPULATED PLACES IN CHALDORAN COUNTY"
    // }, gc];
    // console.log(markers)

    let markers = data;
    // console.log(markers)
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: markers[1].coords,
    });

    // // Add single marker
    // let marker = new google.maps.Marker({
    //   position: gc,
    //   map: map,
    //   icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    // });

    // let infoWindow = new google.maps.InfoWindow({
    //     content: markers[1].categories
    // });

    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    // });
    
    // Loop through markers
    for (var i = 0; i < 100; i++){
            addMarker(markers[i])
        };
    // Add Marker Function
    function addMarker(props){

        let infoWindow = new google.maps.InfoWindow({
            name: props.name,
            content: props.categories
        });


        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        });

        
        marker.addListener("click", function(){
            infoWindow.open(map, marker);
        });
    }
  }
  
  window.initMap = initMap;