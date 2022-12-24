// Initialize and add the map 
import {data} from './data.js'

function initMap() {
    // The location of The Graduate Center 

    let gc = [{
        name: "THE GRADUATE CENTER, CUNY",
        coords: {
            lat: 40.741895,
            lng: -73.989308
        },
        categories: "THE BEST PLACE FOR GRADUATE STUDIES!"
    }];

    let markers = data;
    
    // The map, centered at The Graduate Center
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: gc[0].coords,
    });

    // Add single marker
    let gc_marker = new google.maps.Marker({
      position: gc[0].coords,
      title: gc[0].name,
      map: map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    let infoWindow = new google.maps.InfoWindow({
        content: addDOMNode(gc[0]),
    });

    gc_marker.addListener('click', function(){
        infoWindow.open(map, gc_marker);
    });

    // Loop through markers
    for (var i = 0; i < 100; i++){
    addMarker(markers[i]);
    };

    function addDOMNode(props){
        let name = props.name;
        let categories = props.categories;

        const div = document.createElement('div');
        const header = document.createElement('h1');
        const para = document.createElement("p");

        const h_node = document.createTextNode(name);
        const p_node = document.createTextNode(categories);

        header.appendChild(h_node);
        para.appendChild(p_node);

        div.appendChild(header);
        div.appendChild(para);

        return div
    };
    // Add Marker Function
    function addMarker(props){

        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        });

        let infoWindow = new google.maps.InfoWindow({
            content: addDOMNode(props)
        });

        
        marker.addListener("click", function(){
            infoWindow.open(map, marker);
        });
    }
  }
  
  window.initMap = initMap;