// Create map with layering 
function createMap(earthquakes) {
    // Create the tile layer that will be the background of our map.
    let map = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    // Define the map starting point - centered on Topeka, Kansas
    let myMap = L.map("map", {
      center: [39.0473, -95.6752],
      zoom: 4,
      layers: [map, earthquakes],
    });
  
    // Create the legend
    let legend = L.control({ position: "topright" });
    legend.onAdd = function () {
      let div = L.DomUtil.create("div", "legend");
      let legendInfo =
        "<div><table><tr><th>Earthquake Depth</th></tr>" +
        "<tr style='background-color: #4dfaf4; font-weight: bold; text-align: center'><td>-10-10</td></tr>" +
        "<tr style='background-color: #4db5fa; font-weight: bold; text-align: center'><td>10-30</td></tr>" +
        "<tr style='background-color: #4d50fa; font-weight: bold; text-align: center'><td>30-50</td></tr>" +
        "<tr style='background-color: #746db3; font-weight: bold; text-align: center'><td>50-70</td></tr>" +
        "<tr style='background-color: #3d367a; font-weight: bold; text-align: center'><td>70-90</td></tr>" +
        "<tr style='background-color: #8c0404; font-weight: bold; text-align: center'><td>90+</td></tr></table></div>";
  
      div.innerHTML = legendInfo;
      return div;
    };
  
    legend.addTo(myMap);
  }
  
  // Set url for earthquake data - All earthquakes within the last day
  let url =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  
  // Perform a GET request to the query URL
  d3.json(url).then(function (data) {
    // Send the data.features object to the createFeatures function
    createFeatures(data.features);
  });
  
  function createFeatures(earthquakes) {
    // Define an empty array to hold the earthquake marker information
    let earthquakeInfo = [];
  
    // Set up a loop to add all marker information to the earthquake array
    for (let i = 0; i < earthquakes.length; i++) {
      // Set up variables
      let eventDate = earthquakes[i].properties.time;
      let magnitude = earthquakes[i].properties.mag;
      let longitude = earthquakes[i].geometry.coordinates[0];
      let latitude = earthquakes[i].geometry.coordinates[1];
      let depth = earthquakes[i].geometry.coordinates[2];
  
      // Establish marker colors
      let color = "";
      if (depth <= 10) {
        color = "#4dfaf4";
      } else if (depth <= 30) {
        color = "#4db5fa";
      } else if (depth <= 50) {
        color = "#4d50fa";
      } else if (depth <= 70) {
        color = "#746db3";
      } else if (depth <= 90) {
        color = "#3d367a";
      } else {
        color = "#8c0404";
      }
  
      // Add all marker information to the earthquake array
      earthquakeInfo.push(
        L.circle([latitude, longitude], {
          stroke: false,
          color: "red",
          weight: 3.5,
          fillColor: color,
          fillOpacity: 0.3,
          radius: magnitude * 20000,
        }).bindPopup(
          `<h3>Location: ${earthquakes[i].properties.place}</h3><hr>
          <h4>Time: ${new Date(eventDate)}</h4>
          <h4>Magnitude: ${magnitude}</h4>
          <h4>Latitude: ${latitude}</h4>
          <h4>Longitude: ${longitude}</h4>
          <h4>Depth: ${depth} Kilometers</h4>`
        )
      );
    }
    // Save earthquake information as a layer
    let earthquakemap = L.layerGroup(earthquakeInfo);
  
    // Send the earthquake info layer to the createMap function
    createMap(earthquakemap);
  }