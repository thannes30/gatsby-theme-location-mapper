import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class LeafletMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locations: this.props.locations,
      lat: 51.505,
      lng: -0.09,
      zoom: 4,
    }
  }

  render() {

    console.log(this.props);

    const position = ['39.828', '-98.579'];

    if (typeof window !== 'undefined') {
      return (
        <div className="map-wrapper">
          {(typeof window !== 'undefined') ? (
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            {listMarkers(this.state.locations)}
            </Map>
          ) : null}
        </div>
      )
    }
    return null
  }
}

const listMarkers = (locations) => {
  return locations.map((node, i) => {
    let {lat, lng, name, title, address, days, description, hours} = node;
    console.log(lat, lng, name, title, address, days, description, hours);
    let position = [lat, lng];
    return (
      <Marker key={i} position={position}>
        <Popup>
          {name}<br />
          {days}<br/>
          {description}<br/>
        </Popup>
      </Marker>
    )
  })
};

export default LeafletMap;
