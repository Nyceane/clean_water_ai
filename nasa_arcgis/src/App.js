import React, { Component } from 'react';
import Globe from 'worldwind-react-globe';
import { observer } from "mobx-react";

import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
import SearchBox from './components/SearchBox';
import Tools from './components/Tools';
import Layers from './components/Layers';
import Markers from './components/Markers';
import Settings from './components/Settings';
import WmsCatalog from './api/WmsCatalog';

import './App.css';

/* global WorldWind */

const App = observer(class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseLayers: {layers: [], lastUpdated: Date.now()},
      overlayLayers: {layers: [], lastUpdated: Date.now()},
      settingLayers: {layers: [], lastUpdated: Date.now()},
      debugLayers: {layers: [], lastUpdated: Date.now()}
    };
    // Holds a reference to the Map component after mounting
    this.globeRef = React.createRef();
    this.markersRef = React.createRef();
    this.globe = null;
  }

  /**
   * A property function used to lift state up from the Map into the App.
   * 
   * @param {Object} data An object to be merged into the App's state.
   */
  onGlobeUpdate(data) {
    this.setState(data);
  }

  componentDidMount() {
    // Get the component with the WorldWindow after mounting
    this.globe = this.globeRef.current;

    let layers = [
      {layer: "Blue Marble", options: {category: "base", enabled: false}},
      {layer: "LandSat", options: {category: "base", enabled: false}},
      {layer: "Bing Aerial", options: {category: "base", enabled: false}},
      {layer: "Bing Aerial with Labels", options: {category: "base", enabled: false}},
      {layer: "Sentinal2", options: {category: "base", enabled: false}},
      {layer: "Sentinal2 with Labels", options: {category: "base", enabled: true}},
      {layer: "Bing Roads", options: {category: "base", enabled: false}},
      {layer: "OpenStreetMap", options: {category: "base", enabled: false}},
      {layer: new WorldWind.RenderableLayer("Markers"), options: {category: "data", enabled: true}},
      {layer: "Compass", options: {category: "setting", enabled: false}},
      {layer: "Coordinates", options: {category: "setting", enabled: true}},
      {layer: "View Controls", options: {category: "setting", enabled: true}},
      {layer: "Stars", options: {category: "setting", enabled: false, displayName: "Stars"}},
      {layer: "Atmosphere", options: {category: "setting", enabled: true}},
      {layer: "Tessellation", options: {category: "debug", enabled: false}}
    ];
    for (let config of layers) {
      this.globe.addLayer(config.layer, config.options);
    }

    // Asnychronous loading of WMS layers
    let wmsCatalog = new WmsCatalog("https://worldwind43.arc.nasa.gov/wms");
    wmsCatalog.loadCatalog((layer) =>
      this.globe.addLayer(layer, {category: "overlay", enabled: false})
    );
    let props = new Object();
    props.globe = this.globeRef.current;
    props.markers = this.markersRef.current;
    props.markersLayerName = "Markers";
    let tools = new Tools(props);
    tools.makeMarkers(new WorldWind.Position(37.7265926, -122.492393, 15e3));
    tools.makeMarkers(new WorldWind.Position(37.7355901, -122.4900376, 30e3));
    tools.makeMarkers(new WorldWind.Position(37.7527381, -122.463189, 30e3));
    tools.makeMarkers(new WorldWind.Position(37.7529969, -122.4540777, 30e3));
    tools.makeMarkers(new WorldWind.Position(37.7333441, -122.4791169, 30e3));
    let marker = tools.makeMarkers(new WorldWind.Position(37.7328255, -122.5047465, 15e3));

    componentDidMount();
    function componentDidMount(){
      setInterval(()=> getDataFromApi(marker), 1000);
    }

    async function getDataFromApi(marker) {
      try {
        let response = await fetch(
          'http://iotdata.azurewebsites.net/api/data'
        );
        let responseJson = await response.json();
        if(responseJson.Type === "Contaminated")
        {
          marker.attributes.imageSource = "images/pushpins/contaminated.png"
        }
        else
        {
         marker.attributes.imageSource = "images/pushpins/water.png" 
        }
        console.log('success', responseJson)
        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }
    }
  }



  /**
   * Renders the globe and the panels that render the globe's contents.
   * The Globe element/component sets the primaryGlobe reference used
   * by the panels.
   */
  render() {
    const navbarItems = [
      <NavItem key='markers' title="Locations" icon="map-marker" href="#markers" islink="false" />,
      <NavItem key='settings' title="Settings" icon="cog" href="#settings" islink="false"  />,
      <NavItem key='source' title="Source Code" icon="code" href="https://github.com/nyceane/clean_water_ai" islink="true" />,
      <NavItem key='guide' title="Step By Step Guide" icon="codepen" href="https://www.hackster.io/clean-water-ai/clean-water-ai-e40806" islink="true" />,
      <NavItem key='video' title="Demo Video" icon="youtube" href="https://www.youtube.com/watch?v=QeDSiSZR1hg" islink="false"  />
    ];
    const navbarSearch = <SearchBox globe={this.globe}/>;


    return (
        <div>
            <NavBar 
                title='Clean Water AI'
                logo='images/logo.png'
                href='https://www.hackster.io/clean-water-ai/clean-water-ai-e40806'
                items={navbarItems}
                />
            <div className="App container-fluid p-0">
                <div className="globe">
                    <Globe 
                        ref={this.globeRef} 
                        latitude={37.7265926}
                        longitude={-122.492393}
                        altitude={15e3}
                        onUpdate={this.onGlobeUpdate.bind(this)} />
                </div>
                <div className="overlayCards noninteractive">
                    <div className="card-columns">
                        <div id="markers" className="collapse interactive">
                            <Markers 
                                ref={this.markersRef}
                                globe={this.globeRef.current}
                                markersLayerName="Markers" />
                        </div>
                        <div id="settings" className="collapse interactive">
                            <Settings
                                settingLayers={this.state.settingLayers} 
                                debugLayers={this.state.debugLayers} 
                                globe={this.globe} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  }
});

export default App;
