import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "gatsby";

class LeafletMap extends Component {

  render() {

    const locations = this.props.locations;

    return (
      <div className="map-wrapper">
        {(typeof window !== "undefined") ? (
          <Map bounds={getMapCenter(locations)} center={getSingleLocation(locations)} zoom={getZoomLevel(locations)}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {listMarkers(locations)}
          </Map>
        ) : null}
      </div>
    )

  }
}

const getZoomLevel = (locations) => {
  if (locations.length === 1) {
    return 14;
  }
  return 4;
}

const getSingleLocation = (locations) => {
  if (locations.length === 1) {
    let center = [locations[0].lat, locations[0].lng];
    return center;
  }
  return null;
}

const getMapCenter = (locations) => {
  let latLngBounds = [];
  for (let i = 0; i < locations.length; i++) {
    let {lat, lng} = locations[i];
    let coords = [];
    coords.push(lat, lng);
    latLngBounds.push(coords);
  }
  return latLngBounds.length > 1 ? latLngBounds : null;
}

const listMarkers = (locations) => {
  return locations.map((node, i) => {
    let {lat, lng, name, address, days, description, hours} = node;
    let position = [lat, lng];
    return (
      <Marker key={i} position={position}>
        <Popup>
          {!!name &&
            <><Link to={`/locations/` + name.toLowerCase().replace(/ /g, '-')}><b>{name}</b></Link><br /></>
          }
          {!!address &&
            <>{address}<br/></>
          }
          {!!days &&
            <>{days}<br/></>
          }
          {!!hours &&
            <>{hours}<br/></>
          }
          {!!description &&
            <>{description}<br/></>
          }
          {!name &&
            <><br /><Link to={`/locations/all`}>Back</Link></>
          }
        </Popup>
      </Marker>
    )
  })
};

export default LeafletMap;
