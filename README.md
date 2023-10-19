## Python Rutgers Bootcamp Challenge - Leaflet Earthquakes Visualization

This activity is broken down into one deliverable which is the creation of the logic javascript file to power a mapping data visualization in Leaflet. 

## Description

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.
  
## Instructions - Create the Earthquake Visualization

![Screenshot 2023-10-19 180742](https://github.com/Connextstrategy/leaflet-challenge/assets/18508699/39fe7d83-4f73-4406-b738-761bcbb341b4)

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON FeedLinks](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

![Screenshot 2023-10-19 181153](https://github.com/Connextstrategy/leaflet-challenge/assets/18508699/06879500-3e1b-49dc-aaca-c4cd32df4345)

* When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

![Screenshot 2023-10-19 181227](https://github.com/Connextstrategy/leaflet-challenge/assets/18508699/29833b78-257b-4e94-83f5-ad747a0a9a11)

2. Import and visualize the data by doing the following:

* Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

    Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

    Hint: The depth of the earth can be found as the third coordinate for each earthquake.

* Include popups that provide additional information about the earthquake when its associated marker is clicked.

* Create a legend that will provide context for your map data.

* Your visualization should look something like the preceding map.

  

### Dependencies

* Using Visual Studio Code for coding and data visualizations
* Web browser to show data visualizations (Google Chrome used but coudl be Mozilla or another)
* Use index to initiate data visualization
* Use app file in static folder to understand code for application

### Installing

* No modifications needed to be made to files/folders

## Help

* Use console.log inside of your JavaScript code to see what your data looks like at each step.

* Refer to the Plotly.js documentationLinks to an external site. when building the plots.

## Authors

Christopher Manfredi

## Version History

    * Initial Release

## Acknowledgments

* This is specifically for an exercise for Rutgers Boot Camp 
