import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class LeafletMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }

  render() {

    const position = [this.state.lat, this.state.lng];

    if (typeof window !== 'undefined') {
      return (
        <div className="map-wrapper">
          {(typeof window !== 'undefined') ? (
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          ) : null}
        </div>
      )
    }
    return null
  }
}

export default LeafletMap;
